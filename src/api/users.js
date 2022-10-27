import { API_URL, STAGE } from "./api"

export async function fetchUsers(limit, lastEvaluatedKey) {
	const lastKey = Object.keys(lastEvaluatedKey).length
		? encodeURI(JSON.stringify(lastEvaluatedKey))
		: ""
	return fetch(API_URL + STAGE + "users?limit=" + limit + lastKey).then((response) =>
		response.json()
	)
}

export async function fetchUser(userId) {
	return fetch(API_URL + STAGE + "users?userId=" + userId).then((response) =>
		response.json().then((response) => response.Items[0])
	)
}

export async function fetchUserByName(userName) {
	return fetch(API_URL + STAGE + "users?userName=" + userName).then((response) =>
		response.json().then((response) => response.Items[0])
	)
}

export async function fetchUsersCount() {
	return fetch(API_URL + STAGE + "users?info=true").then((response) => response.json())
}
