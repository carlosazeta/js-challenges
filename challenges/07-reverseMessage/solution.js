function reverseString(arr) {
	return arr.split('').reverse().join('')
}

function reverseStringsInArray(arr) {
	return arr.map((message) => reverseString(message)).join(' ')
}
