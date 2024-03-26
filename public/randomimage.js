window.addEventListener("load", (event) => {
    var randomImage = new Array("assets/multimedia/images/rand/gmaine.png", "assets/multimedia/images/rand/shmib.png");
    var randomImageAlt = new Array("the gman is real!!!!", "shmibby the idiot");
    var imageNum = Math.floor(Math.random()*randomImage.length); // we don't need one for the alts
    document.getElementById("gmane").src = (randomImage[imageNum]);
    document.getElementById("gmane").alt = (randomImageAlt[imageNum]);
});