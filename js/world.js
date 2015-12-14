import * as Objects from './objects.js';

export function height(x) {
  x /= 90;
  x = 3/((0.1*x)*(0.1*x)+3)+3/((0.5*x+2)*(0.5*x+2)+3)+1.5/((0.5*x-8)*(0.5*x-8)+3);
  return x * 90 + 304.435;
}

export function slope(x) {
  x /= 90;
  return -(1.5*x+6)/(((0.5*x+2)*(0.5*x+2)+3)*((0.5*x+2)*(0.5*x+2)+3))-(0.75*x-12)/(((0.5*x-8)*(0.5*x-8)+3)*((0.5*x-8)*(0.5*x-8)+3))-0.06*x/((0.01*x*x+3)*(0.01*x*x+3));
}

export function platform(x) {
  return height(x) - Math.abs(slope(x) * 50);
}

function nop() {  }
export function create(game, age) {
  const wrapper = game.child();
  wrapper.x = wrapper.y = '50%';
  
  const world = wrapper.child();
  
  const tree = Objects.tree(world);
  const field = Objects.field(world);
  const end = Objects.end(world);
  
  const overlay = game.child();
  overlay.sprite = 'overlay';
  overlay.color = 'black';
  window.setTimeout(() => overlay.opacity = 0, 1500); // FOR-RELEASE make this longer
  
  const main = Objects.main(world, age);
  const boy = Objects.boy(world, main);
  
  const triggers = [];
  
  let onstop, onreverse;
  
  let time, stopped, reversed;
  function update(dt) {
    if(time === undefined) {
      time = dt;
      dt = 1/60;
    } else {
      const t = dt;
      dt -= time;
      if(dt > 100) {
        dt = 100;
      }
      dt *= 0.001;
      time = t;
    }
    world.update(dt);
    if(triggers.length && main.x >= triggers[0].x) {
      const t = triggers.shift();
      if(t.func) {
        t.func();
      } else if(t.boy) {
        boy.say(t.boy, t.length);
      } else if(t.main) {
        main.say(t.main, t.length);
      }
    } else {
      const dir = main._direction();
      if(dir === 0) {
        if(stopped === undefined) {
          stopped = time;
        } else if(stopped !== true && time - stopped >= 5000 && onstop) {
          stopped = true;
          onstop();
        }
      } else {
        stopped = undefined;
        if(reversed ? main.x >= boy.x - 120 : main.x <= boy.x - 180) {
          reversed = !reversed;
          if(onreverse) {
            onreverse();
          }
        }
      }
    }
    world.x = -main.x;
    world.y = -height(main.x)-100;
    window.requestAnimationFrame(update);
  }
  window.requestAnimationFrame(update);
  
  return {
    ent: world,
    update: nop,
    remove() {
      wrapper.remove();
      overlay.remove();
    },
    fadeOut(cb, color) {
      if(color) {
        overlay.sprite = null;
        overlay.color = color;
        overlay.reflow();
        overlay.sprite = 'overlay';
      }
      overlay.opacity = 1;
      if(cb) {
        window.setTimeout(cb, 5000);
      }
    },
    overlay: overlay,
    game: game,
    boy: boy,
    main: main,
    triggers: triggers,
    tree: tree,
    onStop(func) {
      onstop = func;
    },
    onReverse(func) {
      onreverse = func;
    }
  };
}
