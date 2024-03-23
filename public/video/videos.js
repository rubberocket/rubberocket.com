$(document).ready(function(){
    /* 
    loadVideo(nameofvideo);
    */
    function loadVideo(name) {
        $('#vidcontainr').click(function () { 
        $(this).load("./vidthingies/" + name + ".txt"); 
        });
    }
});