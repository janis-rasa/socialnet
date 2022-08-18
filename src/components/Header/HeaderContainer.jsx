import { connect } from "react-redux";
import Header from "./Header";

let mapStateToProps = (state) => {
	return {
		navLinks: state.navLinks,
	};
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
