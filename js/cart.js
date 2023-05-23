function copyContent() {
    const content = document.getElementById("content").innerHTML;
    const newWindow = window.open("./cart.html");
    newWindow.document.write(`<link href="./css/style.css" rel="stylesheet"><link href="css/product-grid.css" rel="stylesheet"><div id="cart">${content}</div>`);
    newWindow.document.close();
  }
