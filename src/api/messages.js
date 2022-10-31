import { API_URL, getData, postData, STAGE } from "./api"

export async function fetchUserMessages(targetUserId) {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "messages?targetUserId=" + targetUserId, options).then(
		(response) =>
			response.json().then((response) => {
				return response.Items
			})
	)
}

export async function fetchTargetUserMessages(targetUserId) {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "messages?userId=" + targetUserId, options).then((response) =>
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
