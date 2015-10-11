"use strict";

VS.ToolDefault = function(vs) {
	var nodeDrag = null;
	var lastItemMouseUp = null;
	var lastTimeMouseUp = Date.now();
	var tool = new paper.Tool();
	
	tool.onMouseDown = function(event) {
		nodeDrag = event.item;
	}

	tool.onMouseDrag = function(event) {
		if (nodeDrag) {
			nodeDrag.translate(event.delta);
		}
	}
	
	var isDoubleClick = function(event) {
		if (event.item === null && lastItemMouseUp === null) {
			if (event.delta.x < 5 && event.delta.y < 5) {
				if (Date.now() - lastTimeMouseUp < 300) {
					return true;
				}
			}
		}
		return false;
	}

	tool.onMouseUp = function(event) {
		nodeDrag = null;
		if (isDoubleClick(event)) {
			vs.place('rect', event.point);	
		}
		lastItemMouseUp = event.item;
		lastTimeMouseUp = Date.now();
	}

	tool.onMouseMove = function(event) {
		
	}
	return tool;
};