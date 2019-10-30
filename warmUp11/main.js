var clicked = '';

$('#left').on('click', function(){
	clicked = 'left';
	})
$('#right').on('click', function(){
	clicked = 'right';
})
$('#create').on('click', function() {
	if(clicked === 'right'){
		$('#rightList').append('<li>right</li>')
	}else if(clicked === 'left') {
		$('#leftList').append('<li>left</li')
	}
})