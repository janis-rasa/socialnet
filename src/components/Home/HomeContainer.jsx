import { connect } from "react-redux";
import Home from "./Home";

let mapStateToProps = (state) => {
	return {
		homePage: state.homePage,
	};
};

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
