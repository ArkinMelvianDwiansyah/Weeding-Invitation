var x = document.getElementById("myAudio");
function playAudio() {
    x.play();
}

function show() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('btnID')
        .style.display = "none";
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('linkmaps')
        .style.display = "block";
    document.getElementById('image1')
        .style.display = "block";
    document.getElementById('image2')
        .style.display = "block";
    document.getElementById('image3')
        .style.display = "block";
    document.getElementById('image4')
        .style.display = "block";
    document.getElementById('cover')
        .style.display = "none";
    document.getElementById('name')
        .style.display = "none";

}