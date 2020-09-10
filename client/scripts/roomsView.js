var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    console.log('RoomsView Initialized');
  },

  render: function(listOfRooms) {
    console.log(listOfRooms);
    var listOfRooms2 = [];
    for (var i = 0; i < listOfRooms.length; i++) {
      if (listOfRooms[i] && listOfRooms2.indexOf(listOfRooms[i]) === -1) {
        console.log(listOfRooms[i]);
        RoomsView.renderRoom(listOfRooms[i]);
        listOfRooms2.push(listOfRooms[i]);
      }
    }
  },

  renderRoom: function(room) {
    // MessagesView.$chats.prepend(MessageView.render(message));
    console.log('message', room);

    // RoomsView.$select.append(Rooms.parse(room));s
    RoomsView.$select.append('<option value="SuperLobby">' + room + '</option>');
  },

  // MessagesView.$chats.append(MessageView.render(message));

  dropDown: _.template(`
        <option value="SuperLobby"></option>
    `)


};

// dropdown populated by rooms (list)