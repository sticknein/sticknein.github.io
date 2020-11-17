//WFH: Work From Home series, QS: Quarantine Sessions series//
const WFH_8 = 'JUTPihcrSFw';
const QS_1 = 'VQ15kYKsilk';
const QS_2 = '1rY5x6U2oHo';
const QS_3 = '7bolXtCzeHo';
const humanimal = 'Dzpdgnv66Vk';
const bedroom_set = 'COCrUY9XRYU'

let videos = [WFH_8, QS_1, QS_2, QS_3, humanimal, bedroom_set]

let button = document.getElementById('random-button')

button.onclick = function() {
    document.getElementById('iframe').src = "https://www.youtube.com/embed/" + videos[Math.floor(Math.random() * videos.length)];
}


