import { data } from "./data.js";

const productsContainer = document.querySelector(".products");
const searchItem = document.querySelector("#search");
const categoriesContainer = document.querySelector(".categories");
const priceRange = document.querySelector(".priceReange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts.map(
    (product) =>
      `
    <div class="product">
                    <img src=${product.img} alt="">
                    <span class="name">${product.name}</span>
                    <span class="priceText">$${product.price}</span>
                </div>
    `
  );
};
displayProducts(data);

// keyup is an eventistner that is responsible for taking the input value
searchItem.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();
  // filter out products
  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});
