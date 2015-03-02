function Calculator() {
	
}

Calculator.prototype = {

	add: function(str) {
		var regex = /[,\n]/;
		var parts = str.split(regex);

		var sum = 0;
		for (var i = 0; i < parts.length; i++) {
			var num = +parts[i];
			sum += num;
		}

		return sum;
	}
}