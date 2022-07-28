# Simple TIC TAC TOE using CFWebSocket


Basic Websocket - Message publishing.
1. Register a channel in Application.cfc.
2. Create the WebSocket connection using cfwebsocket tag.
3. Define JavaScript handlers. If subscribeTo attribute is not defined, need to invoke subscribe JS function. Eg: websocket_obj.subscribe('web_socket');
4. Publish message.


CF Websocket Javascript functions
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
