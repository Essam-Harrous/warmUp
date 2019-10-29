var count = 0;
$('#btn').on('click', function(){
	var a = $('#inputText').val();
	if(count % 2 === 0) {
		$('ul').append('<li class="inText">' + $('#inputText').val() + '</li>')
	}else {
		$('ul').append('<li class="btn">' + $('#inputText').val() + '</li>')
	}
	count++;
})
