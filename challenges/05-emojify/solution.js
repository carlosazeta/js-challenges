const emojis = {
	smile: '😊',
	angry: '😠',
	party: '🎉',
	heart: '💜',
	cat: '🐱',
	dog: '🐕',
}

function emojifyWord(word) {
	if (!word.startsWith(':') && !word.endsWith(':')) return word

	const wordSlice = word.slice(1, -1)

	if (emojis[wordSlice]) {
		return emojis[wordSlice]
	} else {
		return wordSlice
	}
}

function emojifyPhrase(phrase) {
	const newPhrase = phrase.split(' ').map((word) => emojifyWord(word))

	return newPhrase.join(' ')
}
