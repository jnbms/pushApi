
const mainBoard = document.getElementsByClassName('ytd-channel-featured-content-renderer')
// console.log(mainBoard);
// console.log(mainBoard);
const thumbnail = document.getElementById('thumbnail');
console.log(thumbnail);
// thumbnail.remove();
const img = thumbnail.getElementsByTagName("yt-img-shadow")[0].children[0];
// const img = thumbnail.remove();
img.src = "./background.jpg";
console.log(img);