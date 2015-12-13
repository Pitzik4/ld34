export function wrap(div, parentDiv) {
  let x, y, color, opacity = 1, transform, sprite, anim, flip = false;
  
  function align() {
    const xv = typeof x === 'number' && x !== 0 ? x + 'px' : x;
    const yv = typeof y === 'number' && y !== 0 ? y + 'px' : y;
    let style = '';
    if(xv) {
      style = 'left:'+xv;
    }
    if(yv) {
      style += ';bottom:'+yv;
    }
    if(color) {
      style += ';background-color:' + color;
    }
    if(opacity !== 1) {
      style += ';opacity:' + opacity;
    }
    if(transform) {
      style += ';transform:' + transform;
    }
    div.setAttribute('style', style);
  }
  
  const out = {
    child(x, y, sprite, anim) {
      const d = document.createElement('div');
      div.appendChild(d);
      const out = wrap(d, div);
      out.x = x || 0;
      out.y = y || 0;
      out.sprite = sprite;
      out.anim = anim;
      return out;
    },
    remove() {
      parentDiv.removeChild(div);
    },
    div: div
  };
  Object.defineProperty(out, 'x', {
    get() {
      return x;
    },
    set(v) {
      x = v;
      align();
    }
  });
  Object.defineProperty(out, 'y', {
    get() {
      return y;
    },
    set(v) {
      y = v;
      align();
    }
  });
  Object.defineProperty(out, 'color', {
    configurable: true,
    get() {
      return color;
    },
    set(v) {
      color = v;
      align();
    }
  });
  Object.defineProperty(out, 'opacity', {
    get() {
      return opacity;
    },
    set(v) {
      opacity = v;
      align();
    }
  });
  Object.defineProperty(out, 'transform', {
    get() {
      return transform;
    },
    set(v) {
      transform = v;
      align();
    }
  });
  Object.defineProperty(out, 'sprite', {
    get() {
      return sprite;
    },
    set(v) {
      if(sprite) {
        div.classList.remove('spr-'+sprite);
      }
      sprite = v;
      if(sprite) {
        div.classList.add('spr-'+sprite);
      }
    }
  });
  Object.defineProperty(out, 'anim', {
    get() {
      return anim;
    },
    set(v) {
      if(anim) {
        div.classList.remove('anim-'+anim);
      }
      anim = v;
      if(anim) {
        div.classList.add('anim-'+anim);
      }
    }
  });
  Object.defineProperty(out, 'flip', {
    get() {
      return flip;
    },
    set(v) {
      if(v === flip) return;
      if(flip = v) {
        div.classList.add('flip');
      } else {
        div.classList.remove('flip');
      }
    }
  });
  return out;
}
