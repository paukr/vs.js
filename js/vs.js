function VS(canvas) {
	paper.setup(canvas);
	var nodes = {};
	
	(function test() {
		var rectangle = new paper.Rectangle(new paper.Point(50, 50), new paper.Point(150, 100));
		var path = new paper.Path.Rectangle(rectangle);
		path.fillColor = '#e9e9ff';
		
		nodes[1] = path;
	}());
	paper.view.draw();
	
	(function tool() {
		var tool = new paper.Tool();
		var nodeMouseOver = null;
		var nodeMouseDown = null;
		tool.onMouseDown = function(event) {
			nodeMouseDown = event.item;
		}
		
		tool.onMouseDrag = function(event) {
			if (nodeMouseDown) {
				nodeMouseDown.translate(event.delta);
			}
		}
		
		tool.onMouseUp = function(event) {
			nodeMouseDown = null;
		}
		
		tool.onMouseMove = function(event) {
			if (nodeMouseOver) {
				nodeMouseOver.strokeColor = 'white';
				nodeMouseOver = null;
			}
			if (event.item) {
				nodeMouseOver = event.item;
				nodeMouseOver.strokeColor = 'black';
			}
		}
	}());
}

