import { API_URL, getData, postData, STAGE } from "./api"

export async function postCredentials(userCredentials) {
	const options = postData(userCredentials)
	// @ts-ignore
	return fetch(API_URL + STAGE + "login", options).then((response) => response.json())
}

export async function isAuth() {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "auth", options).then((response) => response.json())
}
