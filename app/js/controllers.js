var ecommerceApp = angular.module('ecommerceApp', []);

ecommerceApp.controller('ProductListCtrl', function ($scope) {
    $scope.products = products
});


var products = [
    {
        'id': '10001',
        'name': 'Swiss gray denim uniform pants',
        'author': 'Andrew Toskin',
        'image': '1_pants_1.jpg',
        'attrib_link': 'https://flic.kr/p/pEmDvf',
        'price': '$86.99'
    },
    {
        'id': '10002',
        'name': 'Polka dot pants',
        'author': 'Quinn Dombrowski',
        'image': '2_pants_2.jpg',
        'attrib_link': 'https://flic.kr/p/kDsqfb',
        'price': '$65'
    },
    {
        'id': '10003',
        'name': 'Blue Pants',
        'author': 'Robert Sheie(Menswear Market)',
        'image': '3_pants_3.jpg',
        'attrib_link': 'http://www.menswear-market.com/',
        'price': '$85'
    },
    {
        'id': '10004',
        'name': 'Jeans Shrink to fit',
        'author': 'Michael Carian',
        'image': '4_pants_4.jpg',
        'attrib_link':'https://flic.kr/p/ayJGvJ',
        'price': '$85'
    },
    {
        'id': '20001',
        'name': 'Plain White Shirt',
        'author': 'Gregg Tavares',
        'image': '5_shirt_1.jpg',
        'attrib_link': 'https://flic.kr/p/fiadrG',
        'price': '$130'
    },
    {
        'id': '20002',
        'name': 'Black Dress Shirt',
        'author': 'Gregg Tavares',
        'image': '6_shirt_2.jpg',
        'attrib_link':'https://flic.kr/p/fhVr9V',
        'price': '$23'
    },
    {
        'id': '20003',
        'name': 'Gray Dress Shirt',
        'author': 'Gregg Tavares',
        'image': '7_shirt_3.jpg',
        'attrib_link':'https://flic.kr/p/fhVs1V',
        'price': '$47'
    },
    {
        'id': '30001',
        'name': 'Plaid Jacket',
        'author': 'Kelly',
        'image': '8_jacket_1.jpg',
        'attrib_link': 'https://flic.kr/p/dfhGdy',
        'price': '$66'
    },
    {
        'id': '30002',
        'name': 'Denim Jacket',
        'author': 'Heather',
        'image': '9_jacket_2.jpg',
        'attrib_link': 'https://flic.kr/p/ofw56b',
        'price': '$186'
    }
];