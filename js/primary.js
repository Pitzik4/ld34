import keyboard from 'keyboardjs';

import * as Entity from './entity.js';


const gameDiv = document.getElementById('game');
const width = 640, height = 360;

const onResize = () => {
  const aspect = width / height;
  const wwidth = window.innerWidth, wheight = window.innerHeight;
  let w = wheight * aspect, h;
  if(w > wwidth) {
    w = wwidth; h = wwidth / aspect;
  } else h = wheight;
  gameDiv.setAttribute('style', 'transform:translate('+(wwidth-width)*0.5+'px,'+(wheight-height)*0.5+'px) '+
    'scale('+w/width+','+h/height+');');
};
onResize();
window.addEventListener('resize', onResize);


const game = Entity.wrap(gameDiv);
