// Examine The Document Object

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.images);
// console.log(document.all);
// console.log(document.all[10]);

// select
// getElementById
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
// innerText pays attention to the style
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'GoodBye';
headerTitle.innerHTML = '<h3>Hello</h3>';
// changing the style
headerTitle.style.borderBottom = 'solid 3px #00';

// getElementsByClassname notice it is elements here

// will retrun htmlcollection
var items = document.getElementsByClassName('list-group-item'); 
items[1].style.backgroundColor = 'yellow';

// below won't work because it is a htmlcollection and we need to loop through it
// items.style.backgroundColor = '#f4f4f4';

for(var i=0; i < items.length; i++){
    items[i].style.backgroundColor = '#f4f4f4';
}


// get elements by tag name
var li = document.getElementsByTagName('li'); 
li[1].style.backgroundColor = 'yellow';

for(var i=0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4';
}

// Query Selector 

// can use any css selector just like with jquery
var header = document.querySelector('#header');
headerTitle.style.borderBottom = 'solid 3px #00';

// only grab the first input
var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
// will change the first item
item.style.color = 'red';

var item = document.querySelector('.list-group-item:last-child');

var lastItem = document.querySelector('.list-group-items:nth-child(2)')

// query selector all, grab more than one thing

// can put class, id, title here
var titles = document.querySelectorAll('.title'); 

// css selector, pseudo selector
var odd = document.querySelectorAll('li:nth-child(odd');
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
}


// traversing the DOM
var itemList = document.querySelector('#items');
// parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);

// parentElement for the most part the same as parentNode
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

// childNodes don't suggest using
console.log(itemList.childNodes);

// children
console.log(itemList.children);

// firstChild, will include the line breaker, white space
// give the text node
console.log(itemList.firstChild);

// first element child, this will give the li
console.log(itemList.firstElementChild);

// next Sibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

// previous sibling

// create element

// create a div
var newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'Hello 1';

newDiv.setAttribute('title', 'Hello Div');
// create text node
var newDivText = document.createTextNode('Hello World'); 

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1)

console.log(newDiv)

var button = document.getElementsById('button').addEventListener('click', function(){
    console.log('button clicked');
});

var button = document.getElementsById('button').addEventListener('click', buttonClick);

function buttonClick(){
    document.getElementById('header-title').textContent = 'Changed';
    document.querySelector('main').style.backgroundColor = '#f4f4f4';
}

// the event object
function buttonClick(e){
    console.log(e);
    // print what the target is fired from
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.type);
    // the position from the browser window 
    console.log(e.clientX);
    // from the actual position you clicked
    console.log(e.offsetX);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e.ctrlKey);
}

var button = document.getElementsById('button')
button.addEventListener('dbclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: ' + e.type);
}

var box = document.getElementsById('box')
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mouseover', runEvent); 
box.addEventListener('mouseout', runEvent);
box.addEventListener('mousemove', runEvent);

function runEvent(e){
    console.log('EVENT TYPE: ' + e.type);
    output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY : ' + e.offsetY + '</h3>';
    box.style.backgroundColor = "rgb(" +e.offsetX+ "," + e.offsetY + ", 40)";
    document.body.style.backgroundColor = "rgb(" +e.offsetX+ "," + e.offsetY + ", 40)";
}

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cur', runEvent);
itemInput.addEventListener('paste', runEvent);

itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log("EVENT TYPE: " +e.type);
    // capture what you are typing
    console.log(e.target.value);
    document.getElementsById('output').innerHTML = '<h3>' +e.target.value+ '</h3>'
}














