import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {
    localStorage.setItem(`videoplayer-current-time`, JSON.stringify(data.seconds));
};

const throttleOnPlay = throttle(onPlay, 1000);

player.on('timeupdate', throttleOnPlay);

const savedTime = localStorage.getItem("videoplayer-current-time");
const parsedSavedTime = JSON.parse(savedTime);

player.setCurrentTime(parsedSavedTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
