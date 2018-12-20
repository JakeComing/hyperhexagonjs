class Hexagon {
	constructor(hexagonTopType, hexagonSideLength) {
		this.hexagonTopType = hexagonTopType;
		this.hexagonSideLength = hexagonSideLength;
	}

	get hexagonType() {
		return this._hexagonType;
	}
	set hexagonTopType(value) {
		if (value !== ("pointy" || "flat") ) {
			alert('invalid hexagon type selected, please specify pointy top or flat top');
		}
		this._hexagonTopType = value;
	}
	calculateHexagonPoints(topType, sideLength) {
		if(topType === "pointy") {
			var height = sideLength * 2;
			var width = sideLength * Math.sqrt(3);
			var halfWidth = width / 2;
			var quarterHeight = height / 4;
			var halfHeight = height / 2;
			var threeQuartersHeight = height * 0.75;
			var pointsArray = [
				[halfWidth, 0],
				[width, quarterHeight],
				[width, threeQuartersHeight],
				[halfWidth, height],
				[0, threeQuartersHeight],
				[0, quarterHeight]
			];
		} else if(topType === "flat") {
			var height = sideLength * Math.sqrt(3);
			var width = sideLength * 2
			var halfHeight = height / 2;
			var quarterWidth = width / 4;
			var halfWidth = width / 2;
			var threeQuartersWidth = (width * 3) / 4;
			var pointsArray = [
				[quarterWidth, 0],
				[threeQuartersWidth, 0],
				[width, halfHeight],
				[threeQuartersWidth, height],
				[quarterWidth, height],
				[0, halfHeight]
			];
		} else {
			var pointsArray = "Something went wrong"
		}
		var pointsString = '';
		for (var i=0;i<6;i++) {
			for (var j=0;j<2;j++) {
				pointsString += Math.round(pointsArray[i][j]);
				if(j===0) {
					pointsString += ',';
				} else {
					pointsString += ' ';
				}
			}
		}
		$('#first-hex').attr("points", pointsString);
		return pointsString;
	}
}

let hexagon = new Hexagon("pointy", 200); 
// hexagon.logHexagonDetails();