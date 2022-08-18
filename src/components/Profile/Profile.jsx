import React from "react";
import { Figure, Col, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Profile = (props) => {
	let { profile } = props;
	return (
		<Figure className="row">
			<Col xxs={3} lg={2}>
				<Image thumbnail alt="user avatar" src={profile.image} />
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
