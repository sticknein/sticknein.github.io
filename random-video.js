//wfhXX: Work From Home series, qsX: Quarantine Sessions series//
const wfh17 = 'gR5N5j8xbH0';
const wfh18 = 'oPm_tKQEY_k';
const wfh21 = 'Ai-Vlfvbf14';
const wfh24 = 'fJNvU1kiDWA';
const qs1 = 'VQ15kYKsilk';
const qs2 = '1rY5x6U2oHo';
const qs3 = '7bolXtCzeHo';
const humanimal = 'Dzpdgnv66Vk';
const bedroomSet = 'COCrUY9XRYU'

let videos = [wfh17, wfh18, wfh21, wfh24, qs1, qs2, qs3, bedroomSet]

const button = document.getElementById('random-button')

button.onclick = function() {
    let currentVideo = document.getElementById('iframe').src;
    let randomVideo = "https://www.youtube.com/embed/" + videos[Math.floor(Math.random() * videos.length)];
    if (randomVideo !== currentVideo) {
        document.getElementById('iframe').src = randomVideo;
    } else {
        let randomVideo = "https://www.youtube.com/embed/" + videos[Math.floor(Math.random() * videos.length)];
        document.getElementById('iframe').src = randomVideo;
    }
}