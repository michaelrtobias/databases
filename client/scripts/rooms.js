var Rooms = {

  parse: function(data) {
    var listOfRooms = [];
    console.log(data.results);
    for (var i = 0; i < data.results.length; i++) {
      // console.log(data.results[i]);
      if (!!data.results[i].roomname) {
        listOfRooms.push(data.results[i].roomname);
      }
    }
    return listOfRooms;

  }

};
// assign conte

// list of rooms