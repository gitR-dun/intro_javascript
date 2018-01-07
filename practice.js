// # Write a function that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.

function countFiftyFives(inputArray) {
  var counter = 0;
  inputArray.forEach(function(number) {
    if (number === 55) {
      counter += 1;
    }
  });
  console.log(counter);
}

countFiftyFives([1,2,3,4,55]);


// def accepts_an_array(input_array)
//   input_array.each do |number|
//     p number
//   end
// end

// p accepts_an_array([1,2,3,4])
