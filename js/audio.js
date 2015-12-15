const types = [
  { type: 'audio/ogg', ext: '.ogg' },
  { type: 'audio/mpeg', ext: '.mp3' },
  { type: 'audio/wav', ext: '.wav' }
];

export function create(name, volume, loop) {
  const tag = document.createElement('audio');
  tag.preload = 'auto';
  tag.volume = volume === undefined ? 1 : volume;
  tag.loop = !!loop;
  for(let i = 0, len = types.length; i < len; ++i) {
    const source = document.createElement('source');
    const { type, ext } = types[i];
    source.type = type;
    source.src = 'aud/' + name + ext;
    tag.appendChild(source);
  }
  return tag;
}

export function createSet(name, amt, volume) {
  const set = new Array(amt);
  for(let i = 0; i < amt; ++i) {
    set[i] = create(name+'-'+i, volume);
  }
  let last = -1;
  return {
    play() {
      let n;
      while((n = (Math.random()*amt)|0) === last) {  }
      set[last = n].play();
    }
  }
}


export const stepGrass = createSet('step-grass', 3, 0.75);
export const stepWood = createSet('step-wood', 3, 0.75);
export const stepSnow = createSet('step-snow', 5, 0.1);

export const autumn = create('autumn', 1, true);
export const rain = create('rain', 0.6, true);
export const night = create('night', 1, true);
