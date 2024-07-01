const imgUrlsArr = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png"
];

const articleContainer = document.getElementById("slider-image");

articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="sliderimage" />`;

let imgIndex = 0;

function previousImg() {
    if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
        imgIndex--;
    } else {
        imgIndex = imgUrlsArr.length - 1;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="sliderimage" />`;
}

function nextImg() {
    if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
        imgIndex++;
    } else {
        imgIndex = 0;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="sliderimage" />`;
}