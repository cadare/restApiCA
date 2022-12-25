const detailContainer = document.querySelector(".product-item");




const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const url = ("https://brbforum.com/wp-json/wp/v2/posts/" + id + "?consumer_key=ck_e2d9fbe500efaee3fc293ea6d4275f96879bfa9c")


async function fetchProduct() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

}

fetchProduct();






function createHtml(detail) {
    detailContainer.innerHTML = ` <div class="mainDetail">
 
    <h1 class="title">${detail.title.rendered}</h1>
  
    <p>${detail.content.rendered}</p>
    <p>${detail.date}</p>
 
                               </div>
                             `;

}