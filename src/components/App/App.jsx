import React from "react"
import HeaderContainer from "../Header/HeaderContainer"
import Main from "../Main/Main"
import { setProfile } from "../../redux/profile-reducer"
import { connect } from "react-redux"
import AlertContainer from "../AlertFixed/AlertContainer"
//import { fetchUser } from "../../api/users"

const App = (props) => {
	// let { profile, activeUserId, setProfile } = props

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

	return (
		<React.Fragment>
			<AlertContainer />
			<HeaderContainer />
			<Main />
		</React.Fragment>
	)
}
const mapStateToProps = (state) => {
	return {
		activeUserId: state.profile.activeUserId,
		profile: state.profile.profile,
	}
}

export default connect(mapStateToProps, { setProfile })(App)
