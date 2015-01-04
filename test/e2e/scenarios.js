describe('Product List App', function() {

    describe('Product list view', function() {

        beforeEach(function() {
            browser.get('index.html');
        });


        it('should filter the product list as a user types into the search box', function() {

            var productList = element.all(by.repeater('product in products'));
            var query = element(by.model('query'));

            expect(productList.count()).toBe(9);

            query.sendKeys('pants');
            expect(productList.count()).toBe(4);

            query.clear();
            query.sendKeys('shirt');
            expect(productList.count()).toBe(3);
        });
    });
});