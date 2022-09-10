const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

let initialState = {
	posts: [
		{
			id: 1,
			title: "Card Title 1",
			text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
			imageUrl:
				"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		},
		{
			id: 2,
			title: "Card Title 2",
			text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eaque amet perferendis excepturi voluptates quam neque at officiis minus!",
			imageUrl:
				"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23121287%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
		},
	],
	newPost: {
		postTitle: "",
		postText: "",
	},
};

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			const newPost = {
				title: state.newPost.postTitle,
				text: state.newPost.postText,
				id: Date.now(),
				imageUrl: randomImage(),
			};
			return {
				...state,
				newPost: { postTitle: "", postText: "" },
				posts: [...state.posts, newPost],
			};
		case UPDATE_POST:
			return { ...state, newPost: { ...state.newPost, ...action.postValue } };
		default:
			return state;
	}
};

export const addPostAC = () => ({ type: ADD_POST });

export const updatePostAC = (postValue) => ({
	type: UPDATE_POST,
	postValue: postValue,
});

export default postsReducer;

const randomImage = () => {
	const svgFill = Math.floor(Math.random() * 16777215).toString(16);
	return (
		"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181d5017221%20text%20%7Bfill%3A%23FFFFFF%3Bfont-weight%3Anormal%3Bfont-family%3Avar%28--bs-font-sans-serif%29%2Cmonospace%3Bfont-size%3A14pt%3Bstroke%3A%20%23000000%3Bstroke-width%3A2px%3Bpaint-order%3Astroke%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181d5017221%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23" +
		svgFill +
		"%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
	);
};
