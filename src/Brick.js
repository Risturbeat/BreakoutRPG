/**
 * Created by Daniel on 25-6-2015.
 */
var Brick = cc.Class.extend({
    space: null,
    shape:null,
    sprite:null,
    ctor: function(spriteSheet, space, pos){
        this.space = space;
        //this.createSpriteWithBlockNumber(blockNumber);
        this.sprite = new cc.PhysicsSprite("#normal_brick.png");
        this.sprite.attr({
            anchorX:0,
            anchorY:0
        });
        this.initBrick(pos);

        spriteSheet.addChild(this.sprite,1);
    },
    initBrick:function(pos){
        // init physics
        var body = new cp.StaticBody();
        body.setPos(pos);

        this.sprite.setBody(body);
        cc.log("Sprite width " + this.sprite.getContentSize().width + "  Height: " + this.sprite.getContentSize().height);
        this.shape = new cp.BoxShape(body,
            this.sprite.getContentSize().width,
            this.sprite.getContentSize().height);
        this.shape.setCollisionType(SpriteTag.brick);
        //Sensors only call collision callbacks, and never generate real collisions
        this.shape.setSensor(true);

        this.space.addStaticShape(this.shape);
    },
    removeFromParent:function () {
        this.space.removeStaticShape(this.shape);
        this.shape = null;
        this.sprite.removeFromParent();
        this.sprite = null;
    },

    getShape:function () {
        return this.shape;
    }

});