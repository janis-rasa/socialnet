import React from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { logoutThunkCreator } from "../../redux/profile-reducer"
import Logout from "./Logout"

const LogoutContainer = (props) => {
	return <Logout logout={props.logout} />
}

const mapStateToProps = (state) => ({})

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { logout: logoutThunkCreator })
)(LogoutContainer)
