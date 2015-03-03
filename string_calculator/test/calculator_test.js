var expect = chai.expect;

describe("Calculator", function() {

	var calc = null;

	before(function() {
		calc = new Calculator();
	})

	describe("Add", function() {

		it("should return 0 given \"\"", function() {
			var string = "";
			expect(calc.add(string)).to.equal(0);
		})

		it("should return 1 given \"1\"", function() {
			var string = "1";
			expect(calc.add(string)).to.equal(1);
		})

		it("should return 1 given \"7,\"", function() {
			var string = "7,";
			expect(calc.add(string)).to.equal(7);
		})

		it("should return 2 when given \"1,1\"", function() {
			var string = "1,1";
			expect(calc.add(string)).to.equal(2);
		})

		it("should return 3 when given \"1,2\"", function() {
			var string = "1,2";
			expect(calc.add(string)).to.equal(3);
		})

		it("should return 4 when given \"2,2\"", function() {
			var string = "2,2";
			expect(calc.add(string)).to.equal(4);
		})

		it("should return 12 when given \"4,4,4\"", function() {
			var string = "4,4,4";
			expect(calc.add(string)).to.equal(12);
		})

		it("should return 20 when given \"5,5,5,5\"", function() {
			var string = "5,5,5,5";
			expect(calc.add(string)).to.equal(20);
		})

		it("should return 50 when given \"5,5,5,5,5,5,5,5,5,5\"", function() {
			var string = "5,5,5,5,5,5,5,5,5,5";
			expect(calc.add(string)).to.equal(50);
		})

		it("should return 5 when given \"2\\n3\"", function() {
			var string = "2\n3";
			expect(calc.add(string)).to.equal(5);
		})

		it("should return 12 when given \"5\\n5\\n2\"", function() {
			var string = "5\n5\n2";
			expect(calc.add(string)).to.equal(12);
		})

		it("should return 21 when given \"7,10\n4\"", function() {
			var string = "7,10\n4";
			expect(calc.add(string)).to.equal(21);
		})

		it("should return 11 when given delimiter \"//p\\n5p2p4\"", function() {
			var string = "//p\n5p2p4";
			expect(calc.add(string)).to.equal(11);
		})

		it("should return 52 when given delimiter \"//;,ze\\n10z15;12e3,12\"", function() {
			var string = "//;,ze\n10z15;12e3,12";
			expect(calc.add(string)).to.equal(52);
		})

		it("should throw an exception if given \"-2\"", function() {
			var string = "-2";
			expect(calc.add.bind(calc, string)).to.throw(RangeError, /negatives not allowed/);
		})

		it("should throw an exception if given \"1,2,-199\"", function() {
			var string = "1,2,-199";
			expect(calc.add.bind(calc, string)).to.throw(RangeError, /negatives not allowed/);
		})

		it("should throw an exception if given \"//c;\n1;9c-16\"", function() {
			var string = "//c;\n1;9c-16";
			expect(calc.add.bind(calc, string)).to.throw(RangeError, /negatives not allowed/);
		})

		it("should return 2 if given \"2,1001\"", function() {
			var string = "2,1001";
			expect(calc.add(string)).to.equal(2);
		})

		it("should return 52 if given \"//;q\n19999q49;3\"", function() {
			var string = "//;q\n19999q49;3";
			expect(calc.add(string)).to.equal(52);
		})

		it("should return 1 if given \"1001,1002,1,10000000000\"", function() {
			var string = "1001,1002,1,10000000000";
			expect(calc.add(string)).to.equal(1);
		})

	})
})