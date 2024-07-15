function removeDupesFromArray(arr) {
	return [...new Set(arr)]
}

// Sin crear un nuevo set

function removeDupesFromArray(arr) {
	return arr.filter((element, index) => arr.indexOf(element) === index)
}
