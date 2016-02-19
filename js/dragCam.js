// TODO: When mouse is going out of canvas, you need to click into canvas to get game react again
window.onload = function() {
    
    "use strict";
    
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {
    preload: preload,
    create: create,
    update: update
});

function preload() {
    game.load.image('backdrop', 'http://fc04.deviantart.net/images/i/2003/39/d/c/Dirt___Ground_Cracks.jpg');
    game.load.image('test', 'http://png-3.findicons.com/files/icons/1588/farm_fresh_web/32/box.png');
}

function create() {
    game.world.setBounds(0, 0, 1920, 1200);

    var ground = game.add.sprite(0, 0, 'backdrop');

    var test = game.add.sprite(300, 300, 'test');
    test.inputEnabled = true;
    test.input.enableDrag(true);
}

var o_mcamera;

function update() {
    move_camera_by_pointer(game.input.mousePointer);
    move_camera_by_pointer(game.input.pointer1);
}

function move_camera_by_pointer(o_pointer) {
    if (!o_pointer.timeDown) { return; }
    if (o_pointer.isDown && !o_pointer.targetObject) {
        if (o_mcamera) {
            game.camera.x += o_mcamera.x - o_pointer.position.x;
            game.camera.y += o_mcamera.y - o_pointer.position.y;
        }
        o_mcamera = o_pointer.position.clone();
    }
    if (o_pointer.isUp) { o_mcamera = null; }
}
}