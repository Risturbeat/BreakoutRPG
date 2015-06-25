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

        this.pointsLabel = new cc.LabelTTF("Points:0", "Helvetica", 20);
        this.pointsLabel.setPosition(cc.p(winsize.width - 70, winsize.height - 20));
        this.addChild(this.pointsLabel);

        this.livesLeftLabel = new cc.LabelTTF("Lives left:0", "Helvetica", 20);
        this.livesLeftLabel.setPosition(cc.p(0, winsize.height));
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
