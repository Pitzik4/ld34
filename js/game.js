import * as Objects from './objects.js';
import * as World from './world.js';

function reverse(main, boy, onReverse, text) {
  text = text || "Huh? Where are you going?";
  function a() {
    boy.say(text, 4000);
    boy.goingBack = true;
    onReverse(b);
  }
  function b() {
    boy.goingBack = false;
    onReverse(a);
  }
  return a;
}
function stop(boy, text1, text2) {
  text1 = text1 || "Want to stop for a bit?";
  if(text2 !== false) {
    text2 = text2 || "Okay.";
  }
  const say = boy.say;
  return () => {
    say(text1, 4000);
    if(text2) {
      const pos = boy.x;
      window.setTimeout(() => {
        if(boy.x === pos) {
          say(text2, 4000);
        }
      }, 8000);
    }
  };
}

export default function kid(game) {
  const { ent: world, overlay, boy, main, triggers, tree, fadeOut, onStop, onReverse } = World.create(game, 'kid');
  game.color = 'skyblue';
  main.x = -420; main.y = World.platform(main.x);
  triggers.push(
    {
      x: -410,
      func() {
        main.cutscene();
        main.anim = null;
        let time = 0;
        window.setTimeout(() => {
          boy.anim = 'stand';
        }, time += 2500);
        window.setTimeout(() => {
          boy.say("...", 3000);
        }, time += 5000);
        window.setTimeout(() => {
          boy.say("A... are you really...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'stressed';
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'sob';
        }, time += 500);
        window.setTimeout(() => {
          boy.say("I... thought I would be alone...", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          boy.say("...forever...", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Ha... don't be such a baby. You're 12 years old.", 5000);
        }, time += 8000);
        window.setTimeout(() => {
          main.anim = 'sad';
          boy.anim = 'stressed-full';
        }, time += 8000);
        window.setTimeout(() => {
          main.say("You've only been here a day.", 3000);
        }, time += 1000);
        window.setTimeout(() => {
          boy.anim = 'stressed';
          boy.reverse();
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("...I'm dead.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.say("...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("Right?", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.say("This is the afterlife.", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.flip = true;
          boy.x += 10;
        }, time += 7000);
        window.setTimeout(() => {
          boy.say("It's so much smaller...", 4000);
        }, time += 1000);
        window.setTimeout(() => {
          boy.say("...and lonelier than I imagined.", 4000);
        }, time += 7000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 7000);
        window.setTimeout(() => {
          main.say("Don't worry. I'm here now.", 4000);
        }, time += 2000);
        window.setTimeout(() => {
          main.reverse();
          main.say("I can visit you...", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          main.reverse();
          main.say("...right here in my dreams.", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Nothing has to change.", 4000);
        }, time += 7000);
        window.setTimeout(() => {
          main.say("Ever.", 4000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.flip = false;
          boy.x -= 10;
        }, time += 7000);
        window.setTimeout(() => {
          boy.say("That's easy for you to say.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("What about me?", 3000);
        }, time += 5000);
        window.setTimeout(() => {
          boy.anim = 'stressed';
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("What about <em>my</em> dreams?", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.anim = 'determined';
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Don't worry.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.anim = 'determined-out';
          main.say("I'll live for both of us.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("With your dreams <em>and</em> my dreams...", 4000);
        }, time += 5000);
        window.setTimeout(() => {
          main.anim = 'persuasive';
          main.say("We'll be unstoppable!", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I'll write books and put your name on them!", 3000);
        }, time += 5000);
        window.setTimeout(() => {
          main.say("And movies and, and video games!", 3000);
        }, time += 5000);
        window.setTimeout(() => {
          main.say("We'll be famous together!", 2000);
        }, time += 5000);
        window.setTimeout(() => {
          main.say("The world will remember you forever!", 3000);
        }, time += 4000);
        window.setTimeout(() => {
          main.reverse();
          main.say("I, I, I promise!", 4000);
        }, time += 5000);
        window.setTimeout(() => {
          boy.reverse();
        }, time += 8000);
        window.setTimeout(() => {
          boy.say("Thanks.", 4000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("We've got some planning to do, huh?", 4000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.anim = 'gesture';
          boy.say("Want me to show you around this boring field?", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Sure. I have to leave soon anyway...", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          main.say("The way out should be out there somewhere.", 4000);
        }, time += 5000);
        window.setTimeout(() => {
          boy.reverse();
        }, time += 3000);
        window.setTimeout(() => {
          boy.say("Oh.", 3000);
        }, time += 4000);
        window.setTimeout(() => {
          boy.say("Okay... well, follow me, then.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.control();
          main.control();
          onReverse(reverse(main, boy, onReverse));
        }, time += 4000);
      }
    },
    { x: -400,
      func() {
        onStop(stop(boy));
      }
    },
    { x: -100,
      
    }
  );
}
