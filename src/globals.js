var g_groundHeight = 57;
var g_runnerStartX = 80;

if(typeof TagOfLayer == "undefined") {
    var TagOfLayer = {};
    TagOfLayer.background = 0;
    TagOfLayer.Animation = 1;
    TagOfLayer.GameLayer = 2;
    TagOfLayer.Status = 3;
}

// collision type for chipmunk
if(typeof SpriteTag == "undefined") {
    var SpriteTag = {};
    SpriteTag.brick = 0;
    SpriteTag.ball = 1;
    SpriteTag.powerup = 2;
}

var defaultLives = 3;