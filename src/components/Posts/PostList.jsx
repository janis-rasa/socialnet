import React from "react"
import Post from "./Post"
import { Col, Row } from "react-bootstrap"
import NewPost from "./NewPost"

const PostList = (props) => {
	const postsRender = props.posts.map((post, index) => (
		<Col md={6} lg={4} className='d-flex mb-3' key={"post" + index}>
			<Post post={post} />
		</Col>
	))

	return (
		<React.Fragment>
			<h1 className='visually-hidden'>Posts</h1>
			<NewPost
				handleAddPost={props.handleAddPost}
				handleUpdatePost={props.handleUpdatePost}
				newPost={props.newPost}
			/>
			<Row>{postsRender}</Row>
		</React.Fragment>
	)
}

export default PostList
