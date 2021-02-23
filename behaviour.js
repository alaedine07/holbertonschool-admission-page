document.addEventListener("DOMContentLoaded", function(event) {
var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", function() {
    if (thumbnailElement.className == "small"){
        thumbnailElement.className = "big";
    } else if (thumbnailElement.className == "big")
        thumbnailElement.className = "small";
    });
});