console.log('start');

/* изменяю задний фон корзины
var body = document.querySelector('body');
var bodyColor = window.getComputedStyle(body).backgroundColor;
    console.log(bodyColor);

var basketChangeColor = document.querySelector(('.basket'), ':after'
);
console.log(basketChangeColor);
basketChangeColor.style.boxShadow = 'inset 0px -2px ' + bodyColor + ', inset 0px -5px #161918, inset 0px -9px' + bodyColor + ';';

*/

var style = document.querySelectorAll('style');

var allPriceContainer = document.querySelectorAll('.price');
var allPrice = document.querySelectorAll('.price span');
var allProducts = document.querySelectorAll('.products li');
//var imageContainer = document.querySelectorAll('.img-container');

for (var i=0; i < allPrice.length; i++){
    if (allProducts[i].classList.contains('discount')) {
        allPriceContainer[i].classList.add('price-discount');
    };
    var discount = allProducts[i].dataset.discount;
    if (discount) {
        console.log(discount);
        var lastPrice = allPrice[i].innerHTML / ((100-discount)/100);
        console.log(lastPrice);
        
        allPrice[i].classList.add('last-price-' + i);
        style.innerHTML = '.last-price-' + i + '{content: "$' + lastPrice + '" !important;}';
    }
}