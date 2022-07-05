
// Showing hidden information in the <article>
document.getElementById('more1').onclick = function(){
    document.getElementById('feminist').style.display = 'inline-block'
};

document.getElementById('more1').ondblclick = function(){
    document.getElementById('feminist').style.display = ''
};

document.getElementById('more2').onclick = function(){
    document.getElementById('belarus').style.display = 'inline-block'
};

document.getElementById('more2').ondblclick = function(){
    document.getElementById('belarus').style.display = ''
};
// The section with Projects
document.getElementById('change').onclick = function(){
    document.getElementById('change').style.transform = 'rotate(180deg)'
    document.getElementById('new').innerHTML = 'The portfolio is loading step by step';
    let tryIT = document.getElementById('new');
    tryIT.style.color = '#F8CB2E';
    tryIT.style.backgroundColor = '#006E7F';
    tryIT.style.transition = 'all 3s linear';
    tryIT.style.textShadow = '5px 5px 10px #B22727';
};

document.getElementById('change').ondblclick = function(){
    document.getElementById('change').style.transform = ''
};
//My skills

document.getElementById('html').onmousedown = function(){
    document.getElementById('html-text').innerHTML = 'HTML';
};

document.getElementById('css').onmousedown = function(){
    document.getElementById('css-text').innerHTML = 'CSS';
};

document.getElementById('js').onmousedown = function(){
    document.getElementById('js-text').innerHTML = 'Javascript';
};

document.getElementById('Bt').onmousedown = function(){
    document.getElementById('Bt-text').innerHTML = 'Bootstrap 5';
};

document.getElementById('GH').onmousedown = function(){
    document.getElementById('GH-text').innerHTML = 'Git Hub';
};
