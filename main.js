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

const insertToDocument = (date) =>{
    const random_num = parseInt(Math.random()*5)+1;
    answer.innerHTML = date[random_num];
}

var takeRope = false; 

document.querySelector(".cordon")
.addEventListener("click", (e) =>{
    takeRope = true;
    console.log(takeRope);
    document.body
    .addEventListener("move", (e) =>{
        console.log(e.x);
        console.log(e.y);
        console.log();
    })
})