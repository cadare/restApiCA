const detailContainer = document.querySelector(".product-item")


const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params)
const id = params.get("id");
console.log(id)

const url = "https://brbforum.com/wp-json/wp/v2/posts?" + id + "consumer_key=ck_e2d9fbe500efaee3fc293ea6d4275f96879bfa9c&consumer_secret=cs_d03736e5aa11368413a492d2c5bb10af30f292a1"

console.log(url)
async function fetchGame() {

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

fetchGame();








function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.title}</h1>
      `
}