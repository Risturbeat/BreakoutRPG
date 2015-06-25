var BackgroundLayer = cc.Layer.extend({
    map00:null,
    map01:null,
    mapWidth:0,
    mapIndex:0,
    space:null,
    spriteSheet:null,
    objects:[],

    ctor:function (space) {
        this._super();

        // clean old array here
        this.objects = [];
        this.space = space;

        this.init();
    },

    init:function () {
        this._super();
        var winsize = cc.director.getWinSize();
        var centerPos = cc.p(winsize.width / 2, winsize.height / 2);

        var spriteBG = new cc.Sprite(res.background_black_png);
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);

        this.map00 = new cc.TMXTiledMap(res.level_one);
        this.addChild(this.map00);

        this.mapWidth = this.map00.getContentSize().width;
        //
        //// create sprite sheet
        cc.spriteFrameCache.addSpriteFrames(res.bricks_plist);
        this.spriteSheet = new cc.SpriteBatchNode(res.bricks_png);
        this.addChild(this.spriteSheet);

        this.loadObjects(this.map00, 0);
        this.scheduleUpdate();

    },

    loadObjects:function (map, mapIndex) {
        // add coins
        var brickGroup = map.getObjectGroup("bricks");
        var brickArray = brickGroup.getObjects();
        for (var i = 0; i < brickArray.length; i++) {
            var brick = new Brick(this.spriteSheet,
                this.space,
                cc.p(brickArray[i]["x"] + this.mapWidth * mapIndex, brickArray[i]["y"]));
            brick.mapIndex = mapIndex;
            this.objects.push(brick);
        }
    },

    removeObjects:function (mapIndex) {
        while((function (obj, index) {
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].mapIndex == index) {
                    obj[i].removeFromParent();
                    obj.splice(i, 1);
                    return true;
                }
            }
            return false;
        })(this.objects, mapIndex));
    },

    removeObjectByShape:function (shape) {
        for (var i = 0; i < this.objects.length; i++) {
            if (this.objects[i].getShape() == shape) {
                this.objects[i].removeFromParent();
                this.objects.splice(i, 1);
                break;
            }
        }
    },

    update:function (dt) {

    }

});
