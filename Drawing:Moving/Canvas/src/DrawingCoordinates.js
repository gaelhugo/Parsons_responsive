// JavaScript Document
var canvas = document.getElementById('canvas');
var width;
var height;
canvas.width = width =  window.innerWidth;
canvas.height = height = window.innerHeight;
var ctx = canvas.getContext('2d'); // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D


var SVGPoints = "636.5,256.6 648.2,248.1 637,232.6 647.9,222.7 634.9,208.3 644.9,197.3 630.4,184.2 639.2,171.9 623.3,160.3 631,147 613.7,137.1 620.1,122.8 601.8,114.7 606.7,99.6 587.6,93.4 591,77.5 571.3,73.3 573,56.9 553,54.8 553,38 532.9,38 531.1,21 518.7,22.3 501.2,-17.1 483.1,-9.1 474,-25 457,-15.2 456.2,-17.1 455.8,-16.9 446.1,-30.2 431.9,-19.9 429,-25 426.3,-23.4 417.7,-32.9 406.5,-22.8 401.1,-30.2 396.2,-26.7 389.3,-32.9 381,-23.7 372.7,-32.9 365.8,-26.7 360.9,-30.2 358.5,-26.9 356.1,-30.2 351.2,-26.7 344.3,-32.9 336,-23.7 327.7,-32.9 320.8,-26.7 315.9,-30.2 313.5,-26.9 311.1,-30.2 306.2,-26.7 299.3,-32.9 291,-23.7 282.7,-32.9 275.8,-26.7 270.9,-30.2 268.5,-26.9 266.1,-30.2 261.2,-26.7 254.3,-32.9 246,-23.7 237.7,-32.9 230.8,-26.7 225.9,-30.2 220.5,-22.8 209.3,-32.9 200.7,-23.4 198,-25 195.1,-19.9 180.9,-30.2 171.2,-16.9 170.8,-17.1 170,-15.2 153,-25 143.9,-9.1 125.8,-17.1 118.5,-0.6 99.6,-6.7 94.1,10.2 74.5,6 70.9,23.1 50.9,21 49.1,38 29,38 29,96.7 20.3,99.6 25.2,114.7 6.9,122.8 13.3,137.1 -4,147 3.7,160.3 -12.2,171.9 -3.4,184.2 -17.9,197.3 -7.9,208.3 -20.9,222.7 -10,232.6 -21.2,248.1 -9.5,256.6 -19,273 -6.5,280.1 -14.1,297.2 -1.1,303 -6.7,320.4 6.8,324.8 3,342.5 16.8,345.4 15,363.1 29,364.6 29,382 74,382 88.1,382 89.9,399 104,397.6 107.5,414 121.5,411 123.3,416.8 114,431 522,607 462,439.7 466.9,431.2 480.2,437.1 486.8,422.3 500.4,426.7 505.5,411 519.5,414 523,397.6 537.1,399 538.9,382 553,382 553,364.6 567,363.1 565.2,345.4 579,342.5 575.6,326.3 641.1,297.2 633.5,280.1 646,273";

//getting all coordinates x,y
var XYcoordinates = SVGPoints.split(" ");


//we want to create a PATH
ctx.beginPath();
//loop
for(var i = 0; i<XYcoordinates.length;i++){
	//drawlines
	//split the coordinate to have x and y position
	var XY = XYcoordinates[i].split(",");
	var x = XY[0];
	var y = XY[1];
	//we need to move to the first point
	if(i==0){
		ctx.moveTo(x,y);	
	}else{
		ctx.lineTo(x,y);
		}
	
}
ctx.closePath();
//choosing a color and aplying it to the path
ctx.strokeStyle = 'black';
ctx.stroke();

