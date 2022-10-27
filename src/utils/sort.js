/**
 *
 * @param {Array} arr          - Array of objects to sort.
 * @param {String} sortKeyName - Name of the key of the object by which sorting will be performed.
 * @param {"ASC" | "DESC"} direction - Direction to sort, Default ASC.
 * @returns {Array} New sorted array
 */
export const arraySort = (arr, sortKeyName, direction = "ASC") => {
	let newArr = [...arr]
	newArr.sort((a, b) => {
		const keyA = a[sortKeyName],
			keyB = b[sortKeyName]
		// Compare two keys
		if (direction === "ASC") {
			if (keyA < keyB) return -1
			if (keyA > keyB) return 1
			return 0
		} else {
			if (keyA > keyB) return -1
			if (keyA < keyB) return 1
			return 0
		}
	})
	return newArr
}
