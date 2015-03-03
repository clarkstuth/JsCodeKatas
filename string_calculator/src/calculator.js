function Calculator() {
	this.default_regex = "[,\n]";

	this.reduceSumStringParts = function(previous, current, index, array) {
		var val = +current;

		if (val < 0) {
			throw new RangeError("negatives not allowed");
		}

		if (current > 1000) {
			return previous;
		}

		return previous + val;
	}

}

Calculator.prototype = {

	add: function(str) {

		var regex;

		if (str.indexOf("//") == 0) {
			var separationRegex = new RegExp("^\/\/(.*)\n(.*)$");
			var strParts = str.match(separationRegex);

			regex = new RegExp("[" + strParts[1] + "]");
			str = strParts[2];
		}
		else {
			regex = new RegExp(this.default_regex);
		}

		var parts = str.split(regex);

		var sum = parts.reduce(this.reduceSumStringParts, 0);

		return sum;
	}
}