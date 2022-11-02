import React from "react"
import { connect } from "react-redux"
import Profile from "./Profile"
import { useParams } from "react-router-dom"
import { getUserByNameThunkCreator } from "../../redux/profile-reducer"

const ProfileContainer = (props) => {
	let { isCurrent, targetProfile, getUser } = props
	let { userName } = useParams()

	React.useEffect(() => {
		if (userName && userName !== targetProfile.userName) {
			getUser(userName)
		}
	}, [targetProfile, userName, getUser])

	return <Profile profile={isCurrent ? props.profile : props.targetProfile} />
}

let mapStateToProps = (state) => {
	return {
		profile: state.profile.profile,
		targetProfile: state.profile.targetProfile,
	}
}

export default connect(mapStateToProps, { setTargetProfile: getUserByNameThunkCreator })(
	ProfileContainer
)
