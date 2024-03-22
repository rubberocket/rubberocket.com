function iniFrame() {
    if (window.location !== window.parent.location) {
        // The page is in an iFrame
        return true;
    }
    else {
        // The page is not in an iFrame
        return false;
    }
}

var newsInfo = "2024/03/21: A demonic figure is attacking the city! Former Marines turned exorcists have come in to exorcise it. TWO presidents impeached in the span of 8 years! Among other things.";
var newsMarquee = "<marquee>" + newsInfo + "</marquee>";

if (iniFrame() = true) {
    document.write(newsMarquee);
} else {
    document.getElementById("nMarq").innerHTML = newsMarquee;
}