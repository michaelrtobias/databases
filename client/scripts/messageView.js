var MessageView = {

  render: _.template(`
       <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text%></div>
      </div>
    `)

};

// MessageView.render currently doesn't have a function call.
// what if we just put the Username, text, and roomname in there? just hard coded to see what pops out w/r/t the Mel Brooks message?

// compiled: _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"

// for us, text = chat in the example

// MessageView.render({username: xxxx, chat: xxxx, room: xxx})

// https://www.geeksforgeeks.org/how-to-use-underscore-js-as-a-template-engine/
// https://underscorejs.org/#template