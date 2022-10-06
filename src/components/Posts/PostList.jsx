import React from "react"
import Post from "./Post"
import { Col, Row } from "react-bootstrap"
import NewPost from "./NewPost"

const PostList = (props) => {
	const handleUpdatePost = (event) => {
		props.updatePost({ [event.target.name]: event.target.value })
	}
	const postsRender = props.posts.map((post, index) => (
		<Col md={6} lg={4} xl={3} className='d-flex mb-3' key={"post" + index}>
			<Post post={post} />
		</Col>
	))

	return (
		<React.Fragment>
			<h1 className='visually-hidden'>Posts</h1>
			<NewPost addPost={props.addPost} updatePost={handleUpdatePost} newPost={props.newPost} />
			<Row>{postsRender}</Row>
		</React.Fragment>
	)
}

export default PostList
