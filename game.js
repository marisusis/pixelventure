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
/*Class.create("save", {
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
    dump: function() {
        Marshal.dump(this.element, this.saveName);
    },
    load: function() {
        return Marshal.load(this.saveName);
    },
    
    setX: function() {
        Marshal.dump(this.element.x, this.saveName);
    },
    setY: function() {
        Marshal.dump(this.element.y, this.saveName);
    },
    getX: function() {
        return Marshal.load(this.saveName);
    },
    getY: function() {
        return Marshal.load(this.saveName);
    },
    getElement: function() {
        return this.element;
    }
});*/
Class.create("ElementSave", {
    name: "ElementSave",
    element: "",
    initialize: function(element) {
        this.element = element;
    },
    x: function() {
        return this.element.x;
    },
    y: function() {
        return this.element.y;
    }
});
Class.create("Coords", {
    cx: 0,
    cy: 0
});
canvas.Scene.New({
    speed: 2,
    elem: "",
    elemsave: "",
    elemload: Marshal.load("pixel_coords"),
    cdl_1: true,
    name: "MyScene", // Obligatory
    materials: {
        images: {
            img_id: "img/warrior1.png"
        }
    },
    called: function(stage) {
        console.log("called");
        this.cdl_1 = true;
    },
    preload: function(stage, pourcent, material) {
        console.log("preload");
        console.log(this.elemload.cx);
        console.log(this.elemload.cy);
    },
    ready: function(stage) {
        console.log("ready");
        this.elem = this.createElement();
        if(this.cdl_1) {
            this.elem.x = this.elemload.cx;
            this.elem.y = this.elemload.cy;
            this.cdl_1 = false;
        }
        this.elemsave = Class.new("Coords");
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
        stage.refresh();
    },
    exit: function(stage) {
        this.elemsave.cx = this.elem.x;
        this.elemsave.cy = this.elem.y;
        Marshal.dump(this.elemsave, "pixel_coords");
    }
});
window.onbeforeunload = function() {
    canvas.Scene.exitAll();
    console.log("Almost Bye Bye.");
};
window.onunload = function() {
    console.log("Bye Bye.");
};