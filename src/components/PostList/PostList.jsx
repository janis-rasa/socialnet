import Post from "../Post/Post";
import React from "react";
import { Col, Row } from "react-bootstrap";

const PostList = () => {
	const posts = [
		{
			title: "Card Title 1",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			imageUrl:
				"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		},
		{
			title: "Card Title 2",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eaque amet perferendis excepturi voluptates quam neque at officiis minus!",
			imageUrl:
				"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23121287%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		},
	];

	const postsRender = posts.map((post, index) => (
		<Col md={6} lg={4} xl={3} className="d-flex mb-3" key={"post" + index}>
			<Post post={post} />
		</Col>
	));

	return (
		<React.Fragment>
			<h1 className="visually-hidden">Posts</h1>
			<Row>{postsRender}</Row>
		</React.Fragment>
	);
};

export default PostList;
