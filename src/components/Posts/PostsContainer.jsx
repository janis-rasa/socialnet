import React from "react"
import { connect } from "react-redux"
import { fetchDeletePost, fetchPosts, postNewUpdatePost } from "../../api/posts"
import { addPost, updateCurrentPost, setPosts, removePost } from "../../redux/posts-reducer"
import PostList from "./PostList"

const PostsContainer = (props) => {
	let { currentPost, posts, userId, setPosts, updateCurrentPost, addPost, removePost } = props

	const [show, setShow] = React.useState(false)
	const [modalTitle, setModalTitle] = React.useState("")
	const [modalType, setModalType] = React.useState("")
	let [isSubmitPostDisabled, setSubmitPostDisabled] = React.useState(false)

	const modalOptions = React.useMemo(
		() => ({ type: modalType, title: modalTitle, show: show }),
		[modalType, modalTitle, show]
	)

	const modifyPost = (type, post) => {
		switch (type) {
			case "new":
				setModalTitle("Add new post")
				break
			case "edit":
				setModalTitle("Edit post")
				break
			case "delete":
				setModalTitle("Delete post " + post.title)
				break
			default:
		}
		updateCurrentPost(post)
		setModalType(type)
		setShow(true)
	}

	const deletePost = (post) => {
		fetchDeletePost(post.postId, post.unixTimestamp).then((response) => {
			if (response.postId) {
				removePost(response.postId)
				setShow(false)
			}
		})
	}

	const getPosts = React.useCallback(() => {
		fetchPosts().then((response) => setPosts(response))
	}, [setPosts])

	const updatePost = (event) => {
		updateCurrentPost({ [event.target.name]: event.target.value })
	}

	const randomImage = () => {
		const randomAct = Math.floor(Math.random() * 167772)
		return "https://loremflickr.com/480/270/abstract?" + randomAct
	}

	const saveNewEditPost = () => {
		setSubmitPostDisabled(true)
		const currentPostData = {
			title: currentPost.title,
			text: currentPost.text,
			imageUrl: currentPost.imageUrl ? currentPost.imageUrl : randomImage(),
			userId: userId,
			isActive: 1,
			unixTimestamp: currentPost.unixTimestamp ? currentPost.unixTimestamp : Date.now(),
			postId: currentPost.postId,
		}
		postNewUpdatePost(currentPostData).then((response) => {
			if (response.postId) {
				currentPostData.postId = response.postId
				setShow(false)
				addPost(currentPostData)
				setSubmitPostDisabled(false)
			}
		})
	}

	React.useEffect(() => {
		if (!posts.length) {
			getPosts()
		}
	}, [posts, userId, getPosts])

	if (posts.length) {
		return (
			<PostList
				currentPost={currentPost}
				posts={posts}
				modalOptions={modalOptions}
				isSubmitPostDisabled={isSubmitPostDisabled}
				setShow={setShow}
				setModalType={setModalType}
				saveNewEditPost={saveNewEditPost}
				updatePost={updatePost}
				modifyPost={modifyPost}
				deletePost={deletePost}
			/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentPost: state.postsPage.currentPost,
		posts: state.postsPage.posts,
		userId: state.profile.activeUserId,
	}
}

export default connect(mapStateToProps, { addPost, updateCurrentPost, setPosts, removePost })(
	PostsContainer
)
