export const setImmediate = window.setImmediate || ((f) => {
  window.setTimeout(f, 0);
});
