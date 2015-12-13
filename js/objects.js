export function field(world) {
  return world.child(-3600, 0, 'field');
}
export function grass(world) {
  return world.child(-3600, 0, 'grass');
}
export function tree(world) {
  return world.child(-488, 464, 'tree');
}

export function character(world, x, y, sprite) {
  const out = world.child(x, y, sprite);
  out.transform = 'translateX(-50%)';
  return out;
}

export function boy(world) {
  const out = character(world, -320, 473, 'boy');
  out.anim = 'sit';
  return out;
}
