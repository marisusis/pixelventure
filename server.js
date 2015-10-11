var CE = require("canvasengine").listen(8333);
CE.Model.init("Main", ["start"], {

  initialize: function(socket) {

  },
  start: function() {
     this.socket.emit("MyScene.load", "Hello");
  }

});