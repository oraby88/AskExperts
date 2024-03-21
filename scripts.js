
function show(){
    document.getElementById('activeNav').classList.toggle('active');
    document.getElementById('bar1').classList.toggle('active');
    document.getElementById('bar2').classList.toggle('active');
    document.getElementById('bar3').classList.toggle('active');
}

function Qshow(){
    document.getElementById('Qdiscrption').classList.toggle('QdiscrptionShow');
    document.getElementById('Qbtn').innerHTML = '-';
}
function Qshow2(){
    document.getElementById('Qdiscrption2').classList.toggle('QdiscrptionShow');
}
function Qshow3(){
    document.getElementById('Qdiscrption3').classList.toggle('QdiscrptionShow');
}
function Qshow4(){
    document.getElementById('Qdiscrption4').classList.toggle('QdiscrptionShow');
}

function move(){
    document.getElementById('Service')
}

function appear() {
    document.querySelector(".language").classList.toggle("display");
    console.log('aa');
}
function mini_nav_language() {
    document.querySelector(".mini-nav-language").classList.toggle("display");
}

// function mini_nav_languageRemove() {
 
//     document.querySelector(".display").classList.add("mini-nav-language");
//     document.querySelector(".display").classList.remove("display");
//     console.log('bb');
// }
