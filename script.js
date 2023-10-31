// строка проверить строку на наличие . и после нее на com или ru

// function str(text) {
//     if (text.includes('.')) {
//         return 'point'
//     } else {
//         return 'not point'
//     }
// }
//
// console.log(str('some text.com'))
// console.log(str('some text'))

// function str(text) {
//     if (text.includes('.com || .ru')) {
//         return 'correct'
//     } else {
//         return 'not correct'
//     }
// }
//
// console.log(str('some text.com'))
// console.log(str('some text'))

// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4

// function str(word) {
//     const wordLenght =  word.length
//     return wordLenght % 2 === 0 && wordLenght >=4 && wordLenght <=10
// }
//
// console.log(str('Eternity'))

// строка поменять букву каждого четного индекса на E можно решить через map

// function ret(text) {
//     return text.map((item, idx) => {
//         if (idx % 2 === 0) {
//             return 'E'
//         } else {
//             return item
//         }
//     })
// }
//
// console.log(ret(['E', 't', 'e', 'r', 'n', 'i', 't', 'y']))

// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале

// function pswCheck(psw1, psw2) {
//     if (psw1 === psw2) {
//         return 'welcome'
//     } else {
//         return 'Try again'
//     }
// }
//
// console.log(pswCheck('qwert1234', 'qwert1234'))
// console.log(pswCheck('qwert1234', 'qwert1235'))

//===========
//1

// let str = ['lorem', 'ipsum', 'dolor', 'sit']
//
// console.log(str.map(word => word.length))

//2

// let str = ['lorem', 'ipsum', 'dolor']
//     const sortedWord = str.map(word => word.toLowerCase()).sort();
//     const wordOrder = {}
//     sortedWord.forEach((word, idx) => {
//         if (!wordOrder[word]) {
//             wordOrder[word] = idx + 1
//         }
//     })
//
// console.log(wordOrder)

//3

// let str = ['lorem', 'ipsum', 'dolor'];
// let newStr = str.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
//
// console.log(newStr)

//4

// let str = ['lorem', 'ipsum', 'dolor']
//
// console.log(str.map(el => el.toUpperCase()))

//==========
//1, 2, 3, 4, 5

// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
//
// console.log(str.join('-'))
// console.log(str.join('/'))
// console.log(str.join(' '))
// console.log(str.filter(word => word.includes('s')))
// console.log(str.filter(word => !word.includes('s')))

//6

// let str = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// let anny = ['consectetur', 'adipiscing', 'elit']
//
// Array.prototype.push.apply(str, anny)
//
// console.log(str)

//7

// let number=  [123,33,444,'22',55,66,77,88,99]
// let str = '22'
// let filterN = number.filter((number) => number !== str)
// console.log(filterN)

//8

// let number=  [123,33,444,'22',55,66,77,88,99]
// let str = '22'
// let filterN = number.filter((number) => number !== str)
// let two = [22]
// Array.prototype.push.apply(filterN, two)
// console.log(filterN)

//9

// let str = ['null', undefined, 0, false, true, '']
// let filterStr = str.filter(item => item !== 'null' && item !== undefined && item !== '')
//
// console.log(filterStr)

//10


//===========

//1

// let str = [1123, 'qwe'];
// let repeatStr = [].concat(...Array(2).fill(str));
//
// console.log(repeatStr);

//2

// let str = [null, undefined]
// let repeatStr = [].concat(...Array(2).fill(str))
//
// console.log(repeatStr);

//3,4

// let str =  'lorem ipsum dolor sit amet'
// let newStr = str.split(' ')
// let b = newStr.filter(word => !word.includes('s'))
// let a = b.join(' ')
//
// console.log(b)
// console.log(a)




