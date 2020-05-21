const box = document.querySelector("#box");

function fill (size, color) {
    let height = 400 / size;
    height = height.toString() + "px"
    console.log(height);
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.style.width = height;
        cell.style.height = height;
        cell.onmouseover = () => {trail(cell, "white");};
        box.appendChild(cell);
    }
}

let trailColor = "white";

fill(16, "white");

const reset = document.querySelector("#Reset");
reset.onclick = () => {clean();};

const resize = document.querySelector("#Resize");
resize.onclick = () => {
    document.querySelectorAll(".cell")
        .forEach((child) => {box.removeChild(child);});
    let size = prompt("Size please");

    fill(size, "white");
}

const random = document.querySelector("#Random");
random.onclick = () => {
    document.querySelectorAll(".cell").forEach (
        (child) => {
            child.onmouseover = () => {trail(child, '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6))};
        }
    )
}

const white = document.querySelector("#White");
white.onclick = () => {
    document.querySelectorAll(".cell").forEach (
        (child) => {
            child.onmouseover = () => {trail(child, "white");};
        }
    )
}

var i = 0.0;
const darken = document.querySelector("#Darken");
darken.onclick = () => {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.onmouseover = () => {darkFill(cell);};
    });
}

function darkFill(cell) {
    cell.style.backgroundColor = "black";
    cell.style.opacity = (i * 100).toString() + "%";
    i += 0.1;
    if (i >= 1) i = 0.1;
    console.log(i);
}

function trail(ele, color) {
    ele.style.opacity = 1;
    ele.style.backgroundColor = color;
}

function clean() {
    document.querySelectorAll(".cell")
                        .forEach(
                            (cell) => {trail(cell, "grey"); cell.style.opacity = 1;} ) 
}






