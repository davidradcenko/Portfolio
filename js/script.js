/* ========================= typing animation ==============*/
var typed =new Typed(".typing",{
    strings:["React Developer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// switcher on navigeter web side

let heading1 = document.getElementById("li1");
heading1.addEventListener("click", modifyColor1);

function modifyColor1() {
    document.getElementById("a1").classList.add("active") ;
    document.getElementById("a2").classList.remove("active") ;
    document.getElementById("a3").classList.remove("active") ;
    document.getElementById("a4").classList.remove("active") ;
    document.getElementById("a5").classList.remove("active") ;
}

let heading2 = document.getElementById("li2");
heading2.addEventListener("click", modifyColor2);

function modifyColor2() {
    document.getElementById("a1").classList.remove("active") ;
    document.getElementById("a2").classList.add("active") ;
    document.getElementById("a3").classList.remove("active") ;
    document.getElementById("a4").classList.remove("active") ;
    document.getElementById("a5").classList.remove("active") ;

}

let heading3 = document.getElementById("li3");
heading3.addEventListener("click", modifyColor3);

function modifyColor3() {
    document.getElementById("a1").classList.remove("active") ;
    document.getElementById("a2").classList.remove("active") ;
    document.getElementById("a3").classList.add("active") ;
    document.getElementById("a4").classList.remove("active") ;
    document.getElementById("a5").classList.remove("active") ;

}


let heading4 = document.getElementById("li4");
heading4.addEventListener("click", modifyColor4);

function modifyColor4() {
    document.getElementById("a1").classList.remove("active") ;
    document.getElementById("a2").classList.remove("active") ;
    document.getElementById("a3").classList.remove("active") ;
    document.getElementById("a4").classList.add("active") ;
    document.getElementById("a5").classList.remove("active") ;

}

let heading5 = document.getElementById("li5");
heading5.addEventListener("click", modifyColor5);

function modifyColor5() {
    document.getElementById("a1").classList.remove("active") ;
    document.getElementById("a2").classList.remove("active") ;
    document.getElementById("a3").classList.remove("active") ;
    document.getElementById("a4").classList.remove("active") ;
    document.getElementById("a5").classList.add("active") ;


}