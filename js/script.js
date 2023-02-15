const keys = document.querySelectorAll(".key");
const checkbox = document.querySelector(".checkbox-keys");
const switcher = document.querySelector(".switcher")
const keySection = document.querySelector(".piano-keys")
const body = document.querySelector("body")
const piano = document.querySelector(".piano")
const controls = document.querySelector(".controls")
const tema = document.querySelector(".tema")

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {

    playNote(key.getAttribute("data-note"));

    if (key.className.includes("black")) {
        key.classList.add("black-pressed");
        return;
    }

    key.style.background = "#ddd";
};
const handleMouseUp = (key) => {
    if (key.className.includes("black")) {
        key.classList.remove("black-pressed");
        return;
    }

    key.style.background = "#FFF";
};

keys.forEach((key) => {
    key.addEventListener("mousedown", () => handleMouseDown(key))
    key.addEventListener("mouseup", () => handleMouseUp(key))
});

checkbox.addEventListener("change", ({ target }) => {
    if(target.checked) {
        switcher.classList.add("switcher-active")
        keySection.classList.remove("disabled-keys")
        return;
    }

    keySection.classList.add("disabled-keys")
    switcher.classList.remove("switcher-active")
})

const keyDownMapper = {
    "Tab": () => handleMouseDown(keys[0]),
    "1": () => handleMouseDown(keys[1]),
    "q": () => handleMouseDown(keys[2]),
    "2": () => handleMouseDown(keys[3]),
    "w": () => handleMouseDown(keys[4]),
    "e": () => handleMouseDown(keys[5]),
    "4": () => handleMouseDown(keys[6]),
    "r": () => handleMouseDown(keys[7]),
    "5": () => handleMouseDown(keys[8]),
    "t": () => handleMouseDown(keys[9]),
    "6": () => handleMouseDown(keys[10]),
    "y": () => handleMouseDown(keys[11]),
    "u": () => handleMouseDown(keys[12]),
    "8": () => handleMouseDown(keys[13]),
    "i": () => handleMouseDown(keys[14]),
    "9": () => handleMouseDown(keys[15]),
    "o": () => handleMouseDown(keys[16]),
    "p": () => handleMouseDown(keys[17]),
    "-": () => handleMouseDown(keys[18]),
    "[": () => handleMouseDown(keys[19]),
    "=": () => handleMouseDown(keys[20]),
    "]": () => handleMouseDown(keys[21]),
    "Backspace": () => handleMouseDown(keys[22]),
    "Enter": () => handleMouseDown(keys[23]),
}
const keyUpMapper = {
    "Tab": () => handleMouseUp(keys[0]),
    "1": () => handleMouseUp(keys[1]),
    "q": () => handleMouseUp(keys[2]),
    "2": () => handleMouseUp(keys[3]),
    "w": () => handleMouseUp(keys[4]),
    "e": () => handleMouseUp(keys[5]),
    "4": () => handleMouseUp(keys[6]),
    "r": () => handleMouseUp(keys[7]),
    "5": () => handleMouseUp(keys[8]),
    "t": () => handleMouseUp(keys[9]),
    "6": () => handleMouseUp(keys[10]),
    "y": () => handleMouseUp(keys[11]),
    "u": () => handleMouseUp(keys[12]),
    "8": () => handleMouseUp(keys[13]),
    "i": () => handleMouseUp(keys[14]),
    "9": () => handleMouseUp(keys[15]),
    "o": () => handleMouseUp(keys[16]),
    "p": () => handleMouseUp(keys[17]),
    "-": () => handleMouseUp(keys[18]),
    "[": () => handleMouseUp(keys[19]),
    "=": () => handleMouseUp(keys[20]),
    "]": () => handleMouseUp(keys[21]),
    "Backspace": () => handleMouseUp(keys[22]),
    "Enter": () => handleMouseUp(keys[23]),
}

document.addEventListener("keydown", (event) => {
    event.preventDefault()
    keyDownMapper[event.key]()
})

document.addEventListener("keyup", (event) => {
    keyUpMapper[event.key]()
})

const botao = document.querySelector(".btn")

botao.addEventListener("change", ({ target }) => {
    if(target.checked) {
        body.classList.add("modo-escuro")
        body.classList.remove("modo-claro")
        piano.style.background = "#010529"
        keySection.style.background = "#01020d"
        controls.style.color = "rgba(255, 255, 255, 0.8)"
        tema.style.background = "#FFF"
        tema.style.color = "#000"
        return;
    }else {
        tema.style.background = "#12217e"
        piano.style.background = "#b8c4c7"
        keySection.style.background = "#a4b1b4"
        controls.style.color = "rgba(0, 0, 0, 0.8)"
        tema.style.color = "#FFF"
    }

    body.classList.remove("modo-escuro")
    body.classList.add("modo-claro")
});