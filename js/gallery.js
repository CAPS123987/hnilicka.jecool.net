document.onkeydown = function(evt) {
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        window.top.postMessage('close', '*');
    }
};

window.onmessage = function(e) {
    if (e.data.includes('gallery')) {
        openGalleryID(parseInt(e.data.substring(7,e.data.length)));
    }
};

function closeGallery() {
    window.top.postMessage('close', '*');
}

function openGalleryID(id) {
    images = document.querySelector("#imgHolder").children;

    for(var i = 0; i < images.length; i++){
        images[i].classList.remove("selected");
        images[i].classList.remove("right");
        images[i].classList.remove("left");
    }

    
    images[id].classList.add("selected");
    if(id > 0){
        images[id-1].classList.add("left");
    }
    if(id < images.length - 1){
        images[id+1].classList.add("right");
    }
    updateText();
}

function right(){
    images = document.querySelector("#imgHolder").children;

    for (var i = 0; i < images.length; i++) {
        if(images[i].classList.contains("right")){
            images[i].classList.remove("right");
            images[i].classList.add("selected");

            images[i-1].classList.add("left");
            images[i-1].classList.remove("selected");

            if(i > 1){
                images[i-2].classList.remove("left");
            }

            if(i < images.length - 1){
                images[i+1].classList.add("right");
                

            }
            break;
        }
    }
    updateText();
}

function left(){
    images = document.querySelector("#imgHolder").children;

    for (var i = 0; i < images.length; i++) {
        if(images[i].classList.contains("left")){
            images[i].classList.remove("left");
            images[i].classList.add("selected");

            images[i+1].classList.add("right");
            images[i+1].classList.remove("selected");

            if(i < images.length - 2){
                images[i+2].classList.remove("right");
            }

            if(i > 0){
                images[i-1].classList.add("left");
                
            }
            break;
        }
    }
    updateText();
}

function updateText(){

    images = document.querySelector("#imgHolder").children;

    for (var i = 0; i < images.length; i++) {
        if(images[i].classList.contains("selected")){
            var text = (i+1)+"/"+images.length;
            document.querySelector("#count").innerHTML = text;
            break;
        }
    }

    
}