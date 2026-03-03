/**************DOM selectors */
let cart = document.getElementById("cart");
// console.log(cart);

let products = document.getElementsByClassName("product"); // HTMLCollection (live) - updates automatically when the DOM changes
// console.log(products);

let images = document.getElementsByTagName("img"); // HTMLCollection (live) - updates automatically when the DOM changes
// console.log(images);

let product = document.querySelector(".product");
// console.log(product);

let queryAllProducts = document.querySelectorAll(".product"); // NodeList (static) - does not update automatically when the DOM changes
// console.log(queryAllProducts);

/**************DOM attributes */
let cartClassName = product.getAttribute("style");
// console.log(cartClassName);

// product.setAttribute("style", "background-color: lightblue; padding: 10px; border-radius: 5px;");

// product.removeAttribute("style");

/**************DOM manipulation */
// product.style.color = "red";
// product.style.fontSize = "20px";
// product.style.fontWeight = "bold";

let productIcons = document.createElement("div");
productIcons.className = "trash-like-box";

productIcons.innerHTML = `
  <i class="fa-solid fa-trash"></i>
  <i class="fa-solid fa-heart"></i>
`;

let cardBody = document.querySelector("#card-body");
cardBody.appendChild(productIcons);

//******************DOM events */
//1st way
let trashIcons = document.querySelectorAll(".fa-trash");
console.log(trashIcons)

// function removeProduct(i) {
//     trashIcons[i].closest(".product").remove();
//     console.log("Product " + i + " removed");
//     console.log(trashIcons)
// }

// 2nd way
// for (let i in trashIcons) {
//     trashIcons[i].onclick = function () {
//         trashIcons[i].closest(".product").remove();
//         console.log("Product " + i + " removed");
//     }
// }

// 3rd way
for (let icon of trashIcons) {
    icon.addEventListener("click", function () {
        icon.closest(".product").remove();
        console.log("Product removed");
        calculateTotal();
    });
}

//******************Heart icons */
let heartIcons = document.querySelectorAll(".fa-heart");
console.log(heartIcons)

for (let icon of heartIcons) {
    icon.addEventListener("click", function () {
        icon.classList.toggle("heart");
        console.log("Product liked/unliked");
    });
}

//******************Shopping Cart */
// increment quantity
let plusButtons = document.querySelectorAll(".fa-plus");

for (let button of plusButtons) {
    button.addEventListener("click", function () {
        let quantityElement = button.nextElementSibling;
        let currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;
        calculateTotal();
    });
}

// decrement quantity
let minusButtons = document.querySelectorAll(".fa-minus");

for (let button of minusButtons) {
    button.addEventListener("click", function () {
        let quantityElement = button.previousElementSibling;
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
            quantityElement.textContent = currentQuantity - 1;
        }
        calculateTotal();
    });
}

// calculate total price
function calculateTotal() {
    let total = 0;
    let products = document.querySelectorAll(".product");
    for (let i = 0; i < products.length; i++) {
        let priceElement = products[i].querySelector(".price");
        let quantityElement = products[i].querySelector(".quantity");
        let price = parseFloat(priceElement.textContent);
        let quantity = parseInt(quantityElement.textContent);
        total += price * quantity;
    }
    console.log(total.toFixed(2));
    let totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
calculateTotal();



//******************Form Validation */
// function validateForm(e) {
//  e.preventDefault()
//  var name = document.loginForm.name.value
//  var password = document.loginForm.password.value
// if (name.length==0)
//  return alert(`name is required`)
// if (password.length<5)
//  return alert(`password length should more than 5`)
// }

let loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = loginForm.name.value;
    let password = loginForm.password.value;
    if (name.length === 0) {
        alert("Name is required");
        return;
    }
    if (password.length < 5) {
        alert("Password length should be more than 5");
        return;
    }
    alert("Form submitted successfully!");
});

// HTMLCollection (live) VS NodeList (static)
