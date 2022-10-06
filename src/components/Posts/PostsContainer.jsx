import React from "react"
import { connect } from "react-redux"
import { fetchPosts } from "../../api/posts"
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

	React.useEffect(() => {
		if (!posts.length) {
			getPosts(userId)
		}
	}, [posts, userId, getPosts])

	if (posts.length) {
		return <PostList newPost={newPost} posts={posts} addPost={addPost} updatePost={updatePost} />
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
