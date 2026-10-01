const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
function handleSpeed(event) {
    // Get mouse position inside speed bar
    const y = event.pageY - speed.offsetTop;
    // Get height of speed bar
    const height = speed.offsetHeight;
    // Convert mouse position to percentage
    const percent = y / height;
    // Speed from 0.5x to 4x
    const min = 0.5;
    const max = 4;
    const playbackRate = percent * (max - min) + min;
    // Set video speed
    video.playbackRate = playbackRate;
    // Update speed bar height
    speedBar.style.height = `${percent * 100}%`;
    // Display speed
    speedBar.textContent = `${playbackRate.toFixed(2)}×`;
}

speed.addEventListener("mousemove", handleSpeed);