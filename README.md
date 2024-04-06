![image](https://github.com/harshlalawat/ecommerce_functionality_with_nodejs_only/assets/109430355/dcdc3e99-f4e0-473b-9ebb-c2fca638544e)
1. Backend Setup: The backend should be implemented using only with native modules in Node Js like `http`, `url`, and `fs` modules in Node.js. Server is created with native nodejs without any external dependencies including express and any other external library.

2. Product and Discount Data: Two JSON files are given:
   - `products.json` containing fields for `id`, `name`,image`, `description`, `sizes` and `price`. (You can populate data given at the end of file)
   - `discountedProducts.json` containing fields for `id` and `discountPercentage`. (You can populate data given at the end of file)

3. Homepage Route (`/home`): Initially, the server should serve a static homepage featuring just a "Load Products" button. This page must be with minimal css.

4. Loading Products (`/load_product`):
   - Upon clicking the "Load Products" button, the backend should process `product.json` and `discount.json` to calculate the `discounted_price` for each product.
   - The backend should then respond with an array of objects, each containing `id`, `image`, `originalPrice`, and `discountedPrice`, converted into JSON format.
   - The frontend should re-render the homepage to display a list of 5 products, incorporating the data received. Each product display should include the name, an image, a hyperlink for the description, the original gross price (striked through), and the discounted price.

5. Pagination and More Products: 
   - Below the displayed products, a "More Products" button should be added.
   - Clicking this button should request the next set of 5 products from the backend, append them to the current product list, and move the "More Products" button below the new additions. 
-If Backend doesn’t have products to send then frontend will show `NO MORE PRODUCTS` . This functionality aims to create a seamless experience for users browsing through the product catalog.

6. Product Descriptions:
   - Clicking on a product's description hyperlink should trigger an event that fetches and displays the full description for that specific product. This should be handled in a user-friendly manner, possibly through a modal or an inline expansion, without requiring a page reload.

8.Filter Products:
 -There is a filter on top of page which contains two entries min and max price and a button to apply filter.On basis of entries you have to filter the displayed products .
-There is also a clear filter button to clear all the effects of filter . This functionality should be handled on the frontend only . 

7. Styling: The application should employ minimal CSS for a clean and straightforward user interface, ensuring that the focus remains on the functionality and ease of use.


