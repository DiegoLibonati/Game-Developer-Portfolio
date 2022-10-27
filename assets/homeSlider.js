const allHomeImgs = document.querySelectorAll(".homeImg");

let currentHomeImg = 0;

const changeHomeImg = () => {

    if (currentHomeImg >= allHomeImgs.length -1){
        currentHomeImg = 0;
        allHomeImgs[currentHomeImg].classList.add("showHomeImg");
        checkIfImgHasClass(allHomeImgs[currentHomeImg]);
    } else {
        currentHomeImg++;
        allHomeImgs[currentHomeImg].classList.add("showHomeImg");
        checkIfImgHasClass(allHomeImgs[currentHomeImg]);
    }

}

const checkIfImgHasClass = (currentImg) => {

    allHomeImgs.forEach(function(img){

        if (img !== currentImg){
            img.classList.remove("showHomeImg");
        }

    })

}

setInterval(changeHomeImg, 5000);