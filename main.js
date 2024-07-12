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

/*
--- TESTS ---
To check your results, uncomment the lines corresponding to the challenge.
*/

/*
      -----   01 - Panic    -----
*/
// console.log(panic("I'm almost out of coffee"))
// console.log(panic('winter is coming'))

/*
      -----   02 - Whisper    -----
*/
// console.log(whisper('PLEASE STOP SHOUTING.'))
// console.log(whisper("MA'AM, this is a Wendy's!"))

/*
      -----   03 - altCaps    -----
*/
// console.log(altCaps('When you visit Portland you have to go to VooDoo Donuts'))

/*
      -----   04 - toTitleCase    -----
*/
// console.log(capitalizeWord('pumpkin'))
// console.log(toTitleCase('pumpkin pranced purposefully across the pond'))

/*
      -----   05 - Emojify    -----
*/
// console.log(emojifyWord(':heart:'))
// console.log(emojifyWord(':flower:'))
// console.log(emojifyWord('elephant'))
// console.log(emojifyPhrase('I :heart: my :cat:'))
// console.log(emojifyPhrase('I :heart: my :elephant:'))

/*
      -----   06 - Anagram    -----
*/
// console.log(isAnagram('allergy', 'gallery'))
// console.log(isAnagram('treasure', 'measure'))

/*
      -----   07 - Reverse Message    -----
*/
// const title = ':htraE no od ot ffutS'
// const messages = [
// 	'maerc eci yrT',
// 	'rewoT leffiE tisiV',
// 	'noom eht ot snamuh etacoleR',
// 	'egrahc ni stac tuP',
// ]
// console.log(reverseString(title))
// console.log(reverseStringsInArray(messages))
