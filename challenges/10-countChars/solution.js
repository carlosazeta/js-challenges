export default function countChars(str) {
	const strWithoutSpaces = str.split(' ').join('')
	const strArr = strWithoutSpaces.toLowerCase().split('')
	let count = {}

	strArr.forEach((letter) => {
		if (count[letter]) {
			count[letter]++
		} else {
			count[letter] = 1
		}
	})

	return count
}
