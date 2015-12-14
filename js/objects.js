import keys from './input.js';
import * as World from './world.js';

export function field(world, season) {
  return world.child(-3600, 0, 'field');
}
export function tree(world, season) {
  const out = world.child(-2488, 324, 'tree');
  if(season === 'winter') {
    out.anim = 'bare';
  } else if(season === 'autumn') {
    out.anim = 'autumn';
  }
}
export function end(world) {
  return world.child(2400, 230, 'end');
}

export function character(world, x, y, sprite, footstep1, footstep2) {
  const out = world.child(x, y, sprite);
  out.offsX = 50;
  let walkTime = 0;
  const update = out._update = (dt) => {
    const dir = out._direction();
    if(dir === 0 || (dir < 0 && out.x < -3000)) {
      out.anim = null;
      walkTime = 0;
    } else {
      const slope = World.slope(out.x);
      out.anim = 'walk';
      out.flip = dir > 0;
      out.x += dir * 40 * dt;
      out.y = World.platform(out.x);
      walkTime += dt;
      while(walkTime >= 0.75) {
        walkTime -= 0.75;
        if(out.x >= 570 && out.x < 1325 && footstep2) {
          footstep2.play();
        } else {
          footstep1.play();
        }
      }
    }
    if(out.__update) {
      out.__update(dt);
    }
  };
  out.cutscene = (func) => {
    out._update = func;
  };
  out.control = () => {
    out._update = update;
  };
  out.say = (text, time) => {
    const dbox = world.child(out.x, out.y+(out.anim==='sit'?125:out.div.clientHeight));
    const dialogue = dbox.child(0, 0, 'dialogue');
    dialogue.div.innerHTML = text.replace(/'/g, '&rsquo;');
    window.setTimeout(() => {
      dialogue.anim = 'out';
      window.setTimeout(() => {
        dbox.remove();
      }, 2000);
    }, time || 3000);
  };
  return out;
}

export function boy(world, main, footstep1, footstep2) {
  const out = character(world, -2320, 333, 'boy', footstep1, footstep2);
  out.cutscene();
  out.anim = 'sit';
  out.goingBack = false;
  out._direction = () => (main.x >= out.x - 140) - out.goingBack;
  out.__update = () => {
    if(!out.anim) {
      out.flip = main.x > out.x;
    }
  };
  return out;
}

export function main(world, sprite, footstep1, footstep2) {
  const out = character(world, -3000, World.platform(-3000), sprite, footstep1, footstep2);
  out._direction = () => (keys.right||keys.d) - (keys.left||keys.a);
  out.flip = true;
  return out;
}
