// zadania 1.2 zadanie 1
var title = document.querySelector('.title');

function getDataAnimation(element) {
  var animacja = element.getAttribute('data-animation');
  return animacja;
};

getDataAnimation(title);

// zadania 1.2 zadanie 2
var a = document.querySelector('#home');
var b = document.getElementById('home');

var blok = document.querySelector('.block');

var li = document.querySelector('li[data-direction]');



// zadania 1.2 zadanie 3
var nav = document.querySelector('nav');
var wszystkieli = nav.querySelectorAll('li');

var divy = document.querySelectorAll('div');
var paragrafy = [];
divy.forEach((div, i) => {
  if (div.querySelectorAll('p').length > 0) {
    paragrafy.push(div.querySelectorAll('p'));
  };
});

// zadania 1.2 zadanie 4
var h1 = document.querySelector('article[class="first"]');

console.log('W artykule jest - ' + first.querySelectorAll('h1').length + ' elementów h1.');

// zadania 1.3 zadanie 7
var linki = document.querySelector('nav').querySelectorAll('li');

function setDataDirection(elements) {
  elements.forEach((li, i) => {
    if (!li.getAttribute('data-direction')) {
      li.setAttribute('data-direction', 'top');
    };
  });
};

setDataDirection(linki);