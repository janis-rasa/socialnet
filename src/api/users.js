export async function fetchUsers(page, limit) {
	return await fetch(
		"http://localhost:5000/users?_page=" + page + "&_limit=" + limit
	).then((response) =>
		Promise.all([response.json(), response.headers.get("x-total-count")])
	);
}

export async function fetchUser(userId) {
	return await fetch("http://localhost:5000/users?userId=" + userId).then(
		(response) => response.json()
	);
}
