function loady(reqvid, license){

return reqvid;
return license;

function doNice() {
    return "<br> <div id='thething'> <embed src='" + reqvid + "' class='viddy'></embed><br><strong>License</strong>:" + license + " </div>";
}

if (document.getElementById("thething")) {
    document.getElementById("thething").remove();
    this.innerHTML += doNice();
} else {
    this.innerHTML += doNice();
}

}