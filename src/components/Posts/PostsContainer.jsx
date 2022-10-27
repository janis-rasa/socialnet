import React from "react"
import { connect } from "react-redux"
import { fetchPosts, postNewUpdatePost } from "../../api/posts"
import { addPost, updatePost, setPosts } from "../../redux/posts-reducer"
import PostList from "./PostList"

const PostsContainer = (props) => {
	let { newPost, posts, userId, setPosts, updatePost, addPost } = props

	const getPosts = React.useCallback(
		(id) => {
			fetchPosts(id).then((response) => setPosts(response))
		},
		[setPosts]
	)

	const handleUpdatePost = (event) => {
		updatePost({ [event.target.name]: event.target.value })
	}

	const randomImage = () => {
		const randomAct = Math.floor(Math.random() * 167772)
		return "https://loremflickr.com/480/270/abstract?" + randomAct
	}

	const handleAddPost = () => {
		const newPostData = {
			title: newPost.postTitle,
			text: newPost.postText,
			imageUrl: randomImage(),
			userId: userId,
			isActive: 1,
			timestamp: Date.now(),
		}
		postNewUpdatePost(newPostData).then((response) => {
			if (response.postId) {
				addPost(newPostData)
			}
		})
	}

	React.useEffect(() => {
		if (!posts.length) {
			getPosts(userId)
		}
	}, [posts, userId, getPosts])

	if (posts.length) {
		return (
			<PostList
				newPost={newPost}
				posts={posts}
				handleAddPost={handleAddPost}
				handleUpdatePost={handleUpdatePost}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		newPost: state.postsPage.newPost,
		posts: state.postsPage.posts,
		userId: state.profile.activeUserId,
	}
}

export default connect(mapStateToProps, { addPost, updatePost, setPosts })(PostsContainer)
