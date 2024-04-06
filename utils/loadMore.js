const handlingFileRequest = require("./handlingFileRequest");

function loadMore(path, productsCount){
    return new Promise(function(resolve, reject){
        handlingFileRequest("./data/products.json")
        .then(function(JsonData, error){
            if(error){
                throw new Error(error);
            }
            // console.log("=-=-=-=", JsonData);
            return JSON.parse(JsonData);
        })
        .then(function(products){
            handlingFileRequest("./data/discountPrices.json")
            .then(function(JsonData){
                return JSON.parse(JsonData);
            })
            .then(function(discounts){
                let newProducts = [];
                let upperLimit = parseInt(productsCount)+5;
                for(let i=productsCount; i<upperLimit && i<products.length; i++){
                    let product = products[i];
                    let productObj = {
                        id: product.id,
                        name: product.name,
                        image: product.image,
                        description: product.description,
                        originalPrice: product.price
                    };
                    discounts.forEach(element => {
                        if(element.id === product.id){
                            productObj.discountedPrice = product.price - product.price*(element.discountPercentage/100);
                        }
                    });
                    newProducts.push(productObj);
                }
                resolve(newProducts);
            })
        })
        .catch(function(err){
            reject(err);
        })
    })
}

module.exports = loadMore;