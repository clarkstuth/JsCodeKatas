function Calculator(delimiters) {
	if (typeof delimiters == "undefined")
		delimiters = ",\n";

	this.delimiters = delimiters;
}

Calculator.prototype = {

	add: function(str) {
		var re = "[" + String(this.delimiters) + "]";
		var regex = new RegExp(re);
		var parts = str.split(regex);

		var sum = 0;
		for (var i = 0; i < parts.length; i++) {
			var num = +parts[i];
			sum += num;
		}

		return sum;
	}
}