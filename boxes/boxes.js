/* SECTION */
/* SHARE */
/* SECTION */

const  sharebutton = document.querySelector(".circle-box")
const  stick1 = document.querySelector(".stick1")
const  stick2 = document.querySelector(".stick2")
const  github = document.querySelector(".github")
const  instagram = document.querySelector(".instagram")
const  linkedin = document.querySelector(".linkedin")
const  logos = document.querySelectorAll("i")
const  allElements = [sharebutton, stick1, stick2, github, instagram, linkedin, logos[0], logos[1], logos[2]]


github.addEventListener("click", (e) => {
    e.target.setAttribute("target", "_blank"); 
    location.href = "https://github.com/jamessoole/Website";  
})
linkedin.addEventListener("click", (e) => {
    e.target.setAttribute("target", "_blank"); 
    location.href = "https://www.linkedin.com/in/james-soole/";  
})


document.addEventListener("click", function(e) { 
    if (e.target.tagName == "A" && 
            !e.target.hasAttribute("target")) 
    { 
        e.target.setAttribute("target", "_blank"); 
    } 
});

sharebutton.addEventListener("click", expand)

function expand() {
    allElements.forEach(element => element.classList.toggle("out"))
}




/* SECTION */
/* CALCULATOR */
/* SECTION */



const input = document.querySelector(".calculator input");
const button = document.querySelector(".calculator button");

// must start w/ a number
off();

//if typed into textbox, enable ops
document.addEventListener("input", e => {
    on();    
});

// enable all op buttons after number's clicked
function on() {
    for (var i = 1; i < 7; i++) {
        document.getElementById(`off${i}`).disabled = false;
    }
}
//disablde all ops (and C) after an op is clicked
function off() {
    for (var i = 1; i < 7; i++) {
        document.getElementById(`off${i}`).disabled = true;
    }
}

function num0() { input.value += "0"; }
function num1() { input.value += "1"; }
function num2() { input.value += "2"; }
function num3() { input.value += "3"; }
function num4() { input.value += "4"; }
function num5() { input.value += "5"; }
function num6() { input.value += "6"; }
function num7() { input.value += "7"; }
function num8() { input.value += "8"; }
function num9() { input.value += "9"; }

function dot() { input.value += "."}
function empty() { input.value = ""; off(); }

function add() { input.value += " + "; }
function sub() { input.value += " - "; }
function mult() { input.value += " * "; }
function div() { input.value += " / "; }

function enter() {
    //eval's fine for browser, dont use in server
    input.value = eval(input.value);
}

// // does weird stuff rn
// document.addEventListener('keydown', e => {
//     if (e.keyCode == 13) {
//         enter();
//     }
// });


/* SECTION */
/* ORBS */
/* SECTION */

$(function() {
    $(".circle").draggable();
}) 

$('.circle').click(function(e) {                    
    document.querySelector(`.drag-me`).style.opacity = 0;
});