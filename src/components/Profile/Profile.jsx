import React from "react";

const Profile = () => {
	return (
		<figure className="row">
			<div className="col-6 col-lg-4">
				<img
					className="img-thumbnail"
					alt="user avatar"
					src="data:image/svg+xml;charset=UTF-8,%3csvg class='bd-placeholder-img img-thumbnail' width='200' height='200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200' preserveAspectRatio='xMidYMid slice' focusable='false'%3e%3ctitle%3eA generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera%3c/title%3e%3crect width='100%25' height='100%25' fill='%23868e96'%3e%3c/rect%3e%3c/svg%3e"
				/>
			</div>
			<figcaption className="col-md-6 col-lg-8">
				<h1>User name</h1>
				<ul>
					<li>email: </li>
					<li>info: </li>
				</ul>
			</figcaption>
		</figure>
	);
};

export default Profile;
