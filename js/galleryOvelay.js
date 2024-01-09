function openGallery(id){
    if(!document.querySelector("#galleryOvelay").classList.contains("open")){
        document.querySelector("#galleryOvelay").classList.toggle("open");
        document.querySelector("#galleryOvelay").contentWindow.postMessage('gallery'+id,'*');
    }
}

function closeGallery(){
    if(document.querySelector("#galleryOvelay").classList.contains("open")){
        document.querySelector("#galleryOvelay").classList.toggle("open");
    }
}

document.onkeydown = function(evt) {
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        closeGallery();
        window.top.postMessage('close', '*');
    }
};

window.onmessage = function(e) {
    if (e.data == 'close') {
        closeGallery();
    }
};

