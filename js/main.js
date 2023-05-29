// перехватываем клики на элементах с атрибутом onclick
document.addEventListener('click', function(event) {
  // проверяем, является ли целевой элемент элементом с атрибутом onclick
  var target = event.target;
  while (target && !target.hasAttribute('onclick')) {
    target = target.parentNode;
  }

  if (target && target.hasAttribute('onclick')) {
    // отменяем стандартное поведение браузера
    event.preventDefault();
    // получаем ссылку из атрибута onclick
    var link = target.getAttribute('onclick').replace("document.location='", '').replace("'", '');
    // обновляем содержимое текущей страницы без перезагрузки
    window.history.pushState(null, null, link);
    // загружаем содержимое новой страницы через AJAX
    fetch(link)
      .then(response => response.text())
      .then(html => {
        document.querySelector('body').innerHTML = html;
      })
      .catch(error => console.error(error));
  }
});
