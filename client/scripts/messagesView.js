var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //put singleMessage in here;
    // MessagesView.$chats.on(null, MessagesView.render);
  },

  render: function(listOfMessages) {

    for (var i = 0; i < listOfMessages.length; i++) {
      //listOfMessages[i] is each object (objectID, username... etc)
      let obj = listOfMessages[i];
      obj.username.replace('&', '&amp');
      obj.username.replace('<', '&lt');
      obj.username.replace('>', '&gt');
      obj.username.replace('"', '&quot');
      obj.username.replace(`'`, '&#x27');
      obj.username.replace('/', '&#x2F');


      obj.text.replace('&', '&amp');
      obj.text.replace('<', '&lt');
      obj.text.replace('>', '&gt');
      obj.text.replace('"', '&quot');
      obj.text.replace(`'`, '&#x27');
      obj.text.replace('/', '&#x2F');

      if (obj.roomname) {

        obj.roomname.replace('&', '&amp');
        obj.roomname.replace('<', '&lt');
        obj.roomname.replace('>', '&gt');
        obj.roomname.replace('"', '&quot');
        obj.roomname.replace(`'`, '&#x27');
        obj.roomname.replace('/', '&#x2F');
      }

      MessagesView.renderMessage(obj);
    }

  },

  renderMessage: function(message) {
    // MessagesView.$chats.prepend(MessageView.render(message));
    // console.log('message', message);

    MessagesView.$chats.append(MessageView.render(message));

  }

};