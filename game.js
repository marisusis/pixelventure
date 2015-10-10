/**
 * Created with pixelventure.
 * User: spacegeek224
 * Date: 2015-10-09
 * Time: 08:23 PM
 * To change this template use Tools | Templates.
 */
var canvas = CE.defines('canvas_id').extend(Input).ready(function() {
    //Ready
    canvas.Scene.call("MyScene");
});

function up(element, n) {
    element.y -= n;
};

function down(element, n) {
    element.y += n;
};

function left(element, n) {
    element.x -= n;
};

function right(element, n) {
    element.x += n;
};
Class.create("save", {
    name: "ElementSave",
    element: "",
    saveName: "pixelventure_save",
    initialize: function(element) {
        this.element = element;
    },
    setSaveName: function(sn) {
        if(!(sn)) {
            this.saveName = "pixelventure_save";
        } else {
            this.saveName = sn;
        }
    },
    dumpX: function() {
        
    },
    dumpY: function() {
        
    },
    /*
    setX: function() {
        Marshal.dump(this.element.x, this.saveName);
    },
    setY: functionf() {
        Marshal.dump(this.element.y, this.saveName);
    },
    getX: function() {
        return Marshal.load(this.saveName);
    },
    getY: function() {
        return Marshal.load(this.saveName);
    },*/
    getElement: function() {
        return this.element;
    }
});
canvas.Scene.New({
    speed: 2,
    elem: "",
    elemsave: "",
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
        this.elem = this.createElement();
        this.elemsave = Class.new("save", [this.elem])
        this.elem.drawImage('img_id');
        stage.append(this.elem);
        canvas.Input.keyDown(Input.Bottom);
        canvas.Input.keyDown(Input.Up);
        canvas.Input.keyDown(Input.Left);
        canvas.Input.keyDown(Input.Right);
        canvas.Input.keyUp(Input.Bottom);
        canvas.Input.keyUp(Input.Up);
        canvas.Input.keyUp(Input.Left);
        canvas.Input.keyUp(Input.Right);
    },
    render: function(stage) {
        this.elemsave.getX();
        if(canvas.Input.isPressed(Input.Left)) {
            left(this.elem, this.speed);
        };
        if(canvas.Input.isPressed(Input.Right)) {
            right(this.elem, this.speed);
        };
        if(canvas.Input.isPressed(Input.Up)) {
            up(this.elem, this.speed);
        };
        if(canvas.Input.isPressed(Input.Bottom)) {
            down(this.elem, this.speed);
        };
        this.elemsave.setX(1);
        stage.refresh();
    },
    exit: function(stage) {
        alert("EXITING");
    }
});
window.onbeforeunload = function() {
    console.log("Almost Bye Bye.");
};
window.onunload = function() {
    console.log("Bye Bye.");
};