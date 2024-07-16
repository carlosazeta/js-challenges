function flattenArray(arr) {
	return arr.flat()
}

// Manually

function flattenArrayManual(arr) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flattenArrayManual(arr[i]))
		} else {
			result.push(arr[i])
		}
	}
	return result
}
