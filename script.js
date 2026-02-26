
let productList = document.getElementById("productList");
let cartCount = document.getElementById("cartCount");
let cCartDiv = document.getElementById("c-cart-div");
let addProdductList = document.getElementById("addProdductList");
let cross = document.getElementById("cross");

let cart = [];

cCartDiv.addEventListener("click", function () {
    addProdductList.style.display = "block";
    cross.style.display = "block";
})

cross.addEventListener("click", function () {
    addProdductList.style.display = "none";
    cross.style.display = "none";
})



let products = [
    {
        id: 1,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSuRHReVCM9ZJDogKnJpWXm1VzV-iHekcBO-zD3golzxkhOocHZI-jCsQUzMFPmKBgJCpE6LeVi_0AqtMhhBYDlvBprA-aaVgjnaZIwJU0kW0deihT2gDzu8Q",
        name: "Campus Men's Direct Running Shoes",
        description: "High-performance, scalable, and secure production-ready solution built for reliability, efficiency, and seamless enterprise-level deployment.",
        price: "₹ 2333",
    },
    {
        id: 2,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTE_Vg3eWLIc_EU-jf_qJJ1p4pc8Q4OukWLARU16vJfFdF5vv0Do5pdVZZy_8TPedLUc9FM1AAJ4MTX01XD6nY0j7slvpDZd6AQBg0gHRh3CcXLFTJS0rx91hs",
        name: "Red Tape Men's Athleisure Walking Shoes",
        description: "High-performance, scalable, and secure production-ready solution built for reliability, efficiency, and seamless enterprise-level deployment.",
        price: "₹ 234",
    },
    {
        id: 3,
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdUx7UtbwLfFnHbPssZyJacbrKiHD4OpcAiGonLrfGycemxf2Z-k2iHKzJUEAkhKGHBR5yz7I-6PvGvOcYDOHQ7TUt9undFxdg2eXzMzxYvLD24zj93KYlTXw",
        name: "Asian FUTURE-01 Running Sports Shoe",
        description: "High-performance, scalable, and secure production-ready solution built for reliability, efficiency, and seamless enterprise-level deployment.",
        price: "₹ 343",
    },
    {
        id: 4,
        img: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/25986284/2023/11/23/4e383768-195a-4874-acf4-0563b38d9b011700729379178JQRMenWhiteFashion1.jpg",
        name: "Brand Shoes Men Black Formal Lace Up",
        description: "High-performance, scalable, and secure production-ready solution built for reliability, efficiency, and seamless enterprise-level deployment.",
        price: "₹ 348",
    },
]
products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card")

    card.innerHTML = `
      <img src=${product.img} alt="" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <div class="pc">
          <span class="price">${product.price}</span>
           <button class="icon"><i class="fa-solid fa-cart-arrow-down"></i></button>
      </div>
    `
    productList.append(card)

    const addToCardbtn = card.querySelector(".icon");


    addToCardbtn.addEventListener("click", function () {
        cart.push(product);
        cartCount.innerHTML = cart.length;
        console.log(cart)


        const cartItem = document.createElement("div");
        cartItem.classList.add("cartItem")
        cartItem.innerHTML = `
       <div class="leftRight">
      <img src=${product.img} alt="" />
      <div class="pd">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <span>${product.price}</span>
      </div>
      </div>
    `

        addProdductList.append(cartItem)

    })

})