function menuOperation(){
    var menuButton = document.querySelector(".mobileMenuBtn");
    var mobileMenu = document.querySelector("nav.mobile");
    var main = document.querySelector("main");
    
    var classListBtn = menuButton.classList.toggle("open");
    var classListMenu = mobileMenu.classList.toggle("open");
    var classListMain = main.classList.toggle("open");

}
function copyEmail(){
    navigator.clipboard.writeText("jakub.hnilicka@infis.cz");
    alert("copied");
}


function age() {

    var ageEl = document.querySelector("#age");

    var date = new Date();
    var age = Math.floor((date - new Date(2008, 0, 11)) / (1000 * 60 * 60 * 24 * 365));
    //36
    var days = Math.floor((date - new Date(date.getFullYear(), 0, 11)) / (1000 * 60 * 60 * 24));
    ageEl.innerHTML = "Jmenuji se Jakub Hnilička, je mi "+age+" let. a "+ (days) +" dní";

    
    
}


window.addEventListener("scroll", function(){

    var header = document.querySelector('header');
    var logo = document.getElementsByClassName("logoImg")[0];
    var headerText = document.getElementsByClassName("headerText")[0];
    var navPc = document.querySelector("nav.pc");
    var linkPcTable = document.querySelector(".linkPcTable");
    var mobileMenuBtn = document.querySelector(".mobileMenuBtn");
    var navMobile = document.querySelector("nav.mobile");
    if(window.scrollY<20){
        //user is at the top of the page; no need to show the back to top button
        if(!header.classList.contains("onTop")){
            header.classList.add("onTop");
            logo.classList.add("onTop");
            headerText.classList.add("onTop");
            navPc.classList.add("onTop");
            linkPcTable.classList.add("onTop");
            mobileMenuBtn.classList.add("onTop");
            navMobile.classList.add("onTop");
        }
    } else {
        if(header.classList.contains("onTop")){
            header.classList.remove("onTop");
            logo.classList.remove("onTop");
            headerText.classList.remove("onTop");
            navPc.classList.remove("onTop");
            linkPcTable.classList.remove("onTop");
            mobileMenuBtn.classList.remove("onTop");
            navMobile.classList.remove("onTop");
        }
    }
});