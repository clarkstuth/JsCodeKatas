var expect = chai.expect;

describe("Calculator", function() {

	var calc = null;

	before(function() {
		calc = new Calculator();
	})

	describe("Add", function() {

		it("should return 2 when given 1,1", function() {
			var string = "1,1";
			expect(calc.add(string)).to.equal(2);
		})

		it("should return 3 when given 1,2", function() {
			var string = "1,2";
			expect(calc.add(string)).to.equal(3);
		})

		it("should return 4 when given 2,2", function() {
			var string = "2,2";
			expect(calc.add(string)).to.equal(4);
		})

	})
})