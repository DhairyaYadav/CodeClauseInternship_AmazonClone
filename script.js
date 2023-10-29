let leftbtn = document.querySelector("#leftbtn");
let rightbtn = document.querySelector("#rightbtn");
let imgitem = document.querySelectorAll("#imageitem img");
console.log(imgitem.length - 1);
let starSlider = 0;
let endSlider = (imgitem.length - 1) * 100;
let sidebarNavigation = document.querySelector("#sidecontainer");
let allBtn = document.querySelector("#all");
let closeBtn = document.querySelector("#closeBtn");
let todayDealsProductList = document.querySelector(".productlist");
let todayDealHTML = "";
let pcleftbtn = document.querySelector("#pcleftbtn");
let pcrightbtn = document.querySelector("#pcrightbtn");
let todayDealStart = 0;
let productitems = document.querySelectorAll(".productitem");
console.log(productitems);
console.log(todayDealsProductList);




// ImageSlide 
leftbtn.addEventListener("click", () => {
    if (starSlider < 0) {
        starSlider = starSlider + 100;
    }
    imgitem.forEach(element => {
        element.style.transform = `translateX(${starSlider}%)`;
    });
})

rightbtn.addEventListener("click", () => {
    if (starSlider >= -endSlider + 100) {
        starSlider = starSlider - 100;
    }
    imgitem.forEach(element => {
        element.style.transform = `translateX(${starSlider}%)`;
    });
});

// sidebar
allBtn.addEventListener("click", () => {
    sidebarNavigation.style.transform = "translateX(0%)";
    sidebarNavigation.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
});

closeBtn.addEventListener("click", () => {
    sidebarNavigation.style.transform = "translateX(-100%)";
});


const todaysDeals = [
    {
        img: "https://m.media-amazon.com/images/I/41kPZEUzbiL._AC_SY200_.jpg ",
        discount: 89,
        DealofToday: "Great Indian Festivals ",
        desc: "Smart Watches From 899 "
    },
    {
        img: "https://m.media-amazon.com/images/I/41eW+ZpbDTL._AC_SY200_.jpg ",
        discount: 33,
        DealofToday: "Great Indian Festivals ",
        desc: "Samsung Galaxy M14"
    },
    {
        img: "https://m.media-amazon.com/images/I/41dEcQR7UnL._AC_SY200_.jpg ",
        discount: 27,
        DealofToday: "Great Indian Festivals ",
        desc: "Realme Narczo N53"
    },
    {
        img: "https://m.media-amazon.com/images/I/310ssdhM1uL._AC_SY200_.jpg ",
        discount: 57,
        DealofToday: "Great Indian Festivals ",
        desc: "Lowest Ever Festive Deals on JBL "
    },
    {
        img: "https://m.media-amazon.com/images/I/41RKW9BuUCL._AC_SY200_.jpg ",
        discount: 50,
        DealofToday: "Great Indian Festivals ",
        desc: "Household Supplies and Personal Care "
    },
    {
        img: "https://m.media-amazon.com/images/I/41W99DkNCYL._AC_SY200_.jpg ",
        discount: 25,
        DealofToday: "Great Indian Festivals ",
        desc: "Samsung Galaxy S23 fe 5g "
    },
    {
        img: "https://m.media-amazon.com/images/I/115IXR57OLL._AC_SY200_.jpg ",
        discount: 56,
        DealofToday: "Great Indian Festivals ",
        desc: "INR 3399 "
    },
    {
        img: "https://m.media-amazon.com/images/I/31Y7uI4Uw9L._AC_SY200_.jpg ",
        discount: 65,
        DealofToday: "Great Indian Festivals ",
        desc: "Top Offers on Mice & Keyboards"
    },
    {
        img: "https://m.media-amazon.com/images/I/41VyErHD3GL._AC_SY200_.jpg ",
        discount: 64,
        DealofToday: "Great Indian Festivals ",
        desc: "Sofas,Recliners and More"
    },
    {
        img: "https://m.media-amazon.com/images/I/31NFJBY6-9L._AC_SY200_.jpg",
        discount: 73,
        DealofToday: "Great Indian Festivals ",
        desc: "Deals on Deep Freezers "
    },
    {
        img: "https://m.media-amazon.com/images/I/31xE+KbV7uL._AC_SY200_.jpg ",
        discount: 80,
        DealofToday: "Great Indian Festivals ",
        desc: "Top Offers on Webcam Hubs"
    },
    {
        img: "https://m.media-amazon.com/images/I/41giQ0WD1lL._AC_SY200_.jpg",
        discount: 72,
        DealofToday: "Great Indian Festivals ",
        desc: "Arts and Crafts Made Easy"
    },

]

let todayDealLength = todaysDeals.length;

for (let i = 0; i < todayDealLength; i++) {
    todayDealHTML += `
    <div class="productitem">
        <img src="${todaysDeals[i].img}" alt="">
        <div class="discountcontainer">
            <a href="#" class="deal">Upto ${todaysDeals[i].discount}% off</a>
            <a href="#" class="gr8">${todaysDeals[i].DealofToday}</a>
        </div>
            <p>${todaysDeals[i].desc}</p>
   </div>
    `
}

todayDealsProductList.innerHTML = todayDealHTML;
// console.log(todayDealHTML);


pcleftbtn.addEventListener("click", () => {
    todayDealStart += 500;
    
    productitems.forEach(el => {
        el.style.transform = `translateX(${todayDealStart}%)`;
    })
});


pcrightbtn.addEventListener("click", () => {
    todayDealStart += 500;
    
    productitems.forEach(el => {
        el.style.transform = `translateX(-${todayDealStart}%)`;
    })
});

document.getElementById('myButton').addEventListener('click', function() {
    window.location.href = '#logo';
});