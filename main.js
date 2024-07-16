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

const challengeSelect = document.getElementById('challenge-select')
const runButton = document.getElementById('run-challenge')
const resultDiv = document.getElementById('result')

const challenges = {
	panic: () => {
		console.log(panic("I'm almost out of coffee"))
		console.log(panic('winter is coming'))
	},
	whisper: () => {
		console.log(whisper('PLEASE STOP SHOUTING.'))
		console.log(whisper("MA'AM, this is a Wendy's!"))
	},
	altCaps: () => {
		console.log(
			altCaps('When you visit Portland you have to go to VooDoo Donuts')
		)
	},
	toTitleCase: () => {
		console.log(capitalizeWord('pumpkin'))
		console.log(toTitleCase('pumpkin pranced purposefully across the pond'))
	},
	emojify: () => {
		console.log(emojifyWord(':heart:'))
		console.log(emojifyWord(':flower:'))
		console.log(emojifyWord('elephant'))
		console.log(emojifyPhrase('I :heart: my :cat:'))
		console.log(emojifyPhrase('I :heart: my :elephant:'))
	},
	anagram: () => {
		console.log(isAnagram('allergy', 'gallery'))
		console.log(isAnagram('treasure', 'measure'))
	},
	reverseMessage: () => {
		const title = ':htraE no od ot ffutS'
		const messages = [
			'maerc eci yrT',
			'rewoT leffiE tisiV',
			'noom eht ot snamuh etacoleR',
			'egrahc ni stac tuP',
		]
		console.log(reverseString(title))
		console.log(reverseStringsInArray(messages))
	},
	palindromes: () => {
		console.log(isPalindrome('abba'))
		console.log(isPalindrome('civic'))
		console.log(isPalindrome('octopus'))
		console.log(isPalindrome('pumpkins'))
		console.log(isPalindrome('madam'))
	},
	removeDupeChars: () => {
		const password = '9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23'
		console.log(removeDupeChars(password))
	},
	countChars: () => {
		console.log(countChars('Peggy Porth'))
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
		console.log(removeDupesFromArray(eggScrambleRecipe))
	},
}

runButton.addEventListener('click', () => {
	const selectedChallenge = challengeSelect.value
	if (selectedChallenge && challenges[selectedChallenge]) {
		console.clear()
		challenges[selectedChallenge]()
		resultDiv.textContent = 'Check the console for results!'
	} else {
		resultDiv.textContent = 'Please select a challenge.'
	}
})
