import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

const onPlay = function (data) {
  console.log('played the video!', data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
