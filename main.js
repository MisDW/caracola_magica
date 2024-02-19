const answer = document.getElementById("answer");

// FUNCTION LOAD JSON
const loadJson = async () => {
    console.log("Loading...");

    // GET DIRECTION FROM JSON
    const data = await fetch("answers.json");
    const json = await data.json(); //TRASNFORM DATA TO ARRAY JSON
    // GO BACK TO RESOLVE IN FORM TO PROMISE
    await new Promise(json => setTimeout(json, 1000));
    insertToDocument(json);
}

// LOADING METHOD ASYNC
window.addEventListener("load", loadJson());

const insertToDocument = (date) => {
    const random_num = parseInt(Math.random() * 5) + 1;
    answer.innerHTML = date[random_num];
}

var takeRope = false;

document.querySelector(".cordon").addEventListener("mousedown", () => {
    takeRope = true;
    document.body.addEventListener("mousemove", (e) => mouseMove(e))
    // mouseDetectUp();
})

var cordon = document.querySelector(".cordon");

const mouseMove = (e) => {
    if (takeRope) {
        console.log(e.x);
        console.log(e.y);
        console.log(takeRope);
        cordon.style.position = "fixed";
        cordon.style.left = `${e.clientX - cordon.offsetWidth / 2}px`;
        cordon.style.top = `${e.clientY - cordon.offsetHeight / 2}px`;
    }
}

cordon.addEventListener("mouseup", () => {
    takeRope = false;
    console.log("Arriba");
    
    cordon.style.position = "absolute";
    cordon.style.top = "90px";
    cordon.style.left = "305px";
})

