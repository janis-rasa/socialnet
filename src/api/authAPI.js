import { API_URL, getData, postData, STAGE } from "./api"

export async function postCredentials(userCredentials) {
	const options = postData(userCredentials)
	try {
		// @ts-ignore
		return await fetch(API_URL + STAGE + "login", options).then((response) => response.json())
	} catch (error) {
		return error
	}
}

export async function logoutCurrentUser() {
	const options = postData()
	try {
		// @ts-ignore
		return await fetch(API_URL + STAGE + "logout", options).then((response) => response.json())
	} catch (error) {
		return error
	}
}

export async function isAuth() {
	const options = getData()
	try {
		// @ts-ignore
		return await fetch(API_URL + STAGE + "auth", options).then((response) => response.json())
	} catch (error) {
		return error
	}
}
