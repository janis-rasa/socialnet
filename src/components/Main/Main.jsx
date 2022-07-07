import React from "react"
import Container from "react-bootstrap/Container"
import PostList from "../PostList/PostList"

const Main = () => {
	return (
		<Container className="py-3">
			<PostList />
		</Container>
	)
}

export default Main
