describe("Product", function() {
	var product;
	
	beforeEach(function(){

		product = new Product("Almond Toe Court Shoes, Patent Black");

	});

	describe("name", function(){

		it("should know its name", function(){
			expect(product.name).toEqual("Almond Toe Court Shoes, Patent Black");
		});

	});


})