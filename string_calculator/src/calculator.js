function Calculator() {
	
}

Calculator.prototype = {

	add: function(str) {
		var parts = str.split(",");
		var sum = 0;

		for (var i = 0; i < parts.length; i++) {
			var num = +parts[i];
			sum += num;
		}

		return sum;
	}
}