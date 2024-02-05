function toggleImage() {
    var x = document.getElementById("mobilebottom");
    var imageElement = document.getElementById("hamburgericon");
    if (x.style.display === "block") {
        x.style.display = "none";
        imageElement.src = "/images/hamburger.png";
    } else {
        x.style.display = "block";
        imageElement.src = "/images/close.png";
    }
}