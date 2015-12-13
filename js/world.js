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

function nop() {  }
export function create(game) {
  const wrapper = game.child();
  wrapper.x = wrapper.y = '50%';
  
  const world = wrapper.child();
  
  const tree = Objects.tree(world);
  const field = Objects.field(world);
  const grass = Objects.grass(world);
  
  const overlay = game.child();
  overlay.sprite = 'overlay';
  
  const boy = Objects.boy(world);
  
  return {
    ent: world,
    update: nop,
    remove() {
      wrapper.remove();
      overlay.remove();
    },
    overlay: overlay,
    game: game,
    boy: boy,
    tree: tree
  };
}
