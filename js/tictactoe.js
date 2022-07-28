// Function called whenever user tab on any box.
// TIC TAC TOE game rules.
function checkFinishing() {
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	flag = 1;
	b1 = $('#b1').val();
	b2 = $('#b2').val();
	b3 = $('#b3').val();
	b4 = $('#b4').val();
	b5 = $('#b5').val();
	b6 = $('#b6').val();
	b7 = $('#b7').val();
	b8 = $('#b8').val();
	b9 = $('#b9').val();

	if( (b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X') ) {
		$('#print').html("Player X won");
		$('#b4,#b5,#b6,#b7,#b8,#b9').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X') ) {
		$('#print').html("Player X won");
		$('#b2, #b3, #b5, #b6, #b8, #b9').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X') ) {
		$('#print').html("Player X won");
		$('#b1, #b2, #b3, #b4, #b5, #b6').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X') ) {
		$('#print').html("Player X won");
		$('#b1, #b2, #b4, #b5, #b7, #b8').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X') ) {
		$('#print').html("Player X won");
		$('#b2, #b3, #b4, #b6, #b7, #b8').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X') ) {
		$('#print').html("Player X won");
		$('#b1, #b2, #b4, #b6, #b8, #b9').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X') ) {
		$('#print').html("Player X won");
		$('#b1, #b3, #b4, #b6, #b7, #b9').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X') ) {
		$('#print').html("Player X won");
		$('#b1, #b2, #b3, #b7, #b8, #b9').prop('disabled', true);
		window.alert('Player X won');
		return false;
	}
	else if( (b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b4, #b5, #b6, #b7, #b8, #b9').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}
	else if( (b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b2, #b3, #b5, #b6, #b8, #b9').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}
	else if( (b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b1, #b2, #b3, #b4, #b5, #b6').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}
	else if( (b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b1, #b2, #b4, #b5, #b7, #b8').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}
	else if( (b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b2, #b3, #b4, #b6, #b7, #b8').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}
	else if( (b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b1, #b2, #b4, #b6, #b8, #b9').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}
	else if( (b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b1, #b3, #b4, #b6, #b7, #b9').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}
	else if( (b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0') ) {
		$('#print').html("Player 0 won");
		$('#b1, #b2, #b3, #b7, #b7, #b8 #b9').prop('disabled', true);
		window.alert('Player 0 won');
		return false;
	}

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if( (b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') &&(b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') &&(b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0') ) {
		$('#print').html("Match Tie");
		window.alert('Match Tie');
	}
}
