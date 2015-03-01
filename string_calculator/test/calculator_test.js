var expect = chai.expect;

describe("Calculator", function() {
	describe("Add", function() {
		it("should return 2 when given 1+1", function() {
			var calculator = new Calculator();

			var string = "1+1";

			expect(calculator.add(string)).to.equal(2);
		});
	});
});