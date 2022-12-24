const url = "https://brbforum.com/wp-json/wp/v2/posts?"

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
        <a href="product-items.html" class="card_fetch">
     
       
        <h1 class="title">${product.title.rendered}<h1/>
        
        
        <p class="paragrpy">${product.excerpt.rendered}<p/>
      
                                    
                                                                                                                                                                                                   
                                      
                                     
                                        
        </a>    `;







    })
}

//https://brbforum.com/wp-json/wp/v2/posts?consumer_key=ck_f594e7cc7bc4a0174b4687b924a966264f7bf578&consumer_secret=cs_b13b4fd6e8bc3e176bb2e74a3c4ded2f8e3c4fea


//https://brbforum.com/wp-json/wp/v2/postsnull?consumer_key=ck_f594e7cc7bc4a0174b4687b924a966264f7bf578&consumer_secret=cs_b13b4fd6e8bc3e176bb2e74a3c4ded2f8e3c4fea