function switchTheme(origoElement) {
    var listChecks = document.getElementsByClassName("checkTheme");

    document.querySelector('body').classList.toggle("dark");


    if(origoElement.classList.contains("dark")){
        for (const iterator of listChecks) {
            iterator.checked=false;
            iterator.classList.add("light");
            iterator.classList.remove("dark");
        }

    }else{

        for (const iterator of listChecks) {
            iterator.checked=true;
            iterator.classList.remove("light");
            iterator.classList.add("dark");
        }


        
    }
}


myFunction = function() {
    var count = getComputedStyle(document.querySelector("body")).getPropertyValue('--count');
    profilePics = document.getElementsByClassName("profilePics")[0];
    count = parseInt(count) + 50;
    profilePics.style.filter = "hue-rotate("+count+"deg)";
    document.querySelector("body").style.setProperty('--count', count);
}

if(document.location.href == 'http://127.0.0.1:5500/index.html'){
    window.setInterval(myFunction,100);
}
