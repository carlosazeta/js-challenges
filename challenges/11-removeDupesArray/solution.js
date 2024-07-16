function removeDupesFromArray(arr) {
	return [...new Set(arr)]
}

// Other solution

function removeDupesFromArray(arr) {
	return arr.filter((element, index) => arr.indexOf(element) === index)
}
