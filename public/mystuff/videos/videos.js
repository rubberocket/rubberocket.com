/* get our video */

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let reqvid = urlParams.get('video')

    if (reqvid === "ballbounce81224") {
        document.getElementById("ballbounce81224").innerHTML = '<embed src="../../assets/multimedia/videos/flash/testfootage/bounce_81224.swf" class="viddy">';
        window.location.href = "#ballbounce81224";
    }

    if (reqvid === "killafish") {
        document.getElementById("killafish").innerHTML = '<embed src="../../assets/multimedia/videos/mpegfour/kilrfish.mp4" class="viddy">';
        window.location.href = "#killafish";
    }

    if (reqvid === "mcream") {
        document.getElementById("mcream").innerHTML = '<embed src="../../assets/multimedia/videos/mpegfour/objectshowstuff/whippedcreammc.mp4" class="viddy">';
        window.location.href = "#mcream";
    }

    if (reqvid === "toss1e1") {
        document.getElementById("toss1e1").innerHTML = '<embed src="../../assets/multimedia/videos/mpegfour/objectshowstuff/Scene1Ep1.mp4" class="viddy">';
        window.location.href = "#toss1e1";
    }

    if (reqvid === "scribbletrail") {
        document.getElementById("scribbletrail").innerHTML = '<embed src="../../assets/multimedia/videos/mpegfour/STrialer.mp4" class="viddy">';
        window.location.href = "#scribbletrail";
    }