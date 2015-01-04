describe('ProductListCtrl', function(){

    beforeEach(module('ecommerceApp'));

    it('should create "Products" model with 9 products', inject(function($controller) {
        var scope = {},
            ctrl = $controller('ProductListCtrl', {$scope:scope});

        expect(scope.products.length).toBe(9);
    }));

});