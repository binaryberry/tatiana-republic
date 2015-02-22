describe("Checkout", function() {
	var checkout;
	
	beforeEach(function(){

		checkout = new Checkout;

	});

	describe("name", function(){

		it("should have an empty basket when created", function(){
			expect(checkout.basket.length).toEqual(0)
		});

	});

});