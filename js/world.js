import * as Objects from './objects.js';
import * as Audio from './audio.js';

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
export function create(game, age, season) {
  const wrapper = game.child();
  wrapper.x = wrapper.y = '50%';
  
  const world = wrapper.child();
  
  let ambience;
  if(season === 'summer') {
    game.color = 'skyblue';
  } else if(season === 'autumn') {
    game.color = '#ccc';
    ambience = Audio.autumn;
    ambience.play();
  } else if(season === 'winter') {
    game.color = '#ddd';
  } else if(season === 'spring') {
    game.color = '#222';
    ambience = Audio.rain;
    ambience.play();
    world.div.classList.add('downpour');
  } else if(season === 'night') {
    game.color = '#030303';
    ambience = Audio.night;
    ambience.play();
    world.div.classList.add('night');
    wrapper.div.classList.add('wrapper-night');
  }
  
  const tree = Objects.tree(world, season);
  const field = Objects.field(world, season);
  const end = Objects.end(world);
  const snow = season === 'winter' || season === 'spring' ? Objects.downpour(world, season) : undefined;
  const pond = season === 'winter' ? Objects.snowyPond(world) : undefined;
  
  const overlay = game.child();
  overlay.sprite = 'overlay';
  overlay.color = 'black';
  window.setTimeout(() => overlay.opacity = 0, 2000);
  
  let footstep1 = Audio.stepGrass, footstep2 = Audio.stepWood;
  if(season === 'winter') {
    footstep1 = footstep2 = Audio.stepSnow;
  }
  const main = Objects.main(world, age, footstep1, footstep2);
  const boy = Objects.boy(world, main, footstep1, footstep2);
  
  const triggers = [];
  
  let onstop, onreverse;
  
  let time, stopped, reversed, animationFrame;
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
    if(!world.noFollow) {
      world.x = -main.x;
      world.y = -height(main.x)-100;
    }
    animationFrame = window.requestAnimationFrame(update);
  }
  animationFrame = window.requestAnimationFrame(update);
  
  return {
    ent: world,
    update: nop,
    remove() {
      wrapper.remove();
      overlay.remove();
      if(ambience) {
        ambience.pause();
      }
      window.cancelAnimationFrame(animationFrame);
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
        window.setTimeout(cb, 20000);
      }
    },
    overlay: overlay,
    game: game,
    boy: boy,
    main: main,
    triggers: triggers,
    tree: tree,
    end: end,
    onStop(func) {
      onstop = func;
    },
    onReverse(func) {
      onreverse = func;
    }
  };
}
