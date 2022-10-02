export async function fetchUserMessages(userId) {
	return await fetch("http://localhost:5000/messages?userId=" + userId).then(
		(response) => response.json()
	);
}
