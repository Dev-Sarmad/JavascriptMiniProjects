import { data } from "./data.js";

const productsContainer = document.querySelector(".products");
const searchItem = document.querySelector("#search");
const categoriesContainer = document.querySelector(".categories");
const priceRange = document.querySelector(".priceRange");
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

const setCategory = () => {
  const categories = data.map((item) => item.category);
//   adding the category All and checking the double categories 
  const updatedCategories = [
    "All",
    ...categories.filter((item, i) => categories.indexOf(item) === i),
  ];
  categoriesContainer.innerHTML = updatedCategories
    .map((category) => `<span class="category">${category}</span>`)
    .join("");
  categoriesContainer.addEventListener("click", (e) => {
    const selectedCategory = e.target.textContent;
    if (selectedCategory) {
      selectedCategory === "All"
        ? displayProducts(data)
        : displayProducts(
            data.filter((item) => item.category === selectedCategory)
          );
    } else {
      displayProducts(data);
    }
  });
};

setCategory();

const setPrice =()=>{
const prices  = data.map((item) => item.price);

// prices is an array so we need to find the price 
// either its maximum or the minimum so we use function min max but
// function not run on array so we spread the array 

let minPrice =  Math.min(...prices);
let maxPrice =  Math.max(...prices);
//changing ranges and values
priceRange.min = minPrice;
priceRange.max = maxPrice;
priceRange.value = maxPrice;
priceValue.textContent = "$"+maxPrice;

priceRange.addEventListener("input", (e)=>{
    priceValue.textContent = e.target.value;
    displayProducts(data.filter((item)=>item.price <= e.target.value))
})
}
setPrice();