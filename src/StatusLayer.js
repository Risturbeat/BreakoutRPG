var StatusLayer = cc.Layer.extend({
    linesLabel:null,
    pointsLabel:null,
    livesLeftLabel:null,
    lines:0,

    ctor:function () {
        this._super();
        this.init();
    },

    init:function () {
        this._super();

        var winsize = cc.director.getWinSize();

        //Create the labels, set their anchor points and place them in the top corners.
        this.pointsLabel = new cc.LabelTTF("Points:0", "Helvetica", 20);
        this.pointsLabel.attr({
            anchorX:1,
            anchorY:0
        });
        this.pointsLabel.setPosition(cc.p(winsize.width, winsize.height - this.pointsLabel.getContentSize().height));
        this.addChild(this.pointsLabel);

        this.livesLeftLabel = new cc.LabelTTF("Lives left:"+defaultLives, "Helvetica", 20);
        this.livesLeftLabel.attr({
            anchorX:0,
            anchorY:0
        });
        this.livesLeftLabel.setPosition(cc.p(0, winsize.height-this.livesLeftLabel.getContentSize().height));
        this.addChild(this.livesLeftLabel);
    },

    addLine:function (num) {
        this.lines += num;
        this.linesLabel.setString("Lines: " + this.lines);
    },

    updatePoints:function (points) {
        this.pointsLabel.setString("Points: " + points);
    },

    updateLinesLeft: function(linesLeft){
        this.livesLeftLabel.setString("Lines Left: " + linesLeft);
    }


});
