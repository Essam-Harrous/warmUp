// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function balloon(str) {
	var arr = str.split('')
	var count = 0;
	var i = 1;
	// var obj = {};
	// obj.a = 0;
	// obj.b = 0;
	// obj.l = 0;
	// obj.o = 0;
	// obj.n = 0;
	var check = 0
	while(check < 5 && arr.length){
		check = 0;
		if(arr.indexOf('b') != -1){
			//obj.b = obj.b + 1;
			count++
			arr.splice(arr.indexOf('b'), 1)
		}else{
			check++
		}

		if (arr.indexOf('a') != -1) {
			//obj.a = obj.a + 1;
			count++
			arr.splice(arr.indexOf('a'), 1)
		}else{
			check++
		}

		if (arr.indexOf('l')) {
			//obj.l = obj.l + 1;
			count++
			arr.splice(arr.indexOf('l'), 1)
			if (arr.indexOf('l')) {
				count++
				arr.splice(arr.indexOf('l'), 1)
			}
		}else {
			check++
		}

		if (arr.indexOf('o')) {
			//obj.o = obj.o + 1;
			count++
			arr.splice(arr.indexOf('o'), 1)
			if (arr.indexOf('o')) {
				count++
				arr.splice(arr.indexOf('o'), 1)
			}
		}else {
			check++
		}

		if (arr.indexOf('n')) {
			//obj.n = obj.n + 1;
			count++
			arr.splice(arr.indexOf('n'), 1)
		}else {
			check++
		}
	}
	console.log(arr, obj)
}
//str.indexOf(a)
//			&& str.indexOf(l)&& str.indexOf(o)
//			&& str.indexOf(n)