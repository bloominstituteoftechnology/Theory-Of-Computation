(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dashboard_atlas_", frames: [[628,0,123,123],[753,0,123,123],[0,0,626,153]]}
];


// symbols:



(lib.Mesh = function() {
	this.spriteSheet = ss["dashboard_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_1 = function() {
	this.spriteSheet = ss["dashboard_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["dashboard_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84EB43").s().p("AAEDwIlFjlQgGgDAAgIQAAgGAGgEIFFjlQAHgEAHADQAHAEAAAJIAAA5QAAAGAEAEQAFAEAFABIETAAQAFAAAFADQAEAEAAAGIAAEdQAAAGgEAEQgFADgFAAIkTAAQgFAAgFAFQgEAEAAAGIAAA5QAAAIgHAFQgDABgDAAQgEAAgEgCg");
	this.shape.setTransform(1.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-23.7,65.6,48.5);


(lib.lever = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-313,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:13.7,x:-261.1,y:-220.9},0).wait(1).to({rotation:-8.5,x:-306.1,y:16},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313,-76,626,153);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAtIAfRQpRh8r7hUQtRheqrAAQqrAAtQBeQr7BUpSB8QpIB6lGjUQlsjsgaqAQgerpDEoOQDsp+J0ofQFhkyOGipQNAibQZADQQSADNSCeQOQCpF5EpQKDH6DqKTQBmEfAjFWQAeEggPFyQgaKAlrDsQjQCGk3AAQizAAjVgsg");
	mask.setTransform(422.5,226.9);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#080B12").s().p("EhCAABfIAAi9MCEBAAAIAAC9g");
	this.shape.setTransform(422.5,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#080B12").s().p("EhCAABBIAAiBMCEBAAAIAACBg");
	this.shape_1.setTransform(422.5,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#080C13").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_2.setTransform(422.5,38.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090C14").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_3.setTransform(422.5,51.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#090D15").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_4.setTransform(422.5,64.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#090D16").s().p("EhCAABBIAAiCMCEBAAAIAACCg");
	this.shape_5.setTransform(422.5,78.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0A0E17").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_6.setTransform(422.5,91.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0A0E18").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_7.setTransform(422.5,104.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0B0F19").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_8.setTransform(422.5,117.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0B101A").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_9.setTransform(422.5,130.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0B101B").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_10.setTransform(422.5,143.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C111C").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_11.setTransform(422.5,156.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C111D").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_12.setTransform(422.5,170);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C121E").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_13.setTransform(422.5,183.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D1320").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_14.setTransform(422.5,196.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D1321").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_15.setTransform(422.5,209.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D1422").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_16.setTransform(422.5,222.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D1423").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_17.setTransform(422.5,235.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0E1524").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_18.setTransform(422.5,248.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0E1525").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_19.setTransform(422.5,262);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0E1626").s().p("EhCAABBIAAiBMCEBAAAIAACBg");
	this.shape_20.setTransform(422.5,275.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0E1727").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_21.setTransform(422.5,288.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0F1728").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_22.setTransform(422.5,301.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F1829").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_23.setTransform(422.5,314.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0F182A").s().p("EhCAABBIAAiBMCEBAAAIAACBg");
	this.shape_24.setTransform(422.5,327.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0F192B").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_25.setTransform(422.5,340.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#10192C").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_26.setTransform(422.5,353.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#101A2D").s().p("EhCAABCIAAiDMCEBAAAIAACDg");
	this.shape_27.setTransform(422.5,367.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#101A2D").s().p("EhCAAFXIAAqtMCEBAAAIAAKtg");
	this.shape_28.setTransform(422.5,408);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(3.2,22.4,838.6,409.1), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6C5C5","#CCCBCB","#DEDDDD","#FAFAFA","#FEFEFE","#CCCBCB","#A5A4A4","#979595"],[0,0.125,0.302,0.506,0.525,0.729,0.906,1],-22.2,0,22.3,0).s().p("AjeD+QAAjQB/ijQB7iiDDg3QjFBSh3CxQh7C0gBDcIAAAKQgFgqAAgng");
	this.shape.setTransform(22.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,44.6,67), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AAAkiIlbJZIK3AAg");
	this.shape.setTransform(38.2,34.6,1,1,0,0,0,0,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4).p("AAAinIjNFjIGaAAg");
	this.shape_1.setTransform(37.5,39.1,1,1,0,0,0,0,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,-0.1,76.4,66.3), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6C5C5","#CCCBCB","#DEDDDD","#FAFAFA","#FEFEFE","#CCCBCB","#A5A4A4","#979595"],[0,0.125,0.302,0.506,0.525,0.729,0.906,1],6.9,21.5,-6.7,-20.9).s().p("AjxE1QDShDCGitQCDinASjVQAHDLh0CmQh2CrjFA/QgmANgpAHg");
	this.shape.setTransform(25.2,31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,50.4,62.4), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C6C5C5","#CCCBCB","#DEDDDD","#FAFAFA","#FEFEFE","#CCCBCB","#A5A4A4","#979595"],[0,0.125,0.302,0.506,0.525,0.729,0.906,1],-22.2,0,22.3,0).s().p("AjeD+QAAjQB/ijQB7iiDDg3QjFBSh3CxQh8C0AADcIAAAKQgFgqAAgng");
	this.shape_1.setTransform(22.3,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,44.6,67), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C6C5C5","#CCCBCB","#DEDDDD","#FAFAFA","#FEFEFE","#CCCBCB","#A5A4A4","#979595"],[0,0.125,0.302,0.506,0.525,0.729,0.906,1],6.8,21.5,-6.8,-20.9).s().p("AjxE1QDRhDCGitQCEinARjVQAIDLh0CmQh2CrjFA/QgnANgoAHg");
	this.shape_1.setTransform(25.2,31.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,50.4,62.4), null);


(lib.hazzardIdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-6.3,1,1,0,0,0,38.2,33);
	this.instance.alpha = 0.43;

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.4,29.5,1,1,0,0,0,25.2,31.2);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Group_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38.6,-23.8,1,1,0,0,0,22.3,33.5);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Mesh_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-60.1,-60.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000003").s().p("AnEHFQi7i8AAkJQAAkIC7i8QC8i7EIAAQEJAAC8C7QC7C8AAEIQAAEJi7C8Qi8C7kJAAQkIAAi8i7g");
	this.shape.setTransform(1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiRJ8QkIg8iQjlQiPjmA8kGQA9kIDliQQDliPEHA8QEIA9CPDlQCQDlg9EHQg8EHjlCQQihBmiyAAQhLAAhOgTg");
	this.shape_1.setTransform(0.8,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FEFEFE","#B8B7B7","#979595"],[0,0.651,1],-29.8,-66.6,30,67.1).s().p("AkbKgQiDg3hlhlQhlhlg3iDQg5iIAAiUQAAiTA5iIQA3iDBlhlQBlhlCDg3QCIg5CTAAQCUAACIA5QCDA3BlBlQBlBlA3CDQA5CHAACUQAACUg5CIQg3CDhlBlQhlBliDA3QiIA5iUAAQiUAAiHg5g");
	this.shape_2.setTransform(1,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#878787").s().p("AkZKbQiCg3hkhkQhkhkg3iCQg5iHAAiTQAAiSA5iHQA3iCBkhkQBkhkCCg3QCHg5CSAAQCTAACHA5QCCA3BkBkQBkBkA3CCQA5CHAACSQAACTg5CHQg3CChkBkQhkBkiCA3QiHA5iTAAQiSAAiHg5g");
	this.shape_3.setTransform(-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hazzardIdle, new cjs.Rectangle(-72.9,-72.7,146.9,146.4), null);


(lib.hazzard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-6.3,1,1,0,0,0,38.2,33);
	this.instance.alpha = 0.43;

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.4,29.5,1,1,0,0,0,25.2,31.2);
	this.instance_1.alpha = 0.301;

	this.instance_2 = new lib.Group_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-38.6,-23.8,1,1,0,0,0,22.3,33.5);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Mesh_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-60.1,-60.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000003").s().p("AnEHFQi7i8AAkJQAAkIC7i8QC8i7EIAAQEJAAC8C7QC7C8AAEIQAAEJi7C8Qi8C7kJAAQkIAAi8i7g");
	this.shape.setTransform(1,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("AiRJ8QkIg8iQjlQiPjmA8kGQA9kIDliQQDliPEHA8QEIA9CPDlQCQDlg9EHQg8EHjlCQQihBmiyAAQhLAAhOgTg");
	this.shape_1.setTransform(0.8,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FEFEFE","#B8B7B7","#979595"],[0,0.651,1],-29.8,-66.6,30,67.1).s().p("AkbKgQiDg3hlhlQhlhlg3iDQg5iIAAiUQAAiTA5iIQA3iDBlhlQBlhlCDg3QCIg5CTAAQCUAACIA5QCDA3BlBlQBlBlA3CDQA5CHAACUQAACUg5CIQg3CDhlBlQhlBliDA3QiIA5iUAAQiUAAiHg5g");
	this.shape_2.setTransform(1,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#878787").s().p("AkZKbQiCg3hkhkQhkhkg3iCQg5iHAAiTQAAiSA5iHQA3iCBkhkQBkhkCCg3QCHg5CSAAQCTAACHA5QCCA3BkBkQBkBkA3CCQA5CHAACSQAACTg5CHQg3CChkBkQhkBkiCA3QiHA5iTAAQiSAAiHg5g");
	this.shape_3.setTransform(-0.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E57778").ss(4).p("AAAkiIlaJZIK1AAg");
	this.shape_4.setTransform(1,-4.7,1,1,0,0,0,0,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E57778").ss(4).p("AAAinIjNFjIGbAAg");
	this.shape_5.setTransform(0.3,-0.1,1,1,0,0,0,0,1.5);

	this.instance_4 = new lib.Group_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(37.5,29.5,1,1,0,0,0,25.2,31.2);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Group_1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-38.6,-23.8,1,1,0,0,0,22.3,33.5);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Mesh();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-60.1,-60.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2F2F2").s().p("AiRJ9QkIg9iPjlQiQjlA8kHQA9kIDliPQDliQEHA8QEIA9CQDlQCPDlg8EHQg9EHjlCRQiiBkiyAAQhKAAhOgRg");
	this.shape_6.setTransform(0.8,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FEFEFE","#B8B7B7","#979595"],[0,0.651,1],-29.8,-66.6,30,67.1).s().p("AkbKgQiDg3hlhlQhlhlg3iDQg5iIAAiUQAAiUA5iHQA3iDBlhlQBlhlCDg3QCIg5CTAAQCVAACHA5QCDA3BlBlQBlBlA3CDQA5CHAACUQAACUg5CIQg3CDhlBlQhlBliDA3QiHA5iVAAQiTAAiIg5g");
	this.shape_7.setTransform(1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_7},{t:this.shape_6},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_5},{t:this.shape_4}]},10).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.9,-72.7,146.9,146.4);


(lib.dashboard_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151F37").s().p("Ah2B3QgxgxAAhGQAAhEAxgyQAygxBEAAQBGAAAxAxQAxAyAABEQAABGgxAxQgxAxhGAAQhEAAgygxg");
	this.shape.setTransform(68,72.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#151F37").s().p("Ah2B3QgxgxAAhGQAAhFAxgxQAxgxBFAAQBFAAAyAxQAxAxAABFQAABGgxAxQgyAxhFAAQhFAAgxgxg");
	this.shape_1.setTransform(-67,72.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB3640").s().p("AiEDHID9mqIAMAGIjSHBg");
	this.shape_2.setTransform(8.7,-50.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmArIAAhVIBOAAIAAAQIg/AAIAAATIAyAAIAAAPIgyAAIAAAjg");
	this.shape_3.setTransform(54,-33.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgmArIAAhVIBNAAIAAAQIg+AAIAAATIAyAAIAAAPIgyAAIAAATIA+AAIAAAQg");
	this.shape_4.setTransform(-51.4,-33.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CD4F5").s().p("AgnAdQgDgEABgEQABgEADgCIA+gtQAEgCAEAAQAEABADAEQACADAAAEQgBAFgEACIg+AsQgCACgEAAQgFAAgDgEg");
	this.shape_5.setTransform(57.2,-50.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CD4F5").s().p("AghAjQgEgDAAgEQAAgEAEgDIA1g3QADgDAEAAQAEAAADADQADADABAEQAAAEgEAEIg1A2QgDADgEAAQgEAAgDgDg");
	this.shape_6.setTransform(49.3,-59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CD4F5").s().p("AgbApQgDgDgBgEQgBgEACgEIArg/QADgEAEAAQAEgBAEACQADACABAFQABAEgDAEIgrA/QgDAEgFAAIgGgBg");
	this.shape_7.setTransform(40,-67.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CD4F5").s().p("AgTAtQgEgCgCgEQgBgEACgEIAehGQACgEAEgBQAEgCAEACQAEACACAEQABAEgCAEIgeBGQgDAGgHAAIgEgBg");
	this.shape_8.setTransform(29.4,-73.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CD4F5").s().p("AgLAwQgKgDADgKIAShKQABgEADgDQAEgCAEABQAEABADAEQACAEgBAEIgTBKQgBAIgIAAg");
	this.shape_9.setTransform(18,-77.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CD4F5").s().p("AgCAxQgKgBAAgKIAGhMQABgLAJABQAEAAADAEQADADgBAEIgFBNQgBAJgJAAg");
	this.shape_10.setTransform(6.1,-79.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8CD4F5").s().p("AAEAxQgIAAgBgJIgIhMQgBgEADgEQADgDAEgBQAEAAADADQADACABAFIAHBMQABAEgDAEQgCADgFAAg");
	this.shape_11.setTransform(-5.9,-79.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8CD4F5").s().p("AABAoIgUhKQgDgJAKgEQAEgBAEACQAEADAAAEIAVBJQABAEgCAEQgCAEgEABIgDABQgIAAgCgIg");
	this.shape_12.setTransform(-17.8,-76.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8CD4F5").s().p("AAIAoIghhFQgCgEABgEQACgEAEgCQAEgCAEABQAEACACAEIAgBEQACAEgBAEQgBAEgEACIgFABQgHAAgCgFg");
	this.shape_13.setTransform(-29,-72.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB3640").s().p("AgegYIARgNIAsA+IgRANg");
	this.shape_14.setTransform(-39.4,-66.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB3640").s().p("AgigTIAPgPIA2A1IgPAPg");
	this.shape_15.setTransform(-48.5,-58.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EB3640").s().p("AglgMIALgSIBAArIgMASg");
	this.shape_16.setTransform(-56.1,-49.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOAnIAAgUIgzAAIAAgLIAzgvIAMAAIAAAvIAMAAIAAALIgMAAIAAAUgAgUAIIAiAAIAAgcg");
	this.shape_17.setTransform(224,40.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAnQgGAAgEgDQgFgFAAgFIAAgzQAAgFAFgEQAEgEAGgBIAxAAQAGABAEAEQAFAEAAAFIAAAzQAAAFgFAFQgEADgGAAgAgXAcIAwAAIACgBIABgBIAAgpgAgagaIgBABIAAApIAzgqIgwAAg");
	this.shape_18.setTransform(215.6,40.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAnQgGAAgEgDQgFgGAAgEIAAgGIANAAIAAAGIAAABIACABIAxAAIACgBIABgBIAAgSIgBgDIgCAAIhAAAIAAgsIBOAAIAAANIg/AAIgCAAIAAABIAAARIAAABIACABIAxAAQAFAAAGAEQAEAEgBAGIAAASQABAEgEAGQgGADgFAAg");
	this.shape_19.setTransform(206.5,40.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAVAnIAAhAIgBgBIgCAAIgyAAIAAgNIAyAAQAHABADAEQAFAEAAAFIAABAg");
	this.shape_20.setTransform(198,40.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EB3640").s().p("AjQCoIGYl7IAJAJIl1Gfg");
	this.shape_21.setTransform(217.8,-18.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#84EB43").s().p("AjUB9QgyAAgigjQgkgkAAgxIAAgJQAAgxAkgjQAigkAyAAIGpAAQAyAAAjAkQAjAjAAAxIAAAJQAAAxgjAkQgjAjgyAAg");
	this.shape_22.setTransform(200.4,39.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgIAFgEQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAGgFAGQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAmIAugnIgtAAg");
	this.shape_23.setTransform(278.9,14.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgEQgFgGAAgHIAAgzQAAgHAFgGQAFgEAHAAIA2AAIAAAPIg2AAIgBACIAAAQIABABIAzAAQAHAAAFAFQAFAEAAAGIAAATQAAAHgFAGQgFAEgHAAgAgaAaIABACIAzAAIABgCIAAgTIgBAAIg0AAg");
	this.shape_24.setTransform(269.1,14.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAGArIAAg/IgGAJIgVAAIAZgfIASAAIAABVg");
	this.shape_25.setTransform(261.6,14.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgFAAgHIAAgzQAAgGAFgGQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAIgBABg");
	this.shape_26.setTransform(275.4,-27.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AANArIAAgWIg1AAIAAgOIA2gxIAPAAIAAAwIAMAAIAAAPIgMAAIAAAWgAgPAGIAcAAIAAgYg");
	this.shape_27.setTransform(265.9,-27.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAGArIAAg+IgGAIIgVAAIAZgfIASAAIAABVg");
	this.shape_28.setTransform(259.2,-27.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAglgAgagZIAAAlIAugmIgtAAg");
	this.shape_29.setTransform(257.8,-58);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgqArIAAghQAAgHAFgEQAFgFAHAAIAzAAIABAAIAAgUIgBAAIgzAAIgBAAIAAAHIgQAAIAAgHQAAgHAFgEQAFgFAHAAIAzAAQAHAAAFAFQAFAEAAAHIAAAUQAAAGgFAEQgFAFgHAAIgzAAIgBABIAAARIABAAIBEAAIAAAQg");
	this.shape_30.setTransform(247.9,-58);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGArIAAg+IgGAIIgVAAIAZgfIASAAIAABVg");
	this.shape_31.setTransform(240.4,-58);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgGAAgGIAAgzQAAgGAFgGQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgGAFgGAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAIgBABg");
	this.shape_32.setTransform(221.2,-75.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgGAAgGIAAgzQAAgGAFgGQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgGAFgGAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAIgBABg");
	this.shape_33.setTransform(211.2,-75.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAGArIAAg+IgGAIIgVAAIAZgfIASAAIAABVg");
	this.shape_34.setTransform(203.8,-75.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgGAAgGIAAgzQAAgGAFgGQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgGAFgGAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAIgBABg");
	this.shape_35.setTransform(175.7,-75.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgFAAgGIAAgTQAAgFADgDQgDgEAAgFIAAgRQAAgGAFgFQAFgFAHAAIAzAAQAGAAAFAEQAFAEABAFIAAAUQAAAFgCAEQACACAAAGIAAATQAAAHgFAEQgGAFgGAAgAgaAIIAAATIABAAIAzAAIABAAIAAgTIgBgBIgzAAIgBABgAgagaIAAASIABABIAzAAIABgBIAAgSIgBAAIgzAAg");
	this.shape_36.setTransform(165.7,-75.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgHAFgFQAGgFAGAAIAzAAQAGAAAGAFQAFAGAAAGIAAAzQAAAGgFAGQgFAFgHAAgAgTAbIAtAAIABgBIAAglgAgagZIAAAlIAugmIgtAAg");
	this.shape_37.setTransform(146.5,-50.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgEAAgHIAAg1QAAgHAFgEQAFgFAHAAIA2AAIAAAQIg2AAIgBAAIAAARIABABIAzAAQAHAAAFAFQAFAEAAAHIAAATQAAAHgFAEQgFAFgHAAgAgaAbIABABIAzAAIABgBIAAgTIgBgBIg0AAg");
	this.shape_38.setTransform(136.7,-50.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAg");
	this.shape_39.setTransform(125.4,-15.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AANArIAAgWIg1AAIAAgOIA2gxIAPAAIAAAwIAMAAIAAAPIgMAAIAAAWgAgPAGIAcAAIAAgYg");
	this.shape_40.setTransform(115.9,-15.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAglgAgagZIAAAlIAugmIgtAAg");
	this.shape_41.setTransform(131.3,28.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgqArIAAghQAAgHAFgEQAFgFAHAAIAzAAIABAAIAAgUIgBAAIgzAAIgBAAIAAAHIgQAAIAAgHQAAgHAFgEQAFgFAHAAIAzAAQAHAAAFAFQAFAEAAAHIAAAUQAAAGgFAEQgFAFgHAAIgzAAIgBABIAAARIABABIBEAAIAAAPg");
	this.shape_42.setTransform(121.3,28.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAg");
	this.shape_43.setTransform(148.2,60.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#151F37").s().p("AmtP7QjHhTiZiaQiZiZhUjHQhXjNAAjhQAAjfBXjOQBUjHCZiZQCZiZDHhUQDNhYDgABQDhgBDNBYQDHBUCZCZQCZCZBUDHQBXDOAADfQAADhhXDNQhUDHiZCZQiZCajHBTQjNBYjhAAQjgAAjNhYgAmZvKQi9BQiSCSQiSCShQC9QhTDEAADVQAADWBTDEQBQC9CSCTQCSCSC9BQQDEBSDVAAQDWAADEhSQC9hQCSiSQCSiTBQi9QBTjEAAjWQAAjVhTjEQhQi9iSiSQiSiSi9hQQjEhTjWAAQjVAAjEBTg");
	this.shape_44.setTransform(199.1,0.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8CD4F5").s().p("Ag/AnIBahsIAkAfIhaBsg");
	this.shape_45.setTransform(134.3,77.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8CD4F5").s().p("Ag8AmIBshbIANAQIhrBbg");
	this.shape_46.setTransform(121.8,65.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8CD4F5").s().p("AhCAaIB6hFIALASIh6BFg");
	this.shape_47.setTransform(111.7,50.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8CD4F5").s().p("AhKACICFgvIAQAsIiFAvg");
	this.shape_48.setTransform(104.3,34.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8CD4F5").s().p("AhHACICLgYIAEAVIiLAYg");
	this.shape_49.setTransform(99.7,17.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8CD4F5").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape_50.setTransform(98.2,0.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8CD4F5").s().p("AhJALIAIgtICLAYIgJAtg");
	this.shape_51.setTransform(99.8,-17.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8CD4F5").s().p("AhFgOIAHgTICEAvIgHAUg");
	this.shape_52.setTransform(104.3,-34.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8CD4F5").s().p("AhCgaIALgSIB6BGIgLASg");
	this.shape_53.setTransform(111.7,-50.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8CD4F5").s().p("AhFgbIAfgkIBsBbIgfAkg");
	this.shape_54.setTransform(121.8,-64.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8CD4F5").s().p("Ag1gvIAQgNIBaBrIgPAOg");
	this.shape_55.setTransform(134.3,-77);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8CD4F5").s().p("Agsg4IASgKIBGB6IgSALg");
	this.shape_56.setTransform(148.7,-87.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8CD4F5").s().p("Agug6IAtgQIAwCFIgsAQg");
	this.shape_57.setTransform(164.6,-94.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8CD4F5").s().p("AgWhDIAVgEIAYCLIgVAEg");
	this.shape_58.setTransform(181.6,-99.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EB3640").s().p("Ag1gvIARgNIBaBsIgRANg");
	this.shape_59.setTransform(264,77.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EB3640").s().p("Ag8glIANgQIBsBbIgNAQg");
	this.shape_60.setTransform(276.5,65.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EB3640").s().p("AhCgZIALgSIB6BFIgLASg");
	this.shape_61.setTransform(286.5,50.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EB3640").s().p("AhFgNIAHgUICEAwIgHATg");
	this.shape_62.setTransform(294,34.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EB3640").s().p("AhJAKIAIgsICLAYIgIAug");
	this.shape_63.setTransform(298.5,17.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EB3640").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape_64.setTransform(300.1,0.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EB3640").s().p("AhHACICLgYIAEAVIiLAYg");
	this.shape_65.setTransform(298.5,-17.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EB3640").s().p("AhKACICFgvIAQAsIiFAvg");
	this.shape_66.setTransform(294,-34.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8CD4F5").s().p("AhCAaIB6hGIALASIh6BGg");
	this.shape_67.setTransform(286.5,-50.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8CD4F5").s().p("Ag8AmIBshbIANAQIhsBbg");
	this.shape_68.setTransform(276.5,-64.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8CD4F5").s().p("Ag/AnIBahsIAkAfIhaBsg");
	this.shape_69.setTransform(264,-77);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8CD4F5").s().p("AgsA4IBGh6IATAKIhHB7g");
	this.shape_70.setTransform(249.6,-87.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8CD4F5").s().p("AghA/IAviEIAUAHIgwCEg");
	this.shape_71.setTransform(233.7,-94.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8CD4F5").s().p("AgiBCIAYiLIAuAIIgZCLg");
	this.shape_72.setTransform(216.7,-99.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8CD4F5").s().p("AgJBHIAAiNIATAAIAACNg");
	this.shape_73.setTransform(199.1,-100.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#151F37").s().p("AhlBlQgqgpAAg8QAAg6AqgqQArgqA6gBQA8ABAqAqQAqAqAAA6QAAA8gqApQgqAqg8ABQg6gBgrgqg");
	this.shape_74.setTransform(199.1,0.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAKA8IAAhfIgNAQIgXAAIAhgoIAVAAIAAB3g");
	this.shape_75.setTransform(-179.4,40.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("Ag7A8IAAguQAAgJAHgFQAGgGAIAAIBNAAIACgBIABgDIAAgcIgBgCIgCgBIhNAAIgCABIgBACIAAAHIgSAAIAAgHQAAgIAHgGQAGgHAIAAIBNAAQAJAAAGAHQAGAGAAAIIAAAcQAAAJgGAFQgGAGgJABIhNAAIgCABIgBACIAAAYIABADIACABIBiAAIAAASg");
	this.shape_76.setTransform(-189.1,40.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_77.setTransform(-197.8,45.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ag7A8IAAguQAAgJAGgFQAHgGAJAAIBMAAIACgBIABgDIAAgcIgBgCIgCgBIhMAAIgDABIgBACIAAAHIgSAAIAAgHQAAgIAGgGQAHgHAJAAIBMAAQAIAAAGAHQAHAGAAAIIAAAcQAAAJgHAFQgGAGgIABIhMAAIgDABIgBACIAAAYIABADIADABIBhAAIAAASg");
	this.shape_78.setTransform(-206.5,40.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAKA8IAAhfIgNAQIgYAAIAhgoIAWAAIAAB3g");
	this.shape_79.setTransform(-217.2,40.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EB3640").s().p("AkWieIAGgLIIoEdIggA2g");
	this.shape_80.setTransform(-224.5,-14);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#84EB43").s().p("AjUB9QgxAAgkgjQgjgkAAgxIAAgJQAAgxAjgjQAkgkAxAAIGpAAQAxAAAkAkQAjAjAAAxIAAAJQAAAxgjAkQgkAjgxAAg");
	this.shape_81.setTransform(-196.9,39.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAg");
	this.shape_82.setTransform(-120.3,13.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgGAAgFIAAg1QAAgGAFgFQAFgFAHAAIA2AAIAAAPIg2AAIgBABIAAARIABABIAzAAQAGAAAGAFQAFAEAAAGIAAAUQAAAGgFAFQgGAFgGAAgAgaAbIABAAIAzAAIABAAIAAgUIgBAAIg0AAg");
	this.shape_83.setTransform(-130.1,13.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgIAFgEQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAGgFAGQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAmIAugnIgtAAg");
	this.shape_84.setTransform(-126.5,-40.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgGIAAgHIAQAAIAAAHIABABIAzAAIABgBIAAgUIgBAAIhEAAIAAgxIBVAAIAAAQIhEAAIgBABIAAAQIABABIAzAAQAHAAAFAFQAFAEAAAGIAAAUQAAAGgFAFQgFAFgHAAg");
	this.shape_85.setTransform(-136.5,-40.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAGAAAGIAAAzQAAAGgFAGQgGAFgGAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAg");
	this.shape_86.setTransform(-164.5,-75.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AANArIAAgWIg1AAIAAgOIA2gxIAPAAIAAAwIAMAAIAAAPIgMAAIAAAWgAgQAGIAdAAIAAgYg");
	this.shape_87.setTransform(-174,-75.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAGAAAGIAAAzQAAAGgFAGQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAg");
	this.shape_88.setTransform(-222.5,-75.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgEAAgHIAAgGIAQAAIAAAGIABAAIAzAAIABAAIAAgTIgBgBIg1AAIAAgPIAyAAIABAAIAAgSIgBgBIgwAAIgBABIAAAHIgQAAIAAgHQAAgHAFgEQAFgFAHAAIAwAAQAHAAAEAFQAFAEAAAHIAAASIgBAGQAFADAAAHIAAATQAAAGgFAFQgFAFgHAAg");
	this.shape_89.setTransform(-232.5,-75.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgIAFgEQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAGgFAGQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAmIAugnIgtAAg");
	this.shape_90.setTransform(-260.5,-40.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgqArIAAghQAAgHAFgEQAGgFAGAAIAzAAIABAAIAAgTIgBgBIgzAAIgBABIAAAGIgQAAIAAgGQAAgHAFgGQAFgEAHAAIAzAAQAHAAAFAEQAFAHAAAGIAAATQAAAGgFAEQgFAFgHAAIgzAAIgBABIAAARIABABIBEAAIAAAPg");
	this.shape_91.setTransform(-270.5,-40.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgZArQgHAAgFgFQgFgFAAgHIAAgzQAAgHAFgFQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAglgAgagZIAAAlIAugmIgtAAg");
	this.shape_92.setTransform(-274.1,16.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAGArIAAg+IgGAIIgVAAIAZgfIASAAIAABVg");
	this.shape_93.setTransform(-281.5,16.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgZArQgGAAgGgFQgFgFAAgHIAAgzQAAgGAFgGQAFgFAHAAIAzAAQAHAAAFAFQAFAFAAAHIAAAzQAAAHgFAFQgFAFgHAAgAgTAbIAtAAIABgBIAAgmgAgagZIAAAlIAugmIgtAAIgBABg");
	this.shape_94.setTransform(-249.1,60.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#151F37").s().p("AmtP7QjHhTiZiaQiaiZhTjHQhYjNAAjhQAAjfBYjOQBUjHCZiZQCZiZDHhUQDNhYDgABQDggBDOBYQDHBTCZCaQCaCZBTDHQBYDOgBDfQABDhhYDNQhTDHiaCZQiZCajHBTQjOBYjgAAQjgAAjNhYgAmZvKQi9BQiSCSQiSCShQC9QhTDEAADVQAADWBTDEQBQC9CSCTQCSCSC9BQQDEBSDVAAQDWAADEhSQC9hQCSiSQCSiTBQi9QBTjDAAjXQAAjVhTjEQhQi9iSiSQiSiSi9hQQjEhTjWAAQjVAAjEBTg");
	this.shape_95.setTransform(-198.1,0.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8CD4F5").s().p("Ag/AnIBbhsIAkAfIhbBsg");
	this.shape_96.setTransform(-263,77.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8CD4F5").s().p("Ag8AmIBrhbIAOAQIhsBbg");
	this.shape_97.setTransform(-275.4,65.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8CD4F5").s().p("AhCAaIB6hFIALASIh7BFg");
	this.shape_98.setTransform(-285.5,50.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8CD4F5").s().p("AhFAPICEgwIAHAUIiEAvg");
	this.shape_99.setTransform(-293,34.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8CD4F5").s().p("AhJgKICLgYIAIAsIiLAag");
	this.shape_100.setTransform(-297.5,17.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#8CD4F5").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape_101.setTransform(-299,0.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#8CD4F5").s().p("AhHgBIAEgVICLAYIgEAVg");
	this.shape_102.setTransform(-297.5,-17.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8CD4F5").s().p("AhFgOIAHgTICEAvIgHAUg");
	this.shape_103.setTransform(-293,-34.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8CD4F5").s().p("AhIgOIAXgpIB6BGIgXApg");
	this.shape_104.setTransform(-285.5,-50.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#8CD4F5").s().p("Ag8glIANgQIBsBbIgOAQg");
	this.shape_105.setTransform(-275.4,-64.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#8CD4F5").s().p("Ag1gvIAQgNIBbBrIgQAOg");
	this.shape_106.setTransform(-263,-77);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8CD4F5").s().p("Agrg4IASgKIBFB6IgSALg");
	this.shape_107.setTransform(-248.6,-87.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8CD4F5").s().p("Agtg6IAsgQIAvCFIgsAQg");
	this.shape_108.setTransform(-232.7,-94.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#8CD4F5").s().p("AgWhDIAVgEIAYCLIgVAEg");
	this.shape_109.setTransform(-215.7,-99.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EB3640").s().p("Ag/gmIAkgfIBbBsIgkAfg");
	this.shape_110.setTransform(-133.3,77.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EB3640").s().p("Ag8glIANgQIBsBbIgNAQg");
	this.shape_111.setTransform(-120.8,65.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EB3640").s().p("AhCgZIALgSIB6BFIgLASg");
	this.shape_112.setTransform(-110.7,50.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EB3640").s().p("AhFgNIAHgUICEAwIgHATg");
	this.shape_113.setTransform(-103.3,34.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EB3640").s().p("AhJAKIAIgsICLAYIgIAug");
	this.shape_114.setTransform(-98.7,17.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EB3640").s().p("AhGAKIAAgTICNAAIAAATg");
	this.shape_115.setTransform(-97.2,0.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EB3640").s().p("AhHACICLgYIAEAVIiLAYg");
	this.shape_116.setTransform(-98.8,-17.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#8CD4F5").s().p("AhFAOICEgvIAHATIiEAwg");
	this.shape_117.setTransform(-103.3,-34.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8CD4F5").s().p("AhIAPIB6hGIAXApIh6BGg");
	this.shape_118.setTransform(-110.7,-50.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8CD4F5").s().p("Ag8AmIBshbIANAQIhsBbg");
	this.shape_119.setTransform(-120.8,-64.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8CD4F5").s().p("Ag1AvIBbhrIAQANIhbBsg");
	this.shape_120.setTransform(-133.3,-77);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8CD4F5").s().p("AgrA4IBGh6IASAKIhGB7g");
	this.shape_121.setTransform(-147.7,-87.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8CD4F5").s().p("AgtA7IAviFIAsAQIgvCFg");
	this.shape_122.setTransform(-163.6,-94.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8CD4F5").s().p("AgWBEIAYiLIAVAEIgYCLg");
	this.shape_123.setTransform(-180.6,-99.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8CD4F5").s().p("AgJBHIAAiNIATAAIAACNg");
	this.shape_124.setTransform(-198.1,-100.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#151F37").s().p("AhkBlQgqgpgBg8QABg6AqgqQAqgqA6gBQA7ABAqAqQAqAqABA6QgBA8gqApQgqAqg7ABQg7gBgpgqg");
	this.shape_125.setTransform(-198.1,0.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#151F37").s().p("AACB9Iiph3QgDgCAAgEQAAgCADgDICph3QAEgCADACQAEACAAAEIAAAeQAAAIAHAAICQAAQAHAAAAAGIAACUQAAAIgHAAIiQAAQgHAAAAAHIAAAeQAAAFgEACIgDAAIgEgBg");
	this.shape_126.setTransform(-85.5,-118.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AACCIIi3iCQgDgCAAgEQAAgDADgCIC3iCQAEgCAEACQAEACAAAFIAAAhQAAAHAIAAICbAAQAIAAAAAIIAAChQAAAIgIAAIibAAQgIAAAAAHIAAAhQAAAFgEACIgEABIgEgBg");
	this.shape_127.setTransform(-85.5,-120.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#151F37").s().p("AgIB+QgEgCAAgFIAAgeQAAgDgCgCQgDgDgDABIiPAAQgHAAAAgIIAAiUQAAgGAHAAICPAAQADAAADgDQACgCAAgDIAAgeQAAgEAEgCQADgCAEACICpB3QADADAAACQAAAEgDACIipB3IgEABIgDAAg");
	this.shape_128.setTransform(86.5,-118.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgJCIQgFgCAAgFIAAghQAAgDgCgCQgCgCgDAAIicAAQgDAAgCgDQgCgCAAgDIAAihQAAgIAHAAICcAAQAHAAAAgIIAAggQAAgFAFgCQAEgCAEACIC3CBQADADAAADQAAAEgDACIi3CBQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAIgDgBg");
	this.shape_129.setTransform(86.5,-120.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#151F37").s().p("AkuIwQiRgthwhUQhyhWg9hvQg9hwAAh6QAAh5A9hvQA9hvByhWQBwhVCRgtQCRgtCdAAQCfAACQAtQCRAtBwBVQBzBWA8BvQA9BvAAB5QAAB7g9BvQg8BvhzBWQhwBUiRAtQiQAtifAAQidAAiRgtgAoNmGQhnBNg5BjQg6BnAABvQAABxA6BmQA5BkBnBMQDaCiEzAAQE0AADaiiQBnhMA5hkQA6hmAAhxQAAhvg6hnQg5hjhnhNQjaiik0AAQkzAAjaCig");
	this.shape_130.setTransform(0.5,-43.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#080B12").s().p("EAl+AZhQj+ggnOikQkEhfiHgwQjuhTi1g0QntiMmXAAQmWAAntCMQi2A0jtBTImMCPQnOCkj+AgQllAuj3iSQkGibiAlPQh2k4AUmPQAUmGCTlsQCZl8D8j0QGumhUYiCQGXgpG9gHQDfgECNAFIFsgBQG+AHGXApQUXCCGvGhQD8D0CZF8QCTFsAUGGQAUGPh3E4QiAFPkGCbQi8Bvj8AAQhPAAhVgLg");
	this.shape_131.setTransform(-7.3,-1.1);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(0.5,-0.4,1,1,0,0,0,422.4,221.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#151F37").s().p("EhJTAlJMAAAhKSMCSnAAAMAAABKSg");
	this.shape_132.setTransform(0.5,-11.4,1,0.932);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.instance},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.dashboard_1, new cjs.Rectangle(-468.6,-232.9,938.4,453.7), null);


// stage content:
(lib.dashboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.addEventListener("keydown", keyPressed);
		
		const stage=this;
		let state = 'idle';
		idle();
		
		function idle(){
			state = 'idle';
			stage.leftLight.visible=false;
			stage.rightLight.visible=false;
			stage.hazzardLight.visible=false;
			stage.lever.gotoAndStop(0);
		}
		
		function rightFlashing(){
			state = 'rightFlashing';
			stage.rightLight.visible=true;
			stage.leftLight.visible=false;
			stage.hazzardLight.visible=false;
			stage.lever.gotoAndStop(1);
		}
		
		function leftFlashing(){
			state = 'leftFlashing';
			stage.leftLight.visible=true;
			stage.rightLight.visible=false;
			stage.hazzardLight.visible=false;
			stage.lever.gotoAndStop(2);
		}
		function hazzardFlashing(){
			state = 'hazzardFlashing';
			stage.leftLight.visible=true;
			stage.rightLight.visible=true;
			stage.hazzardLight.visible=true;
			stage.lever.gotoAndStop(0);
		}
		
		function keyPressed(evt) {
		
		    var key = evt.key.toLowerCase();
			
			if(key === 'arrowup')
				if(state === 'leftFlashing')
					idle();
				else 
					rightFlashing();
			if(key === 'arrowdown')
				if(state === 'rightFlashing')
					idle();
				else
					leftFlashing();
			if(key === 'h')
				if(state === 'hazzardFlashing')
					idle();
				else
					hazzardFlashing();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// labels
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAZQgEgDAAgEIABghQABgGADgDQADgDAEAAQAEAAAEADQADADAAAEIAAADIgBADIgBAdQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(676.8,340.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUA/IgEgUQgCgMAAgIIABgGIAAgHIAAgHQgBgEgEAAQgJAAgHAIQgEAEgHAMQAAAfgDAGQgDAIgHgBQgFAAgEgCQgDgEAAgEIABgFIABgXIAAg4IAAgDIABgNIgBgIIgBgIQAAgFADgDQAEgDAFAAQAIAAADAJQACAFAAALIgBARIAAAQQAGgFAHgEQAGgDAIAAQAPAAAGAJQAFAFABAMIABAVIACARIADARIAAADQAAAEgEADQgDAEgFAAQgJAAgCgIg");
	this.shape_1.setTransform(668.2,344.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAZQgEgDAAgEIABghQABgGADgDQADgDAEAAQAEAAAEADQADADAAAEIAAADIgBADIgBAdQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_2.setTransform(659.1,340.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAIAeIgQAAIgIAAIgHABQgFAAgDgDQgEgDAAgEQAAgJALgBIAQgBIAQABIARAAQAEAAADADQAEACAAAFQAAAEgEADQgDADgEAAIgRgBgAgYgKQgFAAgDgDQgDgCAAgFQAAgKARAAIADAAIACAAIAmAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAIgmAAIgGAAIgFAAg");
	this.shape_3.setTransform(642.5,345.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAtQgMgFAAgKQAAgIAKAAQAEAAAIACQAHADAEAAQAQAAAAgHQAAgFgMgEQgQgJgGgCQgMgIAAgNQAAgRATgFQAKgEAVAAQAIAAAFADQAGACAAAJQAAAPgJAAQgIgBgCgGIgHgBQgTAAAAAFQgBAEAMAFQARAIAFAEQANAJAAALQAAAOgOAIQgKAGgQAAQgLAAgKgDg");
	this.shape_4.setTransform(625.3,346.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHA7QgDgDAAgEIAAgKIAAgJIgBgrIgQgBQgLgBAAgKQAAgFADgDQADgEAFAAIAPABIAAgJIgBgIQAAgFAEgDQADgDAFAAQAMAAAAAVIAAAHIAIgBIAOABQAGADAAAIQAAAFgDADQgDADgFAAIgFAAIgEAAIgIABIACAsIAAAEIAAAFQAAATgNAAQgDAAgEgDg");
	this.shape_5.setTransform(617,345.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUA/IgEgUQgCgMAAgIIABgGIAAgHIAAgHQgBgEgEAAQgJAAgHAIQgEAEgHAMQAAAfgDAGQgDAIgHgBQgFAAgEgCQgDgEAAgEIABgFIABgXIAAg4IAAgDIABgNIgBgIIgBgIQAAgFADgDQAEgDAFAAQAIAAADAJQACAFAAALIgBARIAAAQQAGgFAHgEQAGgDAIAAQAPAAAGAJQAFAFABAMIABAVIACARIADARIAAADQAAAEgEADQgDAEgFAAQgJAAgCgIg");
	this.shape_6.setTransform(608,344.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrA3QAAgFADgDQADgDAFAAIALACIANABQALAAAHgIQAFgHABgRQgEAFgGACQgFACgGAAQgQAAgLgLQgLgLAAgQQAAgXAOgPQAPgPAYAAQAIAAAGACQAGACADAEQALACAAALIgCAQQgEAUAAAVQgBAcgIAMQgMARgbAAQghAAAAgNgAgNgmQgGAJgBAOQAAAKAFAFQADAEAIAAQAGAAAHgHQAHgIAAgHIAFgaIgHgCIgFgBQgNAAgJAJg");
	this.shape_7.setTransform(598.2,349);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKA+QgDgEAAgEIgBgQIAAgPIABgUIABgSQAAgEADgEQADgDAGAAQAEAAADADQADAEAAAEIgBASIAAAUIAAAPIAAAQQAAAEgDAEQgDADgFAAQgFAAgDgDgAgHgrQgEgDAAgGQAAgFAEgEQAEgDAEAAQAGAAAEADQAEAEAAAFQAAAGgEADQgEAEgGAAQgEAAgEgEg");
	this.shape_8.setTransform(591.4,344.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgFIAAh1QAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFIAABwQAAAQgMAAQgEAAgEgDg");
	this.shape_9.setTransform(586.3,344.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXBAQgFAEgGABIgMABQgTAAgNgMQgNgMAAgUQAAgXANgNQANgOAUAAQAHAAAEACQAFABAEACQABgcABgMQACgKAKAAQAFAAADAEQADACAAAGIgCAlIgCAkQAAAeACAKIABADQAAAFgEADQgEADgEAAQgHAAgDgGgAgQAEQgHAHAAAOQAAAKAHAHQAHAGAJAAQAFAAAEgCIAHgFIAEgDIAAgfQgEgFgEgCQgFgDgFABQgNAAgFAGg");
	this.shape_10.setTransform(571.2,344.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghAtQgDgEABgEIAAg3IAAgIIAAgIQAAgFADgDQACgDAGAAQAJAAACAKQAOgMASAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIAAgJQgSADgJARIAAAqQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_11.setTransform(562.1,346.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAnIgOAGIgJACQgVAAgKgLQgKgLAAgWQAAgTAPgPQAPgPAUAAQAIAAALAFQANAFAAAIQAAADgCACIgCAIIAAAMQAAAPACAHIAEAJIADAJQAAAEgDADQgDADgFAAQgEAAgIgIgAgLgQQgJAJAAALQAAALAEAGQAEAGAIAAQAFAAAFgCQAEgCAEgDQgCgUAAgKIAAgGIABgIIgDgBIgCAAQgKAAgJAJg");
	this.shape_12.setTransform(553,346.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmAuQgEgDAAgFQABgFAFgFQAWgSAWghIgKAAQgNAAgNgCQgLgBAAgKQAAgFAEgDQADgDAFAAIAMABIANABIAQgBIASgBQALAAgBAJQAAAHgGAJQgIAIgKAOIgRAWIAIAAIAKACIAKABQAFAAADADQAEADgBAFQABAFgEADQgDADgFAAIgKgBIgKgBQgSAAgRADIgEAAQgEAAgEgCg");
	this.shape_13.setTransform(543.4,346.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmAuQgDgDAAgFQgBgFAGgFQAVgSAWghIgIAAQgNAAgOgCQgKgBAAgKQAAgFACgDQAEgDAFAAIANABIANABIAQgBIARgBQAKAAABAJQAAAHgIAJQgHAIgKAOIgSAWIAJAAIAKACIAJABQAGAAADADQADADABAFQgBAFgDADQgDADgGAAIgJgBIgKgBQgSAAgRADIgDAAQgFAAgEgCg");
	this.shape_14.setTransform(534,346.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVAnIgOAGIgJACQgVAAgKgLQgKgLAAgWQAAgTAPgPQAPgPAUAAQAIAAALAFQANAFAAAIQAAADgCACIgCAIIAAAMQAAAPACAHIAEAJIADAJQAAAEgDADQgDADgFAAQgEAAgIgIgAgLgQQgJAJAAALQAAALAEAGQAEAGAIAAQAFAAAFgCQAEgCAEgDQgCgUAAgKIAAgGIABgIIgDgBIgCAAQgKAAgJAJg");
	this.shape_15.setTransform(524.6,346.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAkBBQgEgDABgFIgBgTIAAgSIAAgJQgOABgSADIghAGIgCASIgBATQAAAEgCADQgEADgFAAQgFAAgDgDQgDgDAAgFIABgZIACgZIAAgfIABggQAAgFADgDQADgDAFAAQAFAAADADQADADABAFIAAATIgBAUIgBAIIAAAJIAhgGQARgEAPAAIABgfQAAgHADgJQAGgKAFAAQAFAAADADQAFADAAAFIgBADQgCAGAAAEIAAAIIgBAHIgBAYIgBAYIABASIABATQAAAFgDADQgDADgFAAQgFAAgEgDg");
	this.shape_16.setTransform(513.2,344.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAZQgEgDAAgEIABgiQABgFADgDQADgDAEAAQAEAAAEADQADACAAAFIAAADIgBAEIgBAcQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_17.setTransform(369.8,353);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AADAbIgFgcIgCAEIgMAhQgCADgDACQgDAGgHAAQgEAAgFgHQgEgHgDgMIgIgtIgCgMQAAgFAEgDQADgDAGAAQAJAAACAJIACAMIABAMIAEAUIAOgqQAEgLAIAAQAKAAACANIAFAWIAEAXIAOgyQABgIAKAAQAEAAAEADQADAEAAAEIAAADQgJAhgJAaQgDAIgFAIQgEAGgHAAQgLgBgGgUg");
	this.shape_18.setTransform(360.2,359.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAkQgMgMgBgUQgBgSALgOQANgSAWAAQARAAAKAOQAJAMAAASQAAATgKAOQgMAQgTAAQgQAAgLgLgAgLgOQgFAJAAAJQAAALAFAFQAFAEAGAAQAGAAAGgFQAGgGABgKQABgagQAAQgJAAgGAJg");
	this.shape_19.setTransform(349.6,359.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAtQgCgEAAgEIAAg3IAAgIIAAgIQAAgFADgDQACgDAGAAQAJAAACAKQAOgMASAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIgBgJQgRADgJARIAAAqQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_20.setTransform(341.1,359.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghAtQgDgEAAgEIAAg3IAAgIIABgIQAAgFADgDQACgDAGAAQAKAAABAKQAOgMASAAQASAAgBAXIAAAGQAAANgLAAQgLAAAAgLIAAgJQgTADgIARIAAAqQAAAFgDADQgDADgGAAQgFAAgDgDg");
	this.shape_21.setTransform(332.7,359.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAeAwQgFgKgDgNIgVACIgTACIgOAdQgEAGgGAAQgFAAgEgDQgDgEAAgFQAAgEAMgZIgBgFQAAgEAIgCQAMgUAPgXQAUggAFAAQAKAAADALIAFAbIANA4IAEALQADAHAAAEQAAAFgDADQgEADgFAAQgGAAgHgQgAgGAIIALgBIAMgBIgGgcIgRAeg");
	this.shape_22.setTransform(321.9,357.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARAnIgCgSIgBgRIAAgHIAAgHIABgDIAAgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAHIAAAIIgBAHIAAAIQAAAFgEAEQgDACgFAAQgFAAgEgCQgDgEAAgFIAAgHIgBgIIABgWIABgXIAAgIIAAgIQAAgEADgDQAEgEAFAAQALAAABAOIAAABQAMgNANAAQAQAAAGAOQAEAJAAASIAAAGIAAAEQAAAHACAKIACARQAAAFgDAEQgEACgFAAQgKAAgCgKg");
	this.shape_23.setTransform(303.6,359.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AADAbIgEgcIgCAEIgOAhQgBADgCACQgEAGgHAAQgEAAgEgHQgFgHgDgMIgIgtIgBgMQgBgFAEgDQAEgDAEAAQAKAAACAJIACAMIABAMIADAUIAPgqQADgLAJAAQAJAAADANIAFAWIAEAXIAOgyQABgIAJAAQAFAAAEADQADAEAAAEIAAADQgIAhgKAaQgDAIgFAIQgEAGgHAAQgLgBgGgUg");
	this.shape_24.setTransform(293,359.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAkQgMgMgBgUQgBgSALgOQANgSAWAAQARAAAKAOQAJAMAAASQAAATgKAOQgMAQgTAAQgQAAgLgLgAgLgOQgFAJAAAJQAAALAFAFQAFAEAGAAQAGAAAGgFQAGgGABgKQABgagQAAQgJAAgGAJg");
	this.shape_25.setTransform(282.3,359.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaBFQgKgCgFgEQgFAAgEgDQgDgEAAgEIABgaIABgaIgBgbIAAgcQAAgFAEgFQAFgFAFAAQADABALAFIAQAHQAYAIARARQAVAUAAAXQAAAPgHAOQgHANgNAIQgOAKgYAAQgHgBgIgBgAgdArQAEADAEAAIAJABQASAAAIgEQAHgGAFgIQAEgIAAgJQAAgVgYgPQgIgFgbgLg");
	this.shape_26.setTransform(271.9,357.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgHAZQgEgDAAgEIABgiQABgFADgDQADgDAEAAQAEAAAEADQADACAAAFIAAADIgBAEIgBAcQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_27.setTransform(261.5,353);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAIAeIgQAAIgIAAIgHABQgFAAgDgDQgEgDAAgEQAAgJALgBIAQgBIAQABIARAAQAEAAADADQAEACAAAFQAAAEgEADQgDADgEAAIgRgBgAgYgKQgFAAgDgDQgDgCAAgFQAAgKARAAIADAAIACAAIAmAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAIgmAAIgGAAIgFAAg");
	this.shape_28.setTransform(244.8,358.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AARAnIgCgSIgBgRIAAgHIAAgHIABgDIAAgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAHIAAAIIgBAHIAAAIQAAAFgEAEQgDACgFAAQgFAAgEgCQgDgEAAgFIAAgHIgBgIIABgWIABgXIAAgIIAAgIQAAgEADgDQAEgEAFAAQALAAABAOIAAABQAMgNANAAQAQAAAGAOQAEAJAAASIAAAGIAAAEQAAAHACAKIACARQAAAFgDAEQgEACgFAAQgKAAgCgKg");
	this.shape_29.setTransform(227.6,359.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AADAbIgFgcIgCAEIgMAhQgCADgDACQgDAGgHAAQgEAAgFgHQgEgHgDgMIgIgtIgCgMQABgFADgDQADgDAGAAQAJAAACAJIACAMIABAMIAEAUIAOgqQADgLAJAAQAKAAADANIAEAWIAEAXIANgyQADgIAJAAQAEAAAEADQADAEABAEIgBADQgIAhgKAaQgDAIgFAIQgEAGgHAAQgLgBgGgUg");
	this.shape_30.setTransform(217,359.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgbAkQgMgMgBgUQgBgSALgOQANgSAWAAQARAAAKAOQAJAMAAASQAAATgKAOQgMAQgTAAQgQAAgLgLgAgLgOQgFAJAAAJQAAALAFAFQAFAEAGAAQAGAAAGgFQAGgGABgKQABgagQAAQgJAAgGAJg");
	this.shape_31.setTransform(206.3,359.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAYBBQgGADgHABIgLABQgTAAgNgNQgNgLAAgUQAAgXANgNQANgOAUAAQAGAAAFABQAGABADAEQABgeACgLQABgKAKAAQAFAAADADQADAEAAAEIgCAlIgCAlQAAAeACAKIABADQgBAFgDADQgEADgEAAQgGAAgDgFgAgRAEQgGAHAAAPQAAAJAHAGQAHAHAJAAQAGAAADgBIAIgGIACgDIAAgfQgDgFgEgCQgFgDgGAAQgMAAgGAHg");
	this.shape_32.setTransform(196.6,357.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AghAtQgDgEAAgEIAAg3IAAgIIABgIQAAgFADgDQACgDAGAAQAJAAACAKQAOgMASAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIAAgJQgSADgJARIAAAqQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_33.setTransform(180.1,359.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcAlQgPgLAAgTQAAgVAMgPQAMgQAVAAQAOgBAKAFQAOAGAAAOQAAAJgLAHQgFAEgPAFIgbANQAEAFAGABQAGADAGAAQALAAAJgFQAGgEAFAAQAIAAABAJQgBAJgOAGQgLAGgOgBQgTABgNgKgAgKgTQgHAEgCALIATgIIARgKQgGgDgJAAQgHAAgFAGg");
	this.shape_34.setTransform(170.7,359.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMAmIgchEIgBgFQAAgEAEgEQAEgDAEAAQAHAAAEAHQAFAKANAlIAMgcIAIgSQADgHAHAAQAFAAADADQAEADAAAFQAAADgOAfIgSAlQAAAEgDADQgDADgEAAQgIAAgEgJg");
	this.shape_35.setTransform(161.9,359.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgcAlQgOgLAAgTQgBgVAMgPQANgQAUAAQAPgBAJAFQANAGABAOQAAAJgLAHQgFAEgPAFIgbANQAEAFAGABQAFADAHAAQALAAAJgFQAGgEAFAAQAIAAAAAJQABAJgOAGQgNAGgNgBQgTABgNgKgAgLgTQgFAEgEALIATgIIASgKQgGgDgJAAQgHAAgGAGg");
	this.shape_36.setTransform(152.5,359.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgFIAAh1QAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFIAABwQAAAQgMAAQgEAAgEgDg");
	this.shape_37.setTransform(145.2,357);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgcAIQgGgCAAgGQAAgDAGgDQADgDAGAAIATgBIAUAAQAFAAAEACQAGADAAAFQgBAJgNABIgoABQgGAAgDgDg");
	this.shape_38.setTransform(130,359);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHA7QgDgDAAgEIAAgKIAAgJIgBgrIgQgBQgLgBAAgKQAAgFADgDQADgEAFAAIAPABIAAgJIgBgIQAAgFAEgDQADgDAFAAQAMAAAAAVIAAAHIAIgBIAOABQAGADAAAIQAAAFgDADQgDADgFAAIgFAAIgEAAIgIABIACAsIAAAEIAAAFQAAATgNAAQgDAAgEgDg");
	this.shape_39.setTransform(113,358);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPBIQgEgDAAgEIAAgDQACgMAAgLIAAgqIgFABIgFAAQgFAAgEgCQgDgEAAgFQAAgHAIgDIAPgBIABgKQACgTAIgJQAJgMAVAAQAPAAAAAMQAAAKgOABQgKgBgFAIQgEAFgBAMIAAACIAQgBQAQAAAAALQAAALgRgBIgQABIAAAXIAAAWQAAAQgCAJQgCAJgIAAQgFAAgDgDg");
	this.shape_40.setTransform(104.4,357.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcAlQgOgLAAgTQAAgVALgPQAMgQAVAAQAOgBALAFQANAGgBAOQABAJgLAHQgFAEgOAFIgcANQAEAFAGABQAGADAGAAQALAAAIgFQAIgEAEAAQAJAAgBAJQAAAJgNAGQgMAGgOgBQgTABgNgKgAgLgTQgFAEgEALIATgIIASgKQgGgDgJAAQgHAAgGAGg");
	this.shape_41.setTransform(95.1,359.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgFIAAh1QAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFIAABwQAAAQgMAAQgEAAgEgDg");
	this.shape_42.setTransform(87.8,357);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AARAnIgCgSIgBgRIAAgHIAAgHIABgDIAAgEQAAgHgEAAQgHAAgGAJQgHAKgEANIgBAHIAAAIIgBAHIAAAIQAAAFgEAEQgDACgFAAQgFAAgEgCQgDgEAAgFIAAgHIgBgIIABgWIABgXIAAgIIAAgIQAAgEADgDQAEgEAFAAQALAAABAOIAAABQAMgNANAAQAQAAAGAOQAEAJAAASIAAAGIAAAEQAAAHACAKIACARQAAAFgDAEQgEACgFAAQgKAAgCgKg");
	this.shape_43.setTransform(73.5,359.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AghAtQgCgEAAgEIAAg3IAAgIIAAgIQAAgFADgDQACgDAGAAQAJAAACAKQAOgMASAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIAAgJQgSADgJARIAAAqQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_44.setTransform(64.9,359.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AARAqQgLAEgKAAQgNAAgIgFQgJgGgCgLQgDgVAAgQQAAgLACgOQACgKAKAAQAFAAADADQAEAEAAAEIgBAMIgCAMIABAUQABAJACAGIAEABIAEABQAIAAALgDIAAgPIAAgNQAAgSACgMQABgLAKAAQAFAAAEAEQADADAAAEIgBAeIAAARIAAARIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_45.setTransform(55.9,359.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHA+QgEgDAAgFIAAgEIAAgEIAAgMIgBgMIgBgdIgDgfIgEAAQgTAAgLgDQgKgCAAgJQAAgFADgDQAEgEAGAAIANACIAOABIAPgBIAPAAIATABIAUABQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAIgVgBIgVgBIADAjIABAiIABAIIABAJQAAAGgDAFQgEAHgGAAQgEAAgDgDg");
	this.shape_46.setTransform(45.5,357.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHAZQgEgCAAgFIABgiQABgFADgDQADgDAEAAQAEAAAEADQADADAAAEIAAADIgBAEIgBAcQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_47.setTransform(353.1,325.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AADAbIgEgcIgCAEIgOAhQgBADgCACQgEAGgHAAQgEAAgEgHQgFgHgDgMIgIgtIgBgMQgBgFAEgDQAEgDAEAAQAKAAACAJIACAMIABAMIADAUIAPgqQADgLAJAAQAJAAAEANIAEAWIAFAXIAMgyQADgIAIAAQAFAAAEADQAEAEAAAEIgBADQgJAhgJAaQgCAIgGAIQgEAGgHAAQgLgBgGgUg");
	this.shape_48.setTransform(343.5,332.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgbAkQgMgMgBgUQgBgSALgOQANgSAWAAQARAAAKAOQAJAMAAASQAAATgKAOQgMAQgTAAQgQAAgLgLgAgLgOQgFAJAAAJQAAALAFAFQAFAEAGAAQAGAAAGgFQAGgGABgKQABgagQAAQgJAAgGAJg");
	this.shape_49.setTransform(332.8,332.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AggAtQgEgEAAgEIAAg3IAAgIIABgIQAAgFADgDQACgDAGAAQAKAAABAKQAOgMATAAQAQAAAAAXIAAAGQAAANgLAAQgLAAAAgLIAAgJQgTADgIARIAAAqQAAAFgDADQgDADgFAAQgGAAgCgDg");
	this.shape_50.setTransform(324.4,332.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AghAtQgDgEAAgEIAAg3IAAgIIABgIQAAgFADgDQACgDAGAAQAJAAACAKQAOgMASAAQARAAAAAXIAAAGQAAANgLAAQgLAAAAgLIAAgJQgSADgJARIAAAqQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_51.setTransform(316,332.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAeAwQgFgKgDgNIgVACIgTACIgOAdQgEAGgGAAQgFAAgEgDQgDgEAAgFQAAgEAMgZIgBgFQAAgEAIgCQAMgUAPgXQAUggAFAAQAKAAADALIAFAbIANA4IAEALQADAHAAAEQAAAFgDADQgEADgFAAQgGAAgHgQgAgGAIIALgBIAMgBIgGgcIgRAeg");
	this.shape_52.setTransform(305.1,330.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgiBFQgEgEAAgFIAAgfIAAghIgBggIgBgRQAAgHADgFQAEgGAGAAQAFABADADQADADAAAFIAAAAQAGgDAFgCQAFgBAGAAQAUAAAIARQAIAMgBAUQABASgMAMQgLANgTAAIgOgCIAAAjQgBAFgDAEQgDACgFAAQgFAAgDgCgAgEgoQgFACgGAGIABAiQAIACAGABQAJgBAEgFQAFgGAAgJIgBgQQgDgLgIABQgGAAgEACg");
	this.shape_53.setTransform(286.8,334.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AghA6QgXgRAAgqIAAgMIABgMIAAgKIAAgKQAAgHADgGQADgHAGAAQAFAAAEACQADAEABAFIgBAOIAAAPIAAAMIgBAMQAAAMADALQAEANAGAFQAFADANAAQAVABAIgnQAEgTAAgkQAAgFADgFQAEgFAHAAQAGAAADAEQACADAAAEQAAAhgEATQgEAcgOAUQgHAIgIAGQgLAGgKAAQgWAAgKgIg");
	this.shape_54.setTransform(275.4,330.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgHAZQgEgCAAgFIABgiQABgFADgDQADgDAEAAQAEAAAEADQADADAAAEIAAADIgBAEIgBAcQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_55.setTransform(265.2,325.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAIAeIgQAAIgIAAIgHABQgFAAgDgDQgEgDAAgEQAAgJALgBIAQgBIAQABIARAAQAEAAADADQAEACAAAFQAAAEgEADQgDADgEAAIgRgBgAgYgKQgFAAgDgDQgDgCAAgFQAAgKARAAIADAAIACAAIAmAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAIgmAAIgGAAIgFAAg");
	this.shape_56.setTransform(248.6,331);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgjBFQgDgEAAgFIAAgfIAAghIgBggIgCgRQAAgHAEgFQADgGAHAAQAFABADADQADADAAAFIAAAAQAGgDAFgCQAFgBAGAAQAUAAAJARQAGAMABAUQAAASgMAMQgLANgTAAIgPgCIAAAjQABAFgEAEQgDACgFAAQgGAAgDgCgAgEgoQgGACgFAGIABAiQAHACAHABQAJgBAEgFQAFgGAAgJIgBgQQgCgLgJABQgGAAgEACg");
	this.shape_57.setTransform(231.3,334.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AARAqQgLAEgKAAQgNAAgIgFQgJgGgCgLQgDgVAAgQQAAgLACgOQACgKAKAAQAFAAADADQAEAEAAAEIgBAMIgCAMIABAUQABAJACAGIAEABIAEABQAIAAALgDIAAgPIAAgNQAAgSACgMQABgLAKAAQAFAAAEAEQADADAAAEIgBAeIAAARIAAARIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_58.setTransform(221.9,332.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AggAtQgDgEAAgEIAAg3IAAgIIAAgIQAAgFADgDQADgDAFAAQAKAAABAKQAOgMATAAQAQAAABAXIAAAGQgBANgLAAQgLAAAAgLIgBgJQgSADgIARIAAAqQAAAFgDADQgEADgEAAQgGAAgCgDg");
	this.shape_59.setTransform(205.9,332.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgcAlQgPgLAAgUQAAgUAMgPQANgQAUgBQAPAAAKAFQANAHgBANQAAAJgKAHQgFAEgOAFIgcANQAEAEAGACQAGACAGAAQAMABAHgFQAIgEAEAAQAJAAAAAIQAAAKgPAGQgMAGgNAAQgTgBgNgJgAgKgUQgHAGgCAKIATgIIARgKQgGgDgJAAQgHAAgFAFg");
	this.shape_60.setTransform(196.5,332.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgMAmIgchEIgBgFQAAgEADgEQAFgDAEAAQAHAAADAHQAGAKANAlIAMgcIAIgSQADgHAHAAQAEAAAFADQADADAAAFQAAADgNAfIgSAlQgBAEgDADQgDADgEAAQgIAAgEgJg");
	this.shape_61.setTransform(187.7,332.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgcAlQgPgLAAgUQAAgUAMgPQAMgQAVgBQAOAAAKAFQANAHAAANQABAJgLAHQgFAEgPAFIgbANQAEAEAGACQAFACAHAAQALABAJgFQAGgEAFAAQAJAAAAAIQgBAKgOAGQgMAGgNAAQgTgBgNgJgAgKgUQgHAGgCAKIATgIIARgKQgGgDgJAAQgHAAgFAFg");
	this.shape_62.setTransform(178.3,332.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgIBDQgDgDAAgFIAAh1QAAgFAEgDQADgDAEAAQAFAAADADQAEADAAAFIAABwQAAAQgMAAQgEAAgEgDg");
	this.shape_63.setTransform(171,329.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgdAIQgEgDAAgFQAAgDAEgEQAFgCAEAAIAUgBIAUAAQAGAAAEACQAEADAAAFQAAAJgNABIgpAAQgEAAgFgCg");
	this.shape_64.setTransform(155.8,331.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgHA7QgDgDAAgEIAAgKIAAgJIgBgrIgQgBQgLgBAAgKQAAgFADgDQADgEAFAAIAPABIAAgJIgBgIQAAgFAEgDQADgDAFAAQAMAAAAAVIAAAHIAIgBIAOABQAGADAAAIQAAAFgDADQgDADgFAAIgFAAIgEAAIgIABIACAsIAAAEIAAAFQAAATgNAAQgDAAgEgDg");
	this.shape_65.setTransform(138.9,330.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAUA+IgEgTQgCgMAAgIIABgGIAAgHIAAgHQgBgEgEAAQgJAAgHAIQgEAEgHANQAAAegDAHQgDAGgHABQgFgBgEgDQgDgDAAgFIABgEIABgXIAAg4IAAgDIABgOIgBgHIgBgIQAAgFADgDQAEgDAFAAQAIAAADAJQACAFAAALIgBARIAAARQAGgHAHgCQAGgEAIAAQAPABAGAHQAFAHABALIABAWIACAQIADAQIAAAEQAAAFgEADQgDADgFAAQgJAAgCgJg");
	this.shape_66.setTransform(129.9,329.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgrA3QAAgFADgDQADgDAFAAIALACIANABQALAAAHgIQAFgHABgRQgEAFgFACQgGACgGAAQgRAAgKgLQgLgLAAgQQAAgXAPgPQAOgPAYAAQAIAAAGACQAFACAEAEQALACAAALIgCAQQgDAUgBAVQgBAcgJAMQgLARgbAAQghAAAAgNgAgNgmQgGAJAAAOQAAAKADAFQAEAEAIAAQAGAAAHgHQAHgIABgHIADgaIgGgCIgFgBQgNAAgJAJg");
	this.shape_67.setTransform(120,334.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKA+QgDgEAAgFIgBgPIAAgPIABgTIABgSQAAgGADgCQADgEAGAAQAEAAADAEQADACAAAGIgBASIAAATIAAAPIAAAPQAAAFgDAEQgDADgFAAQgFAAgDgDgAgHgqQgEgFAAgEQAAgGAEgDQAEgEAEAAQAGAAAEAEQAEADAAAGQAAAEgEAFQgEADgGAAQgEAAgEgDg");
	this.shape_68.setTransform(113.3,330.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AghAtQgCgEAAgEIAAg3IAAgIIAAgIQAAgFADgDQACgDAGAAQAJAAACAKQAOgMASAAQARAAABAXIAAAGQgBANgLAAQgLAAAAgLIgBgJQgRADgJARIAAAqQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_69.setTransform(106.6,332.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AARAnIgCgRIgBgSIAAgHIAAgHIABgDIAAgEQAAgIgEABQgHAAgGAJQgHAKgEANIgBAHIAAAIIgBAIIAAAHQAAAFgEAEQgDACgFAAQgFAAgEgCQgDgEAAgFIAAgHIgBgIIABgWIABgXIAAgIIAAgIQAAgEADgEQAEgDAFAAQALABABANIAAABQAMgNANAAQAQAAAGAOQAEAIAAATIAAAGIAAAEQAAAHACALIACARQAAAEgDAEQgEACgFAAQgKAAgCgKg");
	this.shape_70.setTransform(90.2,332.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AggAtQgDgEAAgEIAAg3IAAgIIAAgIQAAgFADgDQADgDAFAAQAJAAACAKQAOgMATAAQARAAAAAXIAAAGQgBANgLAAQgLAAAAgLIgBgJQgSADgIARIAAAqQAAAFgDADQgEADgEAAQgGAAgCgDg");
	this.shape_71.setTransform(81.6,332.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AARAqQgLAEgKAAQgNAAgIgFQgJgGgCgLQgDgVAAgQQAAgLACgOQACgKAKAAQAFAAADADQAEAEAAAEIgBAMIgCAMIABAUQABAJACAGIAEABIAEABQAIAAALgDIAAgPIAAgNQAAgSACgMQABgLAKAAQAFAAAEAEQADADAAAEIgBAeIAAARIAAARIAAAFIAAAGQAAAEgDAEQgEADgFAAQgHAAgDgHg");
	this.shape_72.setTransform(72.7,332.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgHA+QgEgDAAgFIAAgEIAAgEIAAgMIgBgMIgBgdIgDgfIgEAAQgTAAgLgDQgKgCAAgJQAAgFADgDQAEgEAGAAIANACIAOABIAPgBIAPAAIATABIAUABQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAIgVgBIgVgBIADAjIABAiIABAIIABAJQAAAGgDAFQgEAHgGAAQgEAAgDgDg");
	this.shape_73.setTransform(62.2,330);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// lever
	this.lever = new lib.lever();
	this.lever.name = "lever";
	this.lever.parent = this;
	this.lever.setTransform(240.5,498.8,0.492,0.492,0,0,0,0,0.6);

	this.timeline.addTween(cjs.Tween.get(this.lever).wait(1));

	// hazzard
	this.hazzardLight = new lib.hazzard();
	this.hazzardLight.name = "hazzardLight";
	this.hazzardLight.parent = this;
	this.hazzardLight.setTransform(581.2,497.7,0.749,0.749,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.hazzardLight).wait(1));

	// hazzardIdle
	this.instance = new lib.hazzardIdle();
	this.instance.parent = this;
	this.instance.setTransform(581.2,497.7,0.749,0.749,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// lights
	this.rightLight = new lib.light();
	this.rightLight.name = "rightLight";
	this.rightLight.parent = this;
	this.rightLight.setTransform(473.3,94.6,0.452,0.452,180,0,0,1.8,0.7);

	this.leftLight = new lib.light();
	this.leftLight.name = "leftLight";
	this.leftLight.parent = this;
	this.leftLight.setTransform(326.7,94.9,0.452,0.452,0,0,0,1.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.leftLight},{t:this.rightLight}]}).wait(1));

	// dashboard
	this.instance_1 = new lib.dashboard_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,193.6,0.853,0.853,0,0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,294.5,800,558);
// library properties:
lib.properties = {
	id: '0C03371ED3A21844B6A28F87917BDD37',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dashboard_atlas_.png?1533177844562", id:"dashboard_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0C03371ED3A21844B6A28F87917BDD37'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;