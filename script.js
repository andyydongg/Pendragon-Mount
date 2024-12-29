function playVideo() {
    // Hide the image
    document.getElementById("carImage").style.display = "none";
    // Show and play the video
    var video = document.getElementById("carVideo");
    video.style.display = "block";
    video.play();
}

function stopVideo() {
    // Stop and hide the video
    var video = document.getElementById("carVideo");
    video.pause();
    video.currentTime = 0;
    video.style.display = "none";
    // Show the image
    document.getElementById("carImage").style.display = "block";
}
