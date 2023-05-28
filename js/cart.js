function addToCart(productName, productPrice) {
  // Создаем объект товара
  let product = {};
  product.name = productName;
  product.price = productPrice;

  // Получаем массив товаров из localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Добавляем новый товар в массив
  cartItems.push(product);

  // Сохраняем обновленный массив товаров в localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Обновляем итоговую стоимость в корзине
  updateCartTotal();

  // Опционально: выводим сообщение о добавлении товара
  alert("Товар " + productName + " добавлен в корзину!");
}

function updateCartTotal() {
  // Получаем массив товаров из localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Вычисляем общую стоимость товаров в корзине
  let total = cartItems.reduce(function (acc, curr) {
    return acc + curr.price;
  }, 0);

  // Обновляем текст итоговой стоимости на странице
  let totalElement = document.getElementById("total-price");
  totalElement.innerHTML = total.toLocaleString() + " руб.";

  // Отображаем товары в корзине
  displayCartItems();
}

function displayCartItems() {
  // Получаем массив товаров из localStorage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Получаем ссылку на элемент, в котором будут отображаться товары в корзине
  let cartElement = document.getElementById("cart");

  // Очищаем содержимое элемента
  cartElement.innerHTML = "";

  // Добавляем каждый товар в корзину на странице
  for (let i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];

    // Создаем новый элемент списка для товара
    let listItem = document.createElement("li");
    listItem.textContent = product.name + ": " + product.price.toLocaleString() + " руб.";
    cartElement.appendChild(listItem);
  }
}

// Обновляем итоговую стоимость и отображаем товары в корзине при загрузке страницы
updateCartTotal();

// Получаем ссылку на элемент кнопки очистки корзины
let clearCartButton = document.getElementById("clear-cart");

// Добавляем обработчик событий на кнопку очистки корзины
clearCartButton.addEventListener("click", function () {
  // Очищаем localStorage
  localStorage.removeItem("cartItems");

  // Обновляем отображение корзины
  updateCartTotal();
});

