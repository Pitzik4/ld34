export function wrap(div, parentDiv) {
  let x, y, sprite, anim;
  
  function align() {
    div.setAttribute('style', 'left:'+x+'px;top:'+y+'px;');
  }
  
  const out = {
    child(x, y) {
      const d = document.createElement('div');
      div.appendChild(d);
      const out = wrap(d, div);
      out.x = x || 0;
      out.y = y || 0;
      return out;
    },
    remove() {
      parentDiv.removeChild(div);
    }
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
  return out;
}
