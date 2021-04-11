var images = [
    "http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg",
    "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/5hocydQ02QyLiZu25Fm7JR/058d1e2c1525a05e670fda56508da409/Flickr.jpg",
    "https://picjumbo.com/wp-content/uploads/the-golden-gate-bridge-sunset-1080x720.jpg"
];

var rightBtn = document.getElementById('right');
var leftBtn = document.getElementById('left');
var i = 0;
var time = 7500;

function setImage() {
    document.slide.src = images[i];
}
document.slide.src = images[i];

function slideImg() {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setImage();
    setTimeout('slideImg()', time);
};

window.onload = slideImg;

rightBtn.addEventListener('click', function () {
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setImage();
});

leftBtn.addEventListener('click', function () {
    if (i > 1) {
        i--;
    } else {
        i = images.length - 1;
    }
    setImage();
})