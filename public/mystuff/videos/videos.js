/* get our video */

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let reqvid = urlParams.get('video')

    if (reqvid === "ballbounce81224") {
        document.getElementById("ballbounce81224").style = "display: block;";
        window.location.href = "#ballbounce81224";
    } else {
        document.getElementById("ballbounce81224").style = "display: none;";
    }

    if (reqvid === "killafish") {
        document.getElementById("killafish").style = "display: block;";
        window.location.href = "#killafish";
    } else {
        document.getElementById("killafish").style = "display: none;";
    }

    if (reqvid === "mcream") {
        document.getElementById("mcream").style = "display: block;";
        window.location.href = "#mcream";
    } else {
        document.getElementById("mcream").style = "display: none;";
    }

    if (reqvid === "toss1e1") {
        document.getElementById("toss1e1").style = "display: block;";
        window.location.href = "#toss1e1";
    } else {
        document.getElementById("toss1e1").style = "display: none;";
    }

    if (reqvid === "scribbletrail") {
        document.getElementById("scribbletrail").style = "display: block;";
        window.location.href = "#scribbletrail";
    } else {
        document.getElementById("scribbletrail").style = "display: none;";
    }