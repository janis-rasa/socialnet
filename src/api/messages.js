import { API_URL, postData, STAGE } from "./api"

export async function fetchUserMessages(userId, targetUserId) {
	return fetch(
		API_URL + STAGE + "messages?userId=" + userId + "&targetUserId=" + targetUserId
	).then((response) =>
		response.json().then((response) => {
			return response.Items
		})
	)
}

export async function postNewMessage(message) {
	const data = postData(message)
	// @ts-ignore
	return fetch(API_URL + STAGE + "messages/create", data).then((response) => response.json())
}
