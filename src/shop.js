//  Creamos un objeto para almacenar la cantidad de cada producto comprado
const cartItemsCount = {
  pateos: 0,
  gastronomica: 0,
  helicoptero: 0,
  bicis: 0,
  parapente: 0,
  acuatica: 0,
};

// Botones de compra
const buyButtons = document.querySelectorAll(".description .buy-button");

// Aquí se muestra el contenido del carrito
const cartContainer = document.getElementById("cart-items");

// En esta variable se almacena el total del carrito
const totalContainer = document.getElementById("total");

// Botón de vaciar todo el carrito
const clearCartButton = document.getElementById("clear-cart-button");

// Evento con los propios botones de compra
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    cartItemsCount[product]++;

    updateCart();
  });
});

clearCartButton.addEventListener("click", clearCart);

//  Esta es la función encargada de limpiar el carrito
function clearCart() {
  for (const product in cartItemsCount) {
    cartItemsCount[product] = 0;
  }

  updateCart();
}

// Función actualizar el carro
function updateCart() {
  cartContainer.innerHTML = "";

  // Recorreremos con el for el objeto que creamos llamado cartItemsCount y así creamos también los objetos del carrito
  for (const product in cartItemsCount) {
    const count = cartItemsCount[product];
    if (count > 0) {
      const totalPrice = count * getPrice(product);
      const itemText = `Compra experiencia ${product} (${count} unidad): ${totalPrice} euros`;

      const newItem = document.createElement("li");
      newItem.textContent = itemText;
      newItem.dataset.product = product;

      // Añadiremos los botones de suma y resta ( plus y minus )
      const plusButton = document.createElement("button");
      plusButton.textContent = "+";
      plusButton.classList.add("plus-button");
      plusButton.dataset.product = product;
      plusButton.addEventListener("click", addOneItem);
      newItem.appendChild(plusButton);

      const minusButton = document.createElement("button");
      minusButton.textContent = "-";
      minusButton.classList.add("minus-button");
      minusButton.dataset.product = product;
      minusButton.addEventListener("click", removeOneItem);
      newItem.appendChild(minusButton);

      cartContainer.appendChild(newItem);
    }
  }

  // De esta forma mostraremos u ocultaremos el total. Si existen productos se ve el total mientras que si el carrito esta vacio no se muestra nada. Aprovechamos para introducir una función flecha
  totalContainer.style.display = Object.values(cartItemsCount).some(
    (count) => count > 0
  )
    ? "block"
    : "none";

  totalContainer.textContent = `Total: ${calculateTotal()} Euros`;

  // Aquí haremos lo mismo que al mostrar u ocultar el total pero en este caso con el botón de vaciar carrito. Si no existen objetos dentro del carrito entonces el botón no aparece porque no existe nada que vaciar
  clearCartButton.style.display = Object.values(cartItemsCount).some(
    (count) => count > 0
  )
    ? "block"
    : "none";
}

// Función para agregar una unidad al carro
function addOneItem() {
  const product = this.dataset.product;
  cartItemsCount[product]++;

  updateCart();
}

// Función para restar una unidad al carro
function removeOneItem() {
  const product = this.dataset.product;
  cartItemsCount[product]--;

  if (cartItemsCount[product] <= 0) {
    cartItemsCount[product] = 0;
  }

  updateCart();
}

// Función para obtener el precio de un producto. Desde aquí con solo cambiar el valor de la variable podemos modificar el precio de los productos
function getPrice(product) {
  switch (product) {
    case "pateos":
      return 40;
    case "gastronomica":
      return 100;
    case "helicoptero":
      return 300;
    case "bicis":
      return 70;
    case "parapente":
      return 150;
    case "acuatica":
      return 60;
    default:
      return 0;
  }
}

// Función para calcular el total del carrito
function calculateTotal() {
  let total = 0;
  for (const product in cartItemsCount) {
    total += cartItemsCount[product] * getPrice(product);
  }
  return total;
}

// Actualizar el carrito al cargar la página
updateCart();
