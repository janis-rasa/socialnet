import React from "react"
import { fetchUser } from "../api/usersAPI"
import { connect } from "react-redux"
import { setProfile } from "../redux/profile-reducer"

const mapStateToProps = (state) => {
	return {
		activeUserId: state.profile.activeUserId,
		profile: state.profile.profile,
	}
}

export const withProfile = (PassedComponent) => {
	const WrappedComponent = (props) => {
		let { activeUserId, profile, setProfile } = props
		const getUser = React.useCallback(
			() => fetchUser(activeUserId).then((response) => setProfile(response)),
			[activeUserId, setProfile]
		)

		React.useEffect(() => {
			if (!profile.userId) {
				getUser()
			}
		}, [profile, getUser])
		delete props.setProfile

		return profile.userId && <PassedComponent {...props} />
	}

	return connect(mapStateToProps, { setProfile })(WrappedComponent)
}
