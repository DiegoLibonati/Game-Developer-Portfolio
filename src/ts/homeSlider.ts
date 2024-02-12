const allHomeImgs = document.querySelectorAll(".homeImg") as NodeList;

let currentHomeImg: number = 0;

const changeHomeImg = () => {

    const img = allHomeImgs[currentHomeImg] as HTMLImageElement

    const currentImg = document.querySelector(".showHomeImg")

    currentImg?.classList.remove("showHomeImg")

    if (currentHomeImg >= allHomeImgs.length -1){
        currentHomeImg = 0;
    } else {
        currentHomeImg++;
    }

    img.classList.add("showHomeImg");
}



setInterval(changeHomeImg, 5000);