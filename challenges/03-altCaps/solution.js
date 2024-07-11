export default function altCaps(str) {
	let newStr = ''

	str.split('').forEach((letter, index) => {
		if (index % 2 === 0) {
			newStr += letter.toUpperCase()
		} else {
			newStr += letter
		}
	})
	return newStr
}
