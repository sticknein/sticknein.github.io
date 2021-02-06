//WFH: Work From Home series, QS: Quarantine Sessions series//
const WFH_17 = 'gR5N5j8xbH0';
const WFH_18 = 'oPm_tKQEY_k';
const WFH_21 = 'Ai-Vlfvbf14';
const WFH_24 = 'fJNvU1kiDWA';
const QS_1 = 'VQ15kYKsilk';
const QS_2 = '1rY5x6U2oHo';
const QS_3 = '7bolXtCzeHo';
const humanimal = 'Dzpdgnv66Vk';
const bedroom_set = 'COCrUY9XRYU'

let videos = [WFH_17, WFH_18, WFH_21, WFH_24, QS_1, QS_2, QS_3, humanimal, bedroom_set]

const button = document.getElementById('random-button')

button.onclick = function() {
    document.getElementById('iframe').src = "https://www.youtube.com/embed/" + videos[Math.floor(Math.random() * videos.length)];
}