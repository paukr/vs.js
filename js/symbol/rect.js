"use strict";

function rect() {
	var rectangle = new paper.Rectangle(new paper.Point(50, 50), new paper.Point(150, 100));
	var path = new paper.Path.Rectangle(rectangle);
	path.fillColor = '#e9e9ff';
	var symbol = new paper.Symbol(path);
	path.remove();
	return symbol;
}