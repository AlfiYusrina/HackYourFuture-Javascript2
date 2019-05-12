'use strict';
var array = [1, 2, 3, 4, 5];

//Write a JavaScript function to get the first element of an array.
//...Passing a parameter 'n' will return the first 'n' elements of the array.
var getFirstNElements =  (array, n = 1) => {
    return array.splice(0, n);
};

//Write a JavaScript program to find the most frequent item of an array.
var getMostFrequentItem = array => {
    // for(let value of array){
    // counts[value] = (counts[value] || 0) + 1;
    //}

    //building a dictionary, start with an empty {}, and keep adding value to it.
  var  counts = array.reduce((accumulator, current) => {
    accumulator[current] = (accumulator[current] || 0) + 1;
    return accumulator;
  }, {});

  let max = Object.keys(counts)
    .map(key => counts[key])
    .reduce((accumulator, current) => Math.max(accumulator, current), 0);
  return array.filter(element => counts[element] === max).shift();
};

console.log(mostFrequentItem(array));

//Write a JavaScript program which accept a string as input
//and swap the case of each character.
//For example if you input 'The Quick Brown Fox'
//the output should be 'tHE qUICK bROWN fOX’.
var text = 'The Quick Brown Fox';
var swapCharacters = (text) => {
  return text.split('')
    .map(
      (character) => character === character.toUpperCase() ? character.toLowerCase(): character.toUpperCase()
    ).join('');
};

//Write a JavaScript program which accept a number as input
//and insert dashes (-) between each two even numbers.
//For example if you accept 025468 the output should be 0-254-6-8.
var isEven = n => {return n % 2 == 0;};

var addDashBetweenEvenNumbers = (numbers) => {
  const array = numbers.toString().split('');
  let evenNumber = numbers.reduce((accumulator, current) => {
    isEven(accumulator[accumulator.length - 1]) && isEven(current) ? accumulator.push('-', current) : accumulator.push(current)
    return accumulator;
    }, []).join('');
  return evenNumber;
};
console.log(addDashBetweenEvenNumbers(array));
