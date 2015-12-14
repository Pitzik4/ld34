import keyboard from 'keyboardjs';

const keys = {
  left: false,
  right: false,
  a: false,
  d: false
};

export default keys;

keyboard.bind('left', () => { keys.left = true; }, () => { keys.left = false; });
keyboard.bind('right', () => { keys.right = true; }, () => { keys.right = false; });
keyboard.bind('a', () => { keys.a = true; }, () => { keys.a = false; });
keyboard.bind('d', () => { keys.d = true; }, () => { keys.d = false; });
