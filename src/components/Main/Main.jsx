import React from "react"
import { Routes, Route } from "react-router-dom"
import styles from "./Main.module.scss"
import { Container } from "react-bootstrap"
import PostsContainer from "../Posts/PostsContainer"
import NoMatch from "../NoMatch/NoMatch"
import HomeContainer from "../Home/HomeContainer"
import ProfileContainer from "../Profile/ProfileContainer"
import UsersContainer from "../Users/UsersContainer"

const Main = () => {
	return (
		<main className={styles.wrapper}>
			<Container className='py-5'>
				<Routes>
					<Route path='/' element={<HomeContainer />} />
					<Route path='/profile' element={<ProfileContainer isCurrent={true} />} />
					<Route path='/profile/:userName' element={<ProfileContainer isCurrent={false} />} />
					<Route path='/posts' element={<PostsContainer />} />
					<Route path='/messages/*' element={<UsersContainer child='messages' />} />
					<Route path='/users' element={<UsersContainer child='users' />} />
					<Route path='*' element={<NoMatch />} />
				</Routes>
			</Container>
		</main>
	)
}

export default Main
