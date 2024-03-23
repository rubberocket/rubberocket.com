function loady(reqvid, license){

if (document.getElementById("thething")) {
    document.getElementById("thething").remove();
} else {
    this.innerHTML += "<br> <div id='thething'> <embed src='" + reqvid + "' class='viddy'></embed><br><strong>License</strong>:" + license + " </div>";
}

}