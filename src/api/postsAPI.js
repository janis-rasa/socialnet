import { API_URL, deleteData, getData, postData, STAGE } from "./api"

export async function fetchPosts() {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "posts", options).then((response) =>
		response.json().then((response) => response.Items)
	)
}

export async function fetchPost(postId) {
	const options = getData()
	// @ts-ignore
	return fetch(API_URL + STAGE + "posts?postId=" + postId, options).then((response) =>
		response.json().then((response) => response.Items)
	)
}

export async function postNewUpdatePost(post) {
	const options = postData(post)
	// @ts-ignore
	return fetch(API_URL + STAGE + "posts/create", options).then((response) => response.json())
}

export async function fetchDeletePost(postId, unixTimestamp) {
	const options = deleteData({ postId: postId, unixTimestamp: unixTimestamp })
	// @ts-ignore
	return fetch(API_URL + STAGE + "posts", options).then((response) => response.json())
}
