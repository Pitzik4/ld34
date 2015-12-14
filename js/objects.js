import keys from './input.js';
import * as World from './world.js';

export function field(world) {
  return world.child(-3600, 0, 'field');
}
export function tree(world) {
  return world.child(-488, 464, 'tree');
}

export function character(world, x, y, sprite) {
  const out = world.child(x, y, sprite);
  out.offsX = 50;
  const update = out._update = (dt) => {
    const dir = out._direction();
    if(dir === 0 || (dir < 0 && out.x < -1000)) {
      out.anim = null;
    } else {
      const slope = World.slope(out.x);
      out.anim = 'walk';
      out.flip = dir > 0;
      out.x += dir * 40 * dt;
      out.y = World.platform(out.x);
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
    const dbox = world.child(out.x, out.y+out.div.clientHeight);
    const dialogue = dbox.child(0, 0, 'dialogue');
    dialogue.div.innerHTML = text;
    window.setTimeout(() => {
      dialogue.anim = 'out';
      window.setTimeout(() => {
        dbox.remove();
      }, 2000);
    }, time || 4000);
  };
  return out;
}

export function boy(world, main) {
  const out = character(world, -320, 473, 'boy');
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

export function main(world, sprite) {
  const out = character(world, -1000, World.platform(-1000), sprite);
  out._direction = () => (keys.right||keys.d) - (keys.left||keys.a);
  out.flip = true;
  return out;
}
