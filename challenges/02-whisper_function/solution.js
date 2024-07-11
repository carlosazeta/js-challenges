export default function whisper(str) {
	const whisperPrefix = 'shh...'

	if (str.endsWith('!')) {
		return `${whisperPrefix} ${str.slice(0, -1).toLowerCase()}`
	}

	return `${whisperPrefix} ${str.toLowerCase()}`
}
