const accesskey = "kR00ogPIsGNIKav7wZdPkcoW8SGjbwFbTiMyeGJr7jo";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-iinput");
const searchreasultEl = document.querySelector(".search-reasults");
const showMoreButtonEl = document.getElementById("show-more");
let inputdata = "";
let page = 1;
async function searchImages() {
  inputdata = searchInputEl.value;
  //console.log(inputdata);
  const url1 = "https://api.unsplash.com/search/photos?page=";
  const url2 = "&query=";
  const url3 = "&client_id=";
  const url = url1 + page + url2 + inputdata + url3 + accesskey;
  url.toString;
  console.log(url);
  const responce = await fetch(url);
  const data = await responce.json();
  console.log(data);
  if (page === 1) {
    searchreasultEl.innerHTML = " ";
  }
  const results = data.results;
  results.map((result) => {
    const imagewraper = document.createElement("div");
    imagewraper.classList.add("search-reasult");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    //console.log(result);
    imagelink.textContent = result.alt_description;

    imagewraper.appendChild(image);
    imagewraper.appendChild(imagelink);
    searchreasultEl.appendChild(imagewraper);
  });
  page++;

  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }
}
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
  console.log("submited");
});
showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
