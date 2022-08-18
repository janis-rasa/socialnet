import { connect } from "react-redux";
import {
	addPostActionCreator,
	updatePostActionCreator,
} from "../../redux/posts-reducer";
import PostList from "./PostList";

const mapStateToProps = (state) => {
	return {
		newPost: state.postsPage.newPost,
		posts: state.postsPage.posts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostActionCreator());
		},
		updatePost: (event) => {
			let postValue = { [event.target.name]: event.target.value };
			dispatch(updatePostActionCreator(postValue));
		},
	};
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostList);

export default PostsContainer;
