console.log('start');
var body = document.querySelector('body');
var bodyColor = window.getComputedStyle(body).backgroundColor;
    console.log(bodyColor);

var basketChangeColor = document.querySelector(('.basket'), ':after'
);
console.log(basketChangeColor);
basketChangeColor.style.boxShadow = 'inset 0px -2px ' + bodyColor + ', inset 0px -5px #161918, inset 0px -9px' + bodyColor + ';';