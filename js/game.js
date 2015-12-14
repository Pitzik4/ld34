import * as Objects from './objects.js';
import * as World from './world.js';

export function reverse(main, boy, onReverse, text) {
  text = text || "Huh? Where are you going?";
  function a() {
    boy.say(text, 4000);
    boy.goingBack = true;
    onReverse(b);
  }
  function b() {
    boy.goingBack = false;
    onReverse(a);
  }
  return a;
}
export function stop(boy, text1, text2) {
  text1 = text1 || "Want to stop for a bit?";
  if(text2 !== false) {
    text2 = text2 || "Okay.";
  }
  const say = boy.say;
  return () => {
    say(text1, 4000);
    if(text2) {
      const pos = boy.x;
      window.setTimeout(() => {
        if(boy.x === pos) {
          say(text2, 4000);
        }
      }, 8000);
    }
  };
}

export function lookAt(boy, main) {
  return () => {
    boy.flip = main.x > boy.x;
  };
}

export function theEnd(remove, game) {
  return () => {
    remove();
    game.color = 'black';
  };
}
