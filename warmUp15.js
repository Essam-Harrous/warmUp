// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(str){
	var obj = {
		word1: '',
		word2: '',
		word3: '',
		word4: '',
		word5: '',
		word6: '',
		word7: ''
	}
	var count = 1;
	for (var i = 0; i < str.length; i++) {
		if(str[i] === ' '){
			count++
		}
		if(count == 1){
			obj.word1 += str[i]
		}
		if(count == 2){
			obj.word2 += str[i]
		}
		if(count == 3){
			obj.word3 += str[i]
		}
		if (count == 4) {
			obj.word4 += str[i]
		}
		if(count == 5) {
			obj.word5 += str[i]
		}
		if(count == 6) {
			obj.word6 += str[i]
		}
		if (count == 7) {
			obj.word7 += str[i]
		}
	}
	return obj.word7 obj.word6 obj.word5 obj.word4 obj.word3 obj.word2 obj.word1;
}