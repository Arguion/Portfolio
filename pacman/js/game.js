var config = {
    type: Phaser.AUTO,
    width: 512,
    height: 512,
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    //la importante es la primera, que es la que arranca
    scene: [titulo, stage1, stage2]
};

var game = new Phaser.Game(config);

var map;

var cursors;
var debugGraphics;
var text;
var pacman;
var showDebug = false;

var groundLayer;
var wallLayer;
var playerLayer;

var diamantesLayer;
var diamantesCollected = 0;