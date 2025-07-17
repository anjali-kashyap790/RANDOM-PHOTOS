const imageContainerE1 = document.querySelector(".image-container");
const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("click",()=> {
    console.log("Button clicked");
    addNewImages();
});
function addNewImages() {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()
    *2000)}`;
    imageContainerE1.appendChild(newImgEl);
}