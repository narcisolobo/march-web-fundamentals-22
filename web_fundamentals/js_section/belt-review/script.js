var bannerImage = document.querySelector('#banner-image');
var cartCount = document.querySelector('#cart-count');

function nextImage() {
  bannerImage.src = './images/pixel-ninjas-2.png';
}

function prevImage() {
  bannerImage.src = './images/stonepunk.png';
}

function addItem() {
  cartCount.innerText++;
}