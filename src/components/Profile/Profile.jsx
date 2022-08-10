import React from "react";
import { Figure, Col, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Profile = (props) => {
	let { profile } = props;
	return (
		<Figure className="row">
			<Col xxs={3} lg={2}>
				<Image
					thumbnail
					alt="user avatar"
					src="data:image/svg+xml;charset=UTF-8,%3csvg class='bd-placeholder-img img-thumbnail' width='200' height='200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200' preserveAspectRatio='xMidYMid slice' focusable='false'%3e%3ctitle%3eA generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera%3c/title%3e%3crect width='100%25' height='100%25' fill='%23868e96'%3e%3c/rect%3e%3c/svg%3e"
				/>
			</Col>
			<Figure.Caption className="col-9 col-lg-10">
				<h1 className="header-underscore fs-4">
					{profile.firstName} {profile.lastName}
				</h1>
				<Table striped>
					<tbody>
						<tr>
							<th>email:</th>
							<td className="ps-2">{profile.email}</td>
						</tr>
						<tr>
							<th>info:</th>
							<td className="ps-2">{profile.info}</td>
						</tr>
					</tbody>
				</Table>
			</Figure.Caption>
		</Figure>
	);
};

export default Profile;
