let initialState = {
	username: "defaultUser",
	userId: 3,
	firstName: "FirstName",
	lastName: "LastName",
	email: "test@mail.com",
	userLocale: "lv",
	info: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
	image:
		"data:image/svg+xml;charset=UTF-8,%3csvg class='bd-placeholder-img img-thumbnail' width='200' height='200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200' preserveAspectRatio='xMidYMid slice' focusable='false'%3e%3ctitle%3eA generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera%3c/title%3e%3crect width='100%25' height='100%25' fill='%23868e96'%3e%3c/rect%3e%3c/svg%3e",
};

const profileReducer = (state = initialState) => {
	return state;
};

export default profileReducer;
