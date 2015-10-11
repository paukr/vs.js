"use strict";

var VS = function(canvas) {
	var myPaper = paper.setup(canvas);
	this.getPaper = function() {
		return myPaper;
	}
	
	this.initSymbols = function() {
		return {
			'rect' : rect(),
		}
	};
	var symbols = this.initSymbols();
		
	this.place = function(symbolKey, position) {
		if (symbols.hasOwnProperty(symbolKey) === false) {
			throw Error("key not found");
		}
		var item = symbols[symbolKey].place(position);
		var group = new VS.Group(item);
		group.resetBorder(true);
	};
	
	var nodes = Object.create(null);
	var lastKey = 0;
	
	var toolDefault = new VS.ToolDefault(this);
};

VS.Group = function(item) {
	var color = 'black';
	var border = new paper.Path.Rectangle(0, 0, 1, 1);
	border.strokeColor = color;
	var group = new paper.Group(item, border);
	group.onMouseEnter = function(event) {
		border.strokeColor = color;
	};
	group.onMouseLeave = function(event) {
		border.strokeColor = undefined;
	};
		
	group.resetBorder = function(mouseEntered) {
		border.remove();
		var rect = this.strokeBounds;
		rect = rect.expand(border.strokeWidth * 2);
		border = new paper.Path.Rectangle(rect);
		this.addChild(border);
		mouseEntered && this.onMouseEnter();
	};
	return group;
}
