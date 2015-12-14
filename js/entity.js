export function wrap(div, parentDiv, parentChildren) {
  let x, y, color, opacity = 1, transform, sprite, anim, flip = false, children = [];
  let offsX = 0;
  
  function align() {
    const xv = typeof x === 'number' ? (x !== offsX ? (x-offsX) + 'px' : 0) : x;
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
      const out = wrap(d, div, children);
      children.push(out);
      out.x = x || 0;
      out.y = y || 0;
      out.sprite = sprite;
      out.anim = anim;
      return out;
    },
    remove() {
      parentDiv.removeChild(div);
      parentChildren.splice(parentChildren.indexOf(out), 1);
    },
    restart() {
      if(anim) {
        div.classList.remove('anim-'+anim);
        div.offsetWidth;
        div.classList.add('anim-'+anim);
      }
    },
    reverse() {
      div.classList.toggle('reverse');
      out.restart();
    },
    reflow() {
      div.offsetWidth;
    },
    update(dt) {
      if(out._update) {
        out._update(dt);
      }
      for(let i = 0; i < children.length; ++i) {
        children[i].update(dt);
      }
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
  Object.defineProperty(out, 'offsX', {
    get() {
      return offsX;
    },
    set(v) {
      offsX = v;
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
      div.classList.remove('reverse');
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
