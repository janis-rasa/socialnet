import { API_URL, STAGE, getData } from "./api"

export async function fetchUsers(limit, lastEvaluatedKey) {
	const options = getData()
	const lastKey = Object.keys(lastEvaluatedKey).length
		? encodeURI(JSON.stringify(lastEvaluatedKey))
		: ""
	// @ts-ignore
	return fetch(API_URL + STAGE + "users?limit=" + limit + lastKey, options).then((response) =>
		response.json()
	)
}

export async function fetchUser(userId) {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "users?userId=" + userId, options).then((response) =>
		response.json().then((response) => response.Items[0])
	)
}

export async function fetchUserByName(userName) {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "users?userName=" + userName, options).then((response) =>
		response.json().then((response) => response.Items[0])
	)
}

export async function fetchUsersCount() {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "users?info=true", options).then((response) => response.json())
}
