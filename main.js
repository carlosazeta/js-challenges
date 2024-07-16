import './style.css'
import panic from './challenges/01-panic/panic_function.js'
import whisper from './challenges/02-whisper/whisper_function.js'
import altCaps from './challenges/03-altCaps/altCaps_function.js'
import {
	capitalizeWord,
	toTitleCase,
} from './challenges/04-toTitleCase/toTitleCase_function.js'
import {
	emojifyWord,
	emojifyPhrase,
} from './challenges/05-emojify/emojify_function.js'
import isAnagram from './challenges/06-anagram/anagram_function.js'
import {
	reverseString,
	reverseStringsInArray,
} from './challenges/07-reverseMessage/reverseMessage_function.js'
import isPalindrome from './challenges/08-palindromes/palindromes_function.js'
import removeDupeChars from './challenges/09-removeDupesChars/removeDupesChars_function.js'
import countChars from './challenges/10-countChars/countChars_function.js'
import removeDupesFromArray from './challenges/11-removeDupesArray/removeDupesArray_function.js'
import flattenArray from './challenges/12-flattenArray/flattenArray_function.js'

const challengeSelect = document.getElementById('challenge-select')
const runButton = document.getElementById('run-challenge')
const resultDiv = document.getElementById('result')
let lastSelectedChallenge = localStorage.getItem('lastSelectedChallenge') || ''

const challenges = {
	panic: () => {
		logResult(panic("I'm almost out of coffee"))
		logResult(panic('winter is coming'))
	},
	whisper: () => {
		logResult(whisper('PLEASE STOP SHOUTING.'))
		logResult(whisper("MA'AM, this is a Wendy's!"))
	},
	altCaps: () => {
		logResult(
			altCaps('When you visit Portland you have to go to VooDoo Donuts')
		)
	},
	toTitleCase: () => {
		logResult(capitalizeWord('pumpkin'))
		logResult(toTitleCase('pumpkin pranced purposefully across the pond'))
	},
	emojify: () => {
		logResult(emojifyWord(':heart:'))
		logResult(emojifyWord(':flower:'))
		logResult(emojifyWord('elephant'))
		logResult(emojifyPhrase('I :heart: my :cat:'))
		logResult(emojifyPhrase('I :heart: my :elephant:'))
	},
	anagram: () => {
		logResult(isAnagram('allergy', 'gallery'))
		logResult(isAnagram('treasure', 'measure'))
	},
	reverseMessage: () => {
		const title = ':htraE no od ot ffutS'
		const messages = [
			'maerc eci yrT',
			'rewoT leffiE tisiV',
			'noom eht ot snamuh etacoleR',
			'egrahc ni stac tuP',
		]
		logResult(reverseString(title))
		logResult(reverseStringsInArray(messages))
	},
	palindromes: () => {
		logResult(isPalindrome('abba'))
		logResult(isPalindrome('civic'))
		logResult(isPalindrome('octopus'))
		logResult(isPalindrome('pumpkins'))
		logResult(isPalindrome('madam'))
	},
	removeDupeChars: () => {
		const password = '9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23'
		logResult(removeDupeChars(password))
	},
	countChars: () => {
		logResult(countChars('Peggy Porth'))
	},
	removeDupesArray: () => {
		const eggScrambleRecipe = [
			'🥓 bacon',
			'🥓 bacon',
			'🍳 eggs',
			'🫑 green peppers',
			'🧀 cheese',
			'🌶️ hot sauce',
			'🥓 bacon',
			'🥦 broccoli',
			'🧀 cheese',
			'🥦 broccoli',
			'🌶️ hot sauce',
		]
		logResult(removeDupesFromArray(eggScrambleRecipe))
	},
	flattenArray: () => {
		const kittyScores = [
			[39, 99, 76],
			89,
			98,
			[87, 56, 90],
			[96, 95],
			40,
			78,
			50,
			[63],
		]

		const kittyPrizes = [
			['💰', '🐟', '🐟'],
			'🏆',
			'💐',
			'💵',
			['💵', '🏆'],
			['🐟', '💐', '💐'],
			'💵',
			'💵',
			['🐟'],
			'🐟',
		]

		logResult(flattenArray(kittyPrizes))
		logResult(flattenArray(kittyScores))
	},
}

function loadAndRunLastChallenge() {
	if (lastSelectedChallenge && challenges[lastSelectedChallenge]) {
		challengeSelect.value = lastSelectedChallenge
		resultDiv.innerHTML = ''
		challenges[lastSelectedChallenge]()
	}
}

function logResult(result) {
	if (Array.isArray(result)) {
		resultDiv.innerHTML += `<p>${JSON.stringify(result)}</p>`
	} else {
		resultDiv.innerHTML += `<p>${result}</p>`
	}
}

challengeSelect.addEventListener('change', (event) => {
	localStorage.setItem('lastSelectedChallenge', event.target.value)
})

runButton.addEventListener('click', () => {
	const selectedChallenge = challengeSelect.value
	if (selectedChallenge && challenges[selectedChallenge]) {
		resultDiv.innerHTML = ''
		challenges[selectedChallenge]()
		localStorage.setItem('lastSelectedChallenge', selectedChallenge)
	} else {
		resultDiv.textContent = 'Please select a challenge.'
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(() => {
		loadAndRunLastChallenge()
	})
}

document.addEventListener('DOMContentLoaded', loadAndRunLastChallenge)
