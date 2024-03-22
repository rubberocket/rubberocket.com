var newsInfo = "2024/03/21: A demonic figure is attacking the city! Former Marines turned exorcists have come in to exorcise it. TWO presidents impeached in the span of 8 years! Among other things.";


function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

if (inIframe()) {
    document.getElementById("body").innerHTML = "<marquee>" + newsInfo + "</marquee>";
    document.getElementById("body").bgcolor = ""
} else {
    document.getElementById("nMarq").innerHTML = "<marquee>" + newsInfo + "</marquee>";
}