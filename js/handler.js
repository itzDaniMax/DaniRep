let tg = window.Telegram.WebApp;
let tosend = document.getElementById("tosend");
tg.expand();


tosend.AddEventListener("click", () => {

    // document.getElementById("cart").innerText = '';

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let adress = document.getElementById("address").value;
    let comment = document.getElementById("comment").value;
    let cart = document.getElementById("cart").value;
    let price = document.getElementById("total-price").value;

    // if (name.lenght < 1) {
    //     document.getElementById("cart").innerText = 'Пусатя Корзина';
    //     return;
    // }

    let data = {
        name: name,
        email: email,
        adress: adress,
        comment: comment,
        cart: cart,
        price: price
    }

    tg.sendData(JSON.stringify(data));
    tg.close();
});