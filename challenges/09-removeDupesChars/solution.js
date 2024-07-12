export default function removeDupeChars(chars) {
	let dupesRemoved = ''

	chars.split('').forEach((char) => {
		if (!dupesRemoved.includes(char)) {
			dupesRemoved += char
		}
	})

	return dupesRemoved
}
