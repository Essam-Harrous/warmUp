/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange(inputString, range) {
 	var leftNum = inputString.length % range;
 	var correctNum = Math.floor(inputString.length / range);
 	var arrNum = [...inputString.split('')]
 	var arr = []
 	var i = 1;
	var j = 1;
 	while(arrNum.length){
 		if(i <= leftNum){
 			if (leftNum % 2 === 0) {
 				arr.push(parseInt(arrNum.splice(0, 2).join('')))
 			} else {
 				arr.push(parseInt(arrNum.splice(0, 1)))
 			}
 			i++;
 		}else {
			console.log('afdslf')
			arr.push(parseInt(arrNum.splice(0, correctNum)))
		}
		console.log(j, arrNum.length)
    }
    //now i have an array of the range  I just need to order it but i don't have time
    for()
 } 