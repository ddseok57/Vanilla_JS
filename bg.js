const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintBg(imgNumber) {
    const image = new Image();
    image.src = `wallpaper/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNum = genRandom();
    paintBg(randomNum);
}

init();