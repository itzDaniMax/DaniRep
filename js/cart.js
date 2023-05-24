
// получаем цену товара из корзины
var price = localStorage.getItem('price');

// выводим цену в блок 'total-price'
document.getElementById('total-price').innerHTML = price;

function addToCart() {
  var priceBlock = document.querySelector('.card-price'); // получаем элемент с классом "card-price"
  var priceText = priceBlock.textContent.trim(); // получаем текстовое значение элемента и убираем лишние пробелы
  var priceNumber = parseInt(priceText); // преобразуем текст в число
  localStorage.setItem('price', priceNumber); // сохраняем цену в LocalStorage
  window.location.href = 'cart.html';
  document.getElementById('total-price').innerHTML = priceNumber;
}
