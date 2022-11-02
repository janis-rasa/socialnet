import React from "react"
import Post from "./Post"
import { Button, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { regular } from "@fortawesome/fontawesome-svg-core/import.macro"
import NewEditPost from "./NewEditPost"
import ModalCustom from "../ModalCustom/ModalCustom"
import PostBody from "./PostBody"
import PostDelete from "./PostDelete"

const PostList = (props) => {
	const postsRender = props.posts.map((post, index) => (
		<Col md={6} lg={4} className='d-flex mb-3' key={"post" + index}>
			<Post post={post} modifyPost={props.modifyPost} isSubmitDisabled={props.isSubmitDisabled} />
		</Col>
	))

	return (
		<React.Fragment>
			<h1 className='visually-hidden'>Posts</h1>
			<div className='mb-3'>
				<Button variant='primary' onClick={() => props.modifyPost("new", {})}>
					<FontAwesomeIcon icon={regular("square-plus")} size='lg' />
					<span className='ms-2'>Add new post</span>
				</Button>
			</div>
			<Row>{postsRender}</Row>
			<ModalCustom
				show={props.modalOptions.show}
				setShow={props.setShow}
				title={props.modalOptions.title}
			>
				{props.modalOptions.type.match(/(new)|(edit)/g) && (
					<NewEditPost
						updatePost={props.updatePost}
						currentPost={props.currentPost}
						saveNewEditPost={props.saveNewEditPost}
						isSubmitDisabled={props.isSubmitDisabled}
					/>
				)}
				{props.modalOptions.type === "view" && <PostBody post={props.currentPost} />}
				{props.modalOptions.type === "delete" && (
					<PostDelete
						post={props.currentPost}
						deletePost={props.deletePost}
						setShow={props.setShow}
						isSubmitDisabled={props.isSubmitDisabled}
					/>
				)}
			</ModalCustom>
		</React.Fragment>
	)
}

export default PostList
