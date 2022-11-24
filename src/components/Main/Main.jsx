import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import styles from "./Main.module.scss"
import { Container } from "react-bootstrap"
import PostsContainer from "../Posts/PostsContainer"
import NoMatch from "../NoMatch/NoMatch"
import HomeContainer from "../Home/HomeContainer"
import ProfileContainer from "../Profile/ProfileContainer"
import UsersContainer from "../Users/UsersContainer"
import LoginContainer from "../Login/LoginContainer"
import LogoutContainer from "../Logout/LogoutContainer"

const Main = () => {
	// const location = useLocation()
	// const [displayLocation, setDisplayLocation] = React.useState(location)
	// const [transitionStage, setTransitionStage] = React.useState(styles.fadeIn)

	/*React.useEffect(() => {
		if (location !== displayLocation) {
			setTransitionStage(styles.fadeOut)
		}
	}, [location, displayLocation])*/

	/*
	const handleTransitionEnd = () => {
		if (transitionStage === styles.fadeOut) {
			setTransitionStage(styles.fadeIn)
			setDisplayLocation(location)
		}
	} 
	*/
	//location={displayLocation}
	return (
		<main className={styles.wrapper}>
			{/*<div className={transitionStage} onAnimationEnd={handleTransitionEnd}>*/}
			<Container className='py-5'>
				<Routes>
					<Route path='/' element={<HomeContainer />} />
					<Route path='/login' element={<LoginContainer />} />
					<Route path='/logout' element={<LogoutContainer />} />
					<Route path='/profile' element={<ProfileContainer isCurrent={true} />} />
					<Route path='/profile/:userName' element={<ProfileContainer isCurrent={false} />} />
					<Route path='/posts' element={<PostsContainer />} />
					<Route path='/messages/*' element={<UsersContainer child='messages' />} />
					<Route path='/users' element={<UsersContainer child='users' />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</Container>
			{/*</div>*/}
		</main>
	)
}

export default Main
