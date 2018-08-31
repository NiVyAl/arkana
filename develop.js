var allDiv = document.querySelectorAll('div');
console.log(allDiv);

for (var i = 0; i < allDiv.length; i++) {
    var title = document.createElement('div');
    var display = window.getComputedStyle(allDiv[i]).display
    title.classList.add('title-js');
    allDiv[i].appendChild(title);
    title.innerHTML = '<div>' + display;
    
    if (display == 'flex') {
        allDiv[i].style.outline = '1px solid blue';
        title.style.backgroundColor = 'blue';
    }
    else {
        allDiv[i].style.outline = '1px solid green';
    }
    
}