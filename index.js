//  let ProductEle = document.querySelector(".cards-data")
// let tabButtonELe = document.querySelector(".tab-button")
// let displayProduct = async () => {
//     let response = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json")
//     let data = await response.json()
//     let details = data.categories
//      details.map(element => {
//         ProductEle.innerHTML = ''
//         tabButtonELe.innerHTML = ''


//        // console.log("demo",element.category_name)
       
        
//         element.category_products.forEach(item => {
            
//                 tabButtonELe.innerHTML = `
//                 <button class="button">Men</button>
//                 <button class="button">Women</button>
//                 <button class="button">Kids</button>
//                 `
                
//             ProductEle.innerHTML += `<div class="card">
//             <h1 class="h1">${item.badge_text}</h1>
//             <div class="card-background-container">
//             <img class="image" src=${item.second_image} />
//           </div>
//           <div class="product">
//             <p >${item.title}</p>
//             <p >${item.vendor}</p>
//           </div>
//           <div class="product">
//             <p>${item.compare_at_price}</p>
//             <p>${item.price}</p>
//           </div>
//           <button class="button-2">Add Cart</button>
//           </div>
//           `
            
//         });


        
//      });
// }
// displayProduct()


let ProductEle = document.querySelector(".cards-data");
let tabButtonELe = document.querySelector(".tab-button");
let categoriesData;

let displayProduct = async () => {
  let response = await fetch(
    "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
  );
  let data = await response.json();
  categoriesData = data.categories;

  displayTabs();
  displayProducts("Men"); // Display products for the default category
};

let displayTabs = () => {
  tabButtonELe.innerHTML = "";
  categoriesData.forEach((element) => {
    tabButtonELe.innerHTML += `<button class="button" onclick="filterProducts('${element.category_name}')">${element.category_name}</button>`;
  });
};

let displayProducts = (categoryName) => {
  let selectedCategory = categoriesData.find(
    (element) => element.category_name === categoryName
  );

  ProductEle.innerHTML = "";
  selectedCategory.category_products.forEach((item) => {
    ProductEle.innerHTML += `<div class="card">
      <h1 class="h1">${item.badge_text}</h1>
      <div class="card-background-container">
        <img class="image" src=${item.second_image} />
      </div>
      <div class="product">
        <p>${item.title}</p>
        <p>${item.vendor}</p>
      </div>
      <div class="product">
        <p>${item.compare_at_price}</p>
        <p>${item.price}</p>
      </div>
      <button class="button-2">Add Cart</button>
    </div>`;
  });
};

let filterProducts = (categoryName) => {
  displayProducts(categoryName);
};

displayProduct();
