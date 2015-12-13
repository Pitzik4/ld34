import * as Objects from './objects.js';
import * as World from './world.js';

export default function begin(game) {
  const { ent: world, overlay, boy, tree } = World.create(game);
  world.x = 250;
  world.y = -World.height(-250)-100;
  game.color = 'skyblue';
  window.setTimeout(() => {
    const dbox = world.child(boy.x, boy.y+110);
    const dialogue = dbox.child(0, 0, 'dialogue');
    dialogue.div.innerHTML = "I just wish there was someone else here&hellip;";
  }, 3000);
}
