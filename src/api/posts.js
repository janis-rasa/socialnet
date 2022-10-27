import { API_URL, postData, STAGE } from "./api"

export async function fetchPosts(userId) {
	return fetch(API_URL + STAGE + "posts?userId=" + userId).then((response) =>
		response.json().then((response) => response.Items)
	)
}

export async function postNewUpdatePost(post) {
	const data = postData(post)
	// @ts-ignore
	return fetch(API_URL + STAGE + "posts/create", data).then((response) => response.json())
}
