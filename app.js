let arr = document.getElementById("arrow");

let rotArrow = () => {
    arr.style.transform = "rotate(90deg)";
}

let revArrow = () => {
    arr.style.transform = "rotate(0deg)";
}

let imgLighten = (e) => {
    e.nextElementSibling.childNodes[1].style.opacity = "0.1";
}

let imgRecover = (e) => {
    e.nextElementSibling.childNodes[1].style.opacity = "1";
}

const skillSec = document.getElementById("animate-on-scroll");
let a = document.getElementById("html");
let b = document.getElementById("css");
let c = document.getElementById("py");
let d = document.getElementById("js");

const triggerAnimation = () => {
    a.classList.add("html");
    b.classList.add("css");
    c.classList.add("py");
    d.classList.add("js");
}

const disableAnimation = () => {
    a.classList.remove("html");
    b.classList.remove("css");
    c.classList.remove("py");
    d.classList.remove("js");
}

window.addEventListener('scroll', () => {
    const sectionPos = skillSec.getBoundingClientRect().bottom;
    const sectionPosTop = skillSec.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (screenPos > sectionPos) {
        triggerAnimation();
    }
    if (screenPos < sectionPosTop) {
        disableAnimation();
    }
})

const unCheck = () => {
    document.getElementById("check").checked = false;
}

const sendMail = () => {
    let tempParams = {
        from_name: document.getElementById("from-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };

    if (tempParams.from_name && tempParams.email && tempParams.message) {
       emailjs.send('service_72a44t8', 'template_4ojxtb6', tempParams).then((res) => { console.log("sucess", res.status) });
       document.getElementById("from-name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("msg").value = "";
    }
}