const btn = document.getElementById("more-products");
let productsCount = 0;
let productsArray = [];
let filterPresent=false;
const applyFilterBtn = document.getElementById("apply-filter");
const clearFilterBtn = document.getElementById("clear-filter");

btn.addEventListener("click", function(){
    loadMoreProducts();
});



function loadMoreProducts(){
    // console.log("/loadMore?productsCount="+productsCount);
    fetch("/loadMore?productsCount="+productsCount)
    .then(function(response){
        // console.log(JsonData);
        return response.json();
    })
    .then(function(data){
        // console.log(data.length);
        
        if(data.length !== 0){
            productsCount +=5;
            // console.log(data.length, productsCount);
        }else{
            setPopUp("No More Items", "");
        }
        data.forEach(element => {
            productsArray.push(element);
        });
        if(filterPresent){
            // console.log("in filter");
            applyFilter();
        }else{
            addProductToDom(data);
        }
    })
}


function addProductToDom(data){
    const parent = document.getElementById("product-container");
    for(let i=0; i<data.length; i++) {
        let element = data[i];
        const newProduct = document.createElement("div");
        newProduct.classList.add("product");
        newProduct.setAttribute("id", `${element.id}`);
        newProduct.innerHTML = 
        `<div class="product-left">
        <img src="${element.image}" alt="product-image">
        </div>
        <div class="product-right">
        <h3>${element.name}</h3>
        <a href="#" onclick="giveDescription(this)">Description</a>
        <p>Price: <span class="original-price">${element.originalPrice}</span> <span class="discounted-price">${element.discountedPrice}</span></p>
        </div>`;
        parent.appendChild(newProduct);
        
    };
}


function giveDescription(element){
    const descriptionItemId = element.parentNode.parentNode.id;
    fetch("/description?productId="+ descriptionItemId)
    .then(function(JsonData){
        return JsonData.json();
    })
    .then(function(product){
        // console.log(product);
        if(product.description) setPopUp(product.name, product.description);
        else setPopUp(product.name, "No Data is available");
    })
}

function applyFilter(){
    filterPresent=true;
    const parent = document.getElementById("product-container");
    const minimumRange = parseInt(document.getElementById("minimum-range").value);
    const maximumRange = parseInt(document.getElementById("maximum-range").value);
    if(maximumRange>=minimumRange){
        // console.log("valid filter");
        let newProductsArray = productsArray.filter(function(element){
            return minimumRange<=element.discountedPrice && maximumRange>=element.discountedPrice;
        })
        // console.log(newProductsArray);
        parent.innerHTML="";
        addProductToDom(newProductsArray);
    }
}

function setPopUp(title, body){
    document.getElementById("exampleModalLabel").innerText = title;
    document.querySelector(".modal-body").innerText = body;
    document.getElementById("pop-up").click();
}


applyFilterBtn.addEventListener("click", applyFilter);


clearFilterBtn.addEventListener("click", function(){
    const parent = document.getElementById("product-container");
    parent.innerHTML="";
    filterPresent=false;
    addProductToDom(productsArray);
})

