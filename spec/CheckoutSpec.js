describe("Checkout", function() {
	var checkout;
	var product;

	beforeEach(function(){

		checkout = new Checkout;
		var product = new Product("Almond Toe Court Shoes, Patent Black", "Women’s Footwear", 99.0, 5);

	});

	describe("empty basket", function(){

		it("should have an empty basket when created", function(){
			expect(checkout.basket.length).toEqual(0)
		});

	});

	describe("adding a product to the basket", function(){

		it("should allow the user to add a product to the basket", function(){
			checkout.addProduct()
			expect(checkout.basket[]).toEqual(0)
		});

	});

});