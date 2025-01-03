var t = new Typed(".auto-type",{
    strings:["Fly In Comfort And Feel The Difference"],
    typeSpeed:150,
    backSpeed:150,
    loop:true

 })




// ------------------------------------CLOCK----------------------------------------
       
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{

let currentTime = new Date();

// hrs.innerHTML = currentTime.getHours();
// min.innerHTML = currentTime.getMinutes();
// sec.innerHTML = currentTime.getSeconds();

hrs.innerHTML = (currentTime.getHours()<10?"0":"") +currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();

},1000)


// --------------------------------inputsropdown-----------------------
//drop-from
function showDropdown1() {
    let dropdown = document.querySelector("#suggdropdown1");
    dropdown.style.display = "block"; 
}


function selectItem1(item) {
    document.querySelector("#input1").value = item;
    document.querySelector("#suggdropdown1").style.display = "none"; 
}
//drop-to
function showDropdown2() {
    let dropdown = document.querySelector("#suggdropdown2");
    dropdown.style.display = "block"; 
}


function selectItem2(item) {
    document.querySelector("#input2").value = item;
    document.querySelector("#suggdropdown2").style.display = "none"; 
}
//drop-travel
function showDropdown3() {
    let dropdown = document.querySelector("#suggdropdown3");
    dropdown.style.display = "block"; 
}


function selectItem3(item) {
    document.querySelector("#input3").value = item;
    document.querySelector("#suggdropdown3").style.display = "none"; 
}
// ----------------------------------------------------------------------------------------

let hide=()=>{
    let input = document.querySelector("#input00")
let dropdown = document.querySelector("#suggdropdown");
input.innerHTML=dropdown.style.display="none";
}
// ----------------------end drop-----------------------