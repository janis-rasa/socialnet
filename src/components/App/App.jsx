import React from "react"
import HeaderContainer from "../Header/HeaderContainer"
import Main from "../Main/Main"
import { setProfile } from "../../redux/profile-reducer"
import { connect } from "react-redux"
import AlertContainer from "../AlertFixed/AlertContainer"
import Loader from "../Loader/Loader"

const App = (props) => {
	/* const getUser = React.useCallback(
		(userId) => {
			fetchUser(userId).then((response) => setProfile(response))
		},
		[setProfile]
	) */

	/* React.useEffect(() => {
		if (activeUserId && activeUserId !== profile.userId) {
			getUser(activeUserId)
		}
	}, [activeUserId, profile, getUser]) */

	return props.isLoading ? (
		<Loader />
	) : (
		<React.Fragment>
			<AlertContainer />
			<HeaderContainer />
			<Main />
		</React.Fragment>
	)
}
const mapStateToProps = (state) => {
	return {
		isLoading: state.app.isLoading,
	}
}

export default connect(mapStateToProps, { setProfile })(App)
