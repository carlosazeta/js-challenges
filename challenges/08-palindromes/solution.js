export default function isPalindrome(str) {
	const strReversed = str.split('').reverse().join('')

	return str === strReversed
}
