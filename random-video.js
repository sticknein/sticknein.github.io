//WFH: Work From Home series, QS: Quarantine Sessions series//
const wfh17 = 'gR5N5j8xbH0';
const wfh18 = 'oPm_tKQEY_k';
const wfh21 = 'Ai-Vlfvbf14';
const wfh4 = 'fJNvU1kiDWA';
const qs1 = 'VQ15kYKsilk';
const qs2 = '1rY5x6U2oHo';
const qs3 = '7bolXtCzeHo';
const humanimal = 'Dzpdgnv66Vk';
const bedroom_set = 'COCrUY9XRYU'

let videos = [WFH_17, WFH_18, WFH_21, WFH_24, qs_1, QS_2, QS_3, bedroom_set]

const button = document.getElementById('random-button')

button.onclick = function() {
    let currentVideo = document.getElementById('iframe').src;
    while (randomVideo !== currentVideo) {
        let randomVideo = "https://www.youtube.com/embed/" + videos[Math.floor(Math.random() * videos.length)];
    document.getElementById('iframe').src = randomVideo;
    }   
}

