export default function isAnagram(str1, str2) {
	const str1Ordered = str1.split('').sort().join('')
	const str2Ordered = str2.split('').sort().join('')

	return str1Ordered === str2Ordered
}
