export async function fetchPosts(userId) {
	return await fetch("http://localhost:5000/posts?userId=" + userId).then((response) =>
		response.json()
	)
}
