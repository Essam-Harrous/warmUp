// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function replaceString(str) {
	var arr = str.split('');
	var letters = [];
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		var count = 1;
		console.log(letters.indexOf(arr[i]), arr[i], result , 'first')
		if (letters.indexOf(arr[i]) != -1) {
			console.log(count, 'second')
		    for (var i = 0; i < letters.length; i++) {
			   if (letters[i] === arr[i]) {
				  count++
			   }
		    }			
		}
		letters.push(arr[i])
		result.push(count)
	}
	return result
}