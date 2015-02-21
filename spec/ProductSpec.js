describe("Product", function() {
	var product;
	
	beforeEach(function(){

		product = new Product("Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99.0, 5);

	});

	describe("name", function(){

		it("should know its name", function(){
			expect(product.name).toEqual("Almond Toe Court Shoes, Patent Black");
		});

	});

	describe("category", function(){

		it("should know its category", function(){
			expect(product.category).toEqual("Women’s Footwear");
		});

	});

	describe("price", function(){

		it("should know its price", function(){
			expect(product.price).toEqual(99.0);
		});

	});

	describe("stock", function(){

		it("should know its stock", function(){
			expect(product.stock).toEqual(5);
		});

	});

})