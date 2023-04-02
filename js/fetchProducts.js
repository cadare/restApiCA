const url = "https://sookoob.com/wp-json/wp/v2/posts?"

console.log(url)

const productContainer = document.querySelector('.productPage');


async function getProducts(url) {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products)

    displayProducts(products)

}

getProducts(url)

function displayProducts(products) {
    const productContainer = document.querySelector('#productContainer')


    products.forEach(function (product) {
        productContainer.innerHTML +=

            ` 
            <div class="mainDetail mainFetch">
        <a href="product-items.html?id=${product.id}" class="card_fetch">
    
  
        <h1 class="title">${product.title.rendered}<h1/>
        <p>${product.comment_status}</p>
       
        
        <p class="paragrapy">${product.excerpt.rendered}<p/>
        
       </a>  
       
         
         <div class="product-images" 
         style="background-image: url('${product.better_featured_image
             .source_url}')"></div>

             </div>  
         `


    })
}