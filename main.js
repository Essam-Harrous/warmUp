var text = '<li>' + $('#inputText').val(); + '</li>'
var a = $('#inputText').val();
console.log(a);
$('#btn').on('click', function(){
	$('ul').append(text)
})
