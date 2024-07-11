function capitalizeWord(word) {
	return word[0].toUpperCase() + word.slice(1)
}

function toTitleCase(str) {
	const strArr = str.split(' ')

	return strArr.map((word) => capitalizeWord(word)).join(' ')
}
