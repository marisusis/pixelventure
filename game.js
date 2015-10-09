/**
 * Created with pixelventure.
 * User: spacegeek224
 * Date: 2015-10-09
 * Time: 08:23 PM
 * To change this template use Tools | Templates.
 */
var canvas = CE.defines('canvas_id').ready(function() {
    //Ready
    canvas.Scene.call("MyScene");
});
canvas.Scene.New({
    name: "MyScene", // Obligatory
    materials: {
        images: {
            img_id: "img/warrior1.png"
        }
    },
    called: function(stage) {
        console.log("called");
    },
    preload: function(stage, pourcent, material) {
        console.log("preload");
    },
    ready: function(stage) {
        console.log("ready");
        var elem = this.createElement();
        elem.drawImage('img_id');
        stage.append(elem);
    },
    render: function(stage) {
        stage.refresh();
    },
    exit: function(stage) {
        console.log("exit");
    }
});