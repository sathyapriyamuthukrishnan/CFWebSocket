
<cfoutput>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

	<cfscript>
		cfwebsocket(
			name="web_socket_obj",
			onOpen="startConnection",
			onMessage="receiveMsgFromServer",
			onClose="closeConnection",
			onError="showError",
			usecfAuth="true",
			subscribeTo="web_socket",
			secure="false"
		);
	</cfscript>

	<div class="container">
		<h4>Simple Web socket example</h4>
		<p id="message"></p>
	</div>

	<script>
		function startConnection() {
			console.log( $('##message') );
			$('div').append( '<p>Connection initiated</p>' );
		}

		function receiveMsgFromServer( message ) {
			console.log( message );
			$('##message').text( 'Server message:' + message.msg );
		}

		function closeConnection() {
			$('##message').append( '<p>Connection closed</p>' );
		}

		function showError(e) {
			$('div').prepend( '<p class="text-warning">Error!<br>' + e + '</p>' );
		}
	</script>
</cfoutput>


<!--- CF Websocket Javascript functions
Message specific functions:
    - subscribe
    - publish
    - invokeAndPublish
    - invoke
    - unsubscribe

Connection specific functions:
    - authenticate
    - getSubscriptions
    = getSubscriberCount
    - openConnection
    - closeConnection
 --->