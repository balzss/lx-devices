function shift(x){
    var b = document.getElementsByClassName('menuBtn');
    for (var i = 0; i < b.length; i++)
        b[i].classList.remove('active');
    b[x].classList.add('active');
    var container = document.getElementById('container');
    container.style.marginLeft = '-' + x + '00%';
}
    
