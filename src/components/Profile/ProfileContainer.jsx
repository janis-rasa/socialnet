import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { useParams } from "react-router-dom"
import { getUserByNameThunkCreator } from "../../redux/profile-reducer"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

const ProfileContainer = (props) => {
	let { isCurrent, targetProfile, getUser, activeUserId } = props
	let { userName } = useParams()

	React.useEffect(() => {
		if (activeUserId && userName && userName !== targetProfile.userName) {
			getUser(userName)
		}
	}, [targetProfile, userName, activeUserId, getUser])

	return <Profile profile={isCurrent ? props.profile : props.targetProfile} />
}

let mapStateToProps = (state, ownProps) => {
	return {
		profile: state.profile.profile,
		targetProfile: state.profile.targetProfile,
		activeUserId: state.profile.activeUserId,
		isCurrent: ownProps.isCurrent,
	}
}

export default compose(
	connect(mapStateToProps, { getUser: getUserByNameThunkCreator }),
	withAuthRedirect
)(ProfileContainer)
