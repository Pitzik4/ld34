export function field(world) {
  return world.child(-3600, 0, 'field');
}
export function grass(world) {
  return world.child(-3600, 0, 'grass');
}
export function tree(world) {
  return world.child(-488, 464, 'tree');
}

export function boy(world) {
  const out = world.child(3230-3600, 473, 'boy');
  return out;
}
