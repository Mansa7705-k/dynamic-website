
document.getElementById("time").innerHTML =
    "Current Date & Time: " + new Date().toLocaleString();


const images = [
    "https://picsum.photos/400/200?1",
    "https://picsum.photos/400/200?2",
    "https://picsum.photos/400/200?3",
    "https://picsum.photos/400/200?4",
    "https://picsum.photos/400/200?5"
];

let index = 0;
const carouselImage = document.getElementById("carouselImage");

setInterval(() => {
    index = (index + 1) % images.length;
    carouselImage.src = images[index];
}, 2000);
