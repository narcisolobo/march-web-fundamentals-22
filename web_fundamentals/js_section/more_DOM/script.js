function deleteMe(element) {
  element.remove();
}

var yourName = document.querySelector('#your_name');
console.log(yourName);

function sayHello() {
  alert('Hello ' + yourName.value);
}

function activateLink(element) {
  element.style.color = 'yellow';
}

function deactivateLink(element) {
  element.style.color = 'white';
}

// THIS IS THE DROPDOWN MENU
var favColor = document.querySelector('#fav_color')
console.log(favColor);

function setColor(element) {
  element.style.backgroundColor = favColor.value;
}