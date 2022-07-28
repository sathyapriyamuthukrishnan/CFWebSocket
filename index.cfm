<cfoutput>
	<!--- Creating WebSocket connections using CFWebSocket tag --->
	<cfscript>
		cfwebsocket(
			name="web_socket_obj",
			onMessage="receiveMsgFromServer",
			onError="showError",
			usecfAuth="true",
			subscribeTo="web_socket",
			secure="false"
		);
	</cfscript>

	<!DOCTYPE html>
		<head>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
			<link rel="stylesheet" href="css/styles.css">
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
			<script src="js/tictactoe.js"></script>
		</head>

		<body>
			<div id="main">
				<h1>TIC TAC TOE using WebSockets</h1><br>

				<p id="ins">Game starts by just Tap on box<br><br>First Player starts as<b> Player X</b><br>And<br>Second Player as <b>Player 0</b></p>

				<br><br>
				<input type="text" id="b1" class="gameBox" data-publisherid="" readonly>
				<input type="text" id="b2" class="gameBox" data-publisherid="" readonly>
				<input type="text" id="b3" class="gameBox" data-publisherid="" readonly>
				<br><br>

				<input type="text" id="b4" class="gameBox" data-publisherid="" readonly>
				<input type="text" id="b5" class="gameBox" data-publisherid="" readonly>
				<input type="text" id="b6" class="gameBox" data-publisherid="" readonly>
				<br><br>

				<input type="text" id="b7" class="gameBox" data-publisherid="" readonly>
				<input type="text" id="b8" class="gameBox" data-publisherid="" readonly>
				<input type="text" id="b9" class="gameBox" data-publisherid="" readonly>

				<br><br><br>

				<button id="but" onclick="resetBoxes()">RESET</button>

				<br><br>
				<p id="print"></p>
				<input type="hidden" value="" id="pub_ids">
				<input type="hidden" value="0" id="prevBox">
			</div>
		</body>
	</html>

	<script>
		$('.gameBox').on('click', function() {
			publishChannel( $(this) ); /* Publishing message */
		});

		function startConnection() {	/* Javascript handler for WebSocket */
			web_socket_obj.openConnection();
			console.log( 'Connection initiated' );
		}

		function receiveMsgFromServer( messageObj ) { /* Javascript handler for WebSocket */
			var boxId = messageObj.data;
			var $pubIds = $('##pub_ids').val();
			var $pubArr = $pubIds.split(',');

			if( boxId == 'reset' ) { /* Resetting all boxes */
				$('input').prop('disabled', false).val('');
				$('##print').html('Player X turn');
			} else { /* Storing publisher ids in a hidden field */
				if( ! $pubIds.includes( messageObj.publisherid ) && $pubArr.length < 3 ) { /* Checking no. of players. If more than 2 players played, first player would be considered as X. All others are 0 */
					if( $pubIds.length ) {
						$('##pub_ids').val( $pubIds + ',' + messageObj.publisherid );
					} else {
						$('##pub_ids').val( messageObj.publisherid );
					}
				}
				/* Determining X/O based on publisher ids */
				let XOval = $pubArr[0] == messageObj.publisherid || ! $pubArr[0].length ? 'X' : '0';
				if( boxId !== undefined  ) {
					if( $('##prevBox').val() == '0' && XOval == '0' ) { /* Checking multiple tap of same player. If so, alerting a message */
						window.alert('Player X turn');
						return false;
					} else if( $('##prevBox').val() == 'X' && XOval == 'X' ) { /* Checking multiple tap of same player. If so, alerting a message */
						window.alert('Player 0 turn');
						return false;
					} else { /* Updating opponent player's box */
						$(`##${boxId}`).prop('disabled', true).val( XOval );
						$(`##${boxId}`).data('publisherid', messageObj.publisherid );
						$('##print').html( XOval == 'X' ? 'Player 0 turn' : 'Player X turn' );
						checkFinishing();
					}
					/* Updating previous box values */
					$('##prevBox').val( XOval );
				}
			}
		}

		function closeConnection() { /* Javascript handler for WebSocket */
			web_socket_obj.closeConnection();
			console.log( 'Connection closed' );
		}

		function showError(e) { /* Javascript handler for WebSocket */
			console.log(e);
		}

		function publishChannel( elt ) { /* Javascript handler for WebSocket */
			var boxStruct = $(elt).attr('id'); /* Sending current input box id to message handler */
			web_socket_obj.publish('web_socket', boxStruct ); /* Publishing message */
		}

		function resetBoxes() {
			web_socket_obj.publish('web_socket', 'reset' ); /* Publishing message */
		}
	</script>
</cfoutput>
