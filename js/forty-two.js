import * as Objects from './objects.js';
import * as World from './world.js';
import { reverse, stop, lookAt, theEnd } from './game.js';


export default function fortyTwo(game) {
  const { ent: world, overlay, boy, main, triggers, tree, fadeOut, onStop, onReverse, remove, end } = World.create(game, 'adult', 'night');
  end.x = 2900;
  //main.x = -2420; boy.x = main.x = 2600; // FOR-RELEASE remove this
  main.y = World.platform(main.x);
  let x = -2400;
  triggers.push(
    {
      x: x - 10,
      func() {
        main.cutscene();
        main.anim = null;
        let time = -4000;
        /*FOR-RELEASE*/
        time = 0;
        window.setTimeout(() => {
          boy.say("Hi.", 3000);
        }, time += 5000);
        window.setTimeout(() => {
          boy.anim = 'look-up';
        }, time += 9000);
        window.setTimeout(() => {
          boy.say("So... How long's it been?", 3000);
        }, time += 2500);
        window.setTimeout(() => {
          main.say("My son is dead.", 4000);
        }, time += 12000);
        window.setTimeout(() => {
          boy.say("Oh.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.say("He was twelve years old, and he was just like you.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.say("Let's walk.", 3000);
        }, time += 12000);
        window.setTimeout(() => {
          boy.say("Okay.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          boy.anim = 'stand-up';
        }, time += 8000);
        /**/
        window.setTimeout(() => {
          boy.control();
          main.control();
          onReverse(reverse(main, boy, onReverse));
        }, time += 3000);
      }
    },
    { x: x,
      func() {
        onStop(stop(boy));
      }
    },
    
    { x: x += 400,
      main: "A twelve-year-old and a forty-two-year-old..."
    },
    { x: x += 300,
      main: "Aren't so different."
    },
    { x: x += 300,
      main: "Living. Learning. Trying to have fun."
    },
    { x: x += 200,
      main: "Trying to make the life ahead of them..."
    },
    { x: x += 200,
      main: "What they want it to be."
    },
    { x: x += 400,
      main: "After all these years, I still have so much to learn about life."
    },
    { x: x += 300,
      main: "I'll never stop learning."
    },
    { x: x += 300,
      main: "Because I'll never find the right answer. There isn't one."
    },
    { x: x += 300,
      main: "There are always more angles."
    },
    { x: x += 300,
      main: "There are always more ways to look at it."
    },
    { x: x += 400,
      main: "I don't think anything that happened in the past matters now."
    },
    { x: x += 300,
      main: "My life is in the future. That's what matters."
    },
    { x: x += 400,
      main: "There will always be things that I want."
    },
    { x: x += 300,
      main: "And even though there's no ultimate answer to life..."
    },
    { x: x += 300,
      main: "At the end of the day, I can make my own answer."
    },
    
    { x: x += 400,
      func() {
        onStop(); onReverse();
        main.cutscene();
        boy.cutscene(lookAt(boy, main));
        main.anim = boy.anim = null;
        main.flip = true;
        let time = 0;
        /*FOR-RELEASE*/
        window.setTimeout(() => {
          main.say("All I have to do is ask myself...", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.say("What do I really want?", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Do I want to write a comic book?", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I can.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Do I want to be a scientist?", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I can.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Do I want to stay here?", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I can.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("And if that's what I want...", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("That's okay.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("This is my last visit.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.say("What do <em>you</em> want?", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          boy.anim = 'sad';
        }, time += 10000);
        window.setTimeout(() => {
          boy.say("I don't want to be alone forever...", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          boy.say("But...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.reverse();
        }, time += 8000);
        window.setTimeout(() => {
          boy.say("I'll be okay.", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          boy.say("Do what you want to do.", 3000);
        }, time += 6000);
        /* */
        window.setTimeout(() => {
          main.control();
          onReverse(() => {
            onReverse();
            main.cutscene();
            world.noFollow = true;
            main.anim = null;
            boy.flip = false;
            let time = -5000;
            /* FOR-RELEASE */
            time = 0;
            window.setTimeout(() => {
              main.say("I want...", 3000);
            }, time += 2000);
            window.setTimeout(() => {
              main.say("...to walk back to the tree.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.control();
              main._direction = () => -1;
            }, time += 8000);
            window.setTimeout(() => {
              main.say("Let's go.", 3000);
            }, time += 2000);
            /**/
            window.setTimeout(() => {
              fadeOut(theEnd(remove, game));
            }, time + 5000);
            window.setTimeout(() => {
              boy.say("Okay.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              boy.control();
              boy._direction = () => -1;
            }, time += 1000);
          });
        }, time += 1000);
      }
    },
    { x: x += 300,
      boy: "I'll miss you."
    },
    { x: x += 150,
      main: "I'll miss you, too."
    },
    { x: 3850,
      func: theEnd(remove, game)
    }
  );
}
