// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
//
// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

// function selectEvenItems(strings) {
//   var newArray = [];
//   strings.forEach(function(string) {
//     var index = strings.indexOf(string);
//     if (index % 2 === 0) {
//       newArray.push(string);
//     }
//   });
//   return newArray;
// }

// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));


// Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
//
// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

// function factorial(number) {
//   var result = 1;
//   while (number > 0) {
//     result = result * number;
//     number--;
//   }
//   return result;
// }

// console.log(factorial(6));


// Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
//
// def sum_combinations(numbers1, numbers2)
//   result = []
//   numbers1.each do |number1|
//     numbers2.each do |number2|
//       result << number1 + number2
//     end
//   end
//   result
// end
// p sum_combinations([1, 5, 10], [100, 500, 1000])

// function sumCombinations(numbers1, numbers2) {
//   // console.log(numbers1);
//   // console.log(numbers2);
//   var finalArray = [];
//   for (var i = 0; i < numbers1.length; i++) {
//     for (var j = 0; j < numbers2.length; j++) {
//       finalArray.push(numbers1[i] + numbers2[j]);
//     }
//   }
//   return finalArray;
// }

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));





//  The function should do a linear search and return the index at which this value is found, or it should return null if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

function search(arrayOfNumbers, number) {
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    // check if the number is the same one that I'm looking for

    if (arrayOfNumbers[i] === number) {
      return i;
    }
  }
  return null;
}

console.log(search([1,2,3,4], 1));
