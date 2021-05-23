let arr = document.getElementById("arrow");
let image = document.getElementById("image");

let rotArrow = () => {
    arr.style.transform = "rotate(90deg)";
}

let revArrow = () => {
    arr.style.transform = "rotate(0deg)";
}

let imgLighten = () => {
    image.style.opacity = "0.2";
}

let imgRecover = () => {
    image.style.opacity = "1";
}