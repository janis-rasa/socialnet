import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import {
	updateCurrentPost,
	getPostsThunkCreator,
	postNewUpdatePostThunkCreator,
	removePostThunkCreator,
} from "../../redux/posts-reducer"
import PostList from "./PostList"

const PostsContainer = (props) => {
	let {
		currentPost,
		posts,
		activeUserId,
		updateCurrentPost,
		getPosts,
		isFetchingData,
		postNewUpdatePost,
		removePost,
	} = props

	const [show, setShow] = React.useState(false)
	const [modalTitle, setModalTitle] = React.useState("")
	const [modalType, setModalType] = React.useState("")
	let [isSubmitDisabled, setSubmitDisabled] = React.useState(false)

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
		removePost(post.postId, post.unixTimestamp)
		setShow(false)
	}

	const updatePost = (event) => {
		updateCurrentPost({ [event.target.name]: event.target.value })
	}

	const randomImage = () => {
		const randomAct = Math.floor(Math.random() * 167772)
		return "https://loremflickr.com/480/270/abstract?" + randomAct
	}

	const saveNewEditPost = () => {
		setSubmitDisabled(true)
		const currentPostData = {
			title: currentPost.title,
			text: currentPost.text,
			imageUrl: currentPost.imageUrl ? currentPost.imageUrl : randomImage(),
			userId: activeUserId,
			isActive: 1,
			unixTimestamp: currentPost.unixTimestamp ? currentPost.unixTimestamp : Date.now(),
			postId: currentPost.postId,
		}
		postNewUpdatePost(currentPostData)
		setShow(false)
	}

	React.useEffect(() => {
		if (!posts.length) {
			getPosts()
		}
		console.log("isFetchingData: ", isFetchingData)
		if (!isFetchingData) {
			setSubmitDisabled(false)
		}
	}, [posts, getPosts, isFetchingData])

	if (posts.length) {
		return (
			<PostList
				currentPost={currentPost}
				posts={posts}
				modalOptions={modalOptions}
				isSubmitDisabled={isSubmitDisabled}
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
		activeUserId: state.profile.activeUserId,
		isFetchingData: state.postsPage.isFetchingData,
	}
}

export default compose(
	connect(mapStateToProps, {
		updateCurrentPost,
		getPosts: getPostsThunkCreator,
		postNewUpdatePost: postNewUpdatePostThunkCreator,
		removePost: removePostThunkCreator,
	}),
	withAuthRedirect
)(PostsContainer)
