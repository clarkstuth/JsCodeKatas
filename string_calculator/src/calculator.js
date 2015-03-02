function Calculator(delimiters) {
	if (typeof delimiters == "undefined")
		delimiters = ",\n";

	this.delimiters = delimiters;
}

Calculator.prototype = {

	add: function(str) {
		var re = "[" + this.delimiters + "]";
		var regex = new RegExp(re);
		var parts = str.split(regex);

		var sum = parts.reduce(function(prev, cur, index, arr) {
			return prev + +cur;
		}, 0);

		return sum;
	}
}