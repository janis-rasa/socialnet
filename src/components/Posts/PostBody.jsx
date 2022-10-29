import React from "react"
import { Image } from "react-bootstrap"

const PostBody = (props) => {
	let { post } = props
	return (
		<React.Fragment>
			<Image src={post.imageUrl} fluid rounded />
			<p className='mt-3'>{post.text}</p>
		</React.Fragment>
	)
}

export default PostBody
