import { connect } from "react-redux"
import Header from "./Header"

let mapStateToProps = (state) => {
	return {
		navLinks: state.navLinks,
		profile: state.profile.profile,
	}
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer
