var t = new Typed(".auto-type",{
    strings:["coading"],
    typeSpeed:150,
    vackSpeed:150,
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



