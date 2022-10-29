import { API_URL, deleteData, postData, STAGE } from "./api"

export async function fetchPosts(userId) {
	return fetch(API_URL + STAGE + "posts?userId=" + userId).then((response) =>
		response.json().then((response) => response.Items)
	)
}

export async function fetchPost(userId, postId) {
	return fetch(API_URL + STAGE + "posts?userId=" + userId + "&postId=" + postId).then((response) =>
		response.json().then((response) => response.Items)
	)
}

export async function postNewUpdatePost(post) {
	const data = postData(post)
	// @ts-ignore
	return fetch(API_URL + STAGE + "posts/create", data).then((response) => response.json())
}

export async function fetchDeletePost(postId, unixTimestamp) {
	const data = deleteData({ postId: postId, unixTimestamp: unixTimestamp })
	// @ts-ignore
	return fetch(API_URL + STAGE + "posts", data).then((response) => response.json())
}
