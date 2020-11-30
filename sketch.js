var view;
var mousePoint = view.center;
var amount = 125;
var colors = ['red', 'yellow', 'green', 'blue', 'black', 'white'];

for (var i = 0; i < amount; i++) {
	var rect = new Rectangle([0, 0], [10, 30]);
	rect.center = mousePoint;
	var path = new Path.Rectangle(rect, 6);

	/* Each rectangle represent a color in order and repeat */
	path.fillColor = colors[i % 6]
	var scale = (1 - i / amount) * 30;
	path.scale(scale);
}

function onMouseMove(event) {
	mousePoint = event.point;
}

var children = project.activeLayer.children;
function onFrame(event) {
	for (var i = 0, l = children.length; i < l; i++) {
		var item = children[i];
		
		/* Lag of the last rectangle following the mouse pointer */
		var delta = (mousePoint - item.position) / (i + 1);
		
		/* 1st number: how far it rotates. 2nd number: speed */
		item.rotate(Math.sin((event.count + i) / 100) * 2);
		
		/* Distance from pointer in any direction. Bigger number = Longer distance*/
		if (delta.length > 0.1)
			item.position += delta;
	}
}