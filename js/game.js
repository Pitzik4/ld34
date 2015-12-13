import * as Objects from './objects.js';
import * as World from './world.js';

export default function begin(game) {
  const { ent: world, overlay, boy, tree } = World.create(game);
  world.y = -World.height(0);
  game.color = 'skyblue';
}
