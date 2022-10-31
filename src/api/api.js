export const STAGE = "/dev/"
export const API_URL = "https://localhost:4000"
const FETCH_OPTIONS = {
	method: "POST", // *GET, POST, PUT, DELETE, etc.
	mode: "cors", // no-cors, *cors, same-origin
	cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
	credentials: "include", // include, *same-origin, omit
	headers: {
		"Content-Type": "application/json",
		// 'Content-Type': 'application/x-www-form-urlencoded',
	},
	redirect: "follow", // manual, *follow, error
	referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	body: "",
}
export const postData = (data = {}) => {
	let fetchOptions = { ...FETCH_OPTIONS }
	fetchOptions.body = JSON.stringify(data)
	return fetchOptions
}

export const deleteData = (data) => {
	let fetchOptions = { ...FETCH_OPTIONS, method: "DELETE" }
	fetchOptions.body = JSON.stringify(data)
	return fetchOptions
}

export const getData = () => {
	let fetchOptions = { ...FETCH_OPTIONS, method: "GET" }
	delete fetchOptions.body
	return fetchOptions
}
