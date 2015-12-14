import * as Objects from './objects.js';
import * as World from './world.js';
import { reverse, stop, lookAt, theEnd } from './game.js';
import teen from './teen.js';


export default function kid(game) {
  const { ent: world, overlay, boy, main, triggers, tree, fadeOut, onStop, onReverse, remove, end } = World.create(game, 'kid', 'summer');
  end.x = 2400;
  //main.x = -2420; boy.x = main.x = 2400;
  main.y = World.platform(main.x);
  let x = -2400;
  triggers.push(
    {
      x: x - 10,
      func() {
        main.cutscene();
        main.anim = null;
        let time = -3000;
        time = 0;
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
          main.say("Ha... don't be such a baby. You're twelve years old.", 5000);
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
          boy.reverse();
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
    { x: x,
      func() {
        onStop(stop(boy));
      }
    },
    { x: x += 200,
      main: "We've only got one life between us now, huh?"
    },
    { x: x += 200,
      main: "Better make it count."
    },
    { x: x += 200,
      boy: "Don't worry. I've got plans. Big ones."
    },
    { x: x += 200,
      main: "Nothing I can't handle! Your wish is my command."
    },
    { x: x += 200,
      boy: "You know that comic we were writing together?"
    },
    { x: x += 200,
      main: "Dingbat Fred?"
    },
    { x: x += 200,
      boy: "I always wanted to make it into a real comic book."
    },
    { x: x += 200,
      main: "Hey, I was planning on doing that anyway!"
    },
    { x: x += 200,
      main: "Heh. If all our plans are the same, this will be easy!"
    },
    { x: x += 200,
      boy: "I mean a <em>real</em> comic book!"
    },
    { x: x += 200,
      boy: "With a movie! And millions of nerds arguing over whether it's canon!"
    },
    { x: x += 200,
      main: "Well, yeah! Duh!"
    },
    { x: x += 200,
      boy: "Ha! Seriously, though..."
    },
    { x: x += 200,
      boy: "You really think you can make it happen?"
    },
    { x: x += 200,
      main: "I <em>know</em> I can. What else?"
    },
    { x: x += 200,
      boy: "Okay, well, comics are one thing..."
    },
    { x: x += 200,
      boy: "But for my day job, I wanted to be a scientist!"
    },
    { x: x += 200,
      boy: "Quantum physics is <em>awesome!</em>"
    },
    { x: x += 200,
      main: "Oh, yeah! I love quantum physics!"
    },
    { x: x += 200,
      boy: "You have to discover something revolutionary for me!"
    },
    { x: x += 200,
      boy: "I think the world's due for another Einstein, don't you?"
    },
    { x: x += 200,
      main: "No problem! I can't wait!"
    },
    { x: x += 200,
      main: "So, that's it for now? We can talk again later."
    },
    { x: x += 200,
      boy: "Time to go?"
    },
    { x: x += 200,
      func() {
        onStop(); onReverse();
        main.cutscene();
        boy.cutscene(lookAt(boy, main));
        main.anim = boy.anim = null;
        main.flip = true;
        let time = 0;
        window.setTimeout(() => {
          main.say("Yeah. Don't worry, I'll be back.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.anim = 'sad';
          boy.say("But you just got here...", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("I wish you didn't have to leave. I'm so alone here.", 4000);
        }, time += 7000);
        window.setTimeout(() => {
          main.say("Well, I don't <em>have</em> to leave.", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.reverse();
        }, time + 4000);
        window.setTimeout(() => {
          main.say("But if I don't leave now...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I'll never be able to.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.anim = 'determined';
          main.say("And how can I make our dreams come true if I'm stuck here?", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          main.anim = 'determined-out';
          boy.say("Okay.", 4000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.say("Have fun living. Heh.", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.say("Come back soon.", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          main.say("I will.", 3000);
          main.control();
          onReverse(() => {
            let time = 0;
            main.cutscene();
            main.anim = null;
            window.setTimeout(() => {
              main.say("No... I won't.", 3000);
            }, time += 2000);
            window.setTimeout(() => {
              boy.say("Wh-what?", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.flip = true;
            }, time + 4000);
            window.setTimeout(() => {
              main.say("I'm not leaving.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I'll stay right here. Forever.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("With you.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              boy.say("Why?", 4000);
            }, time += 6000);
            window.setTimeout(() => {
              main.anim = 'sad';
              main.say("Because I don't want you to be alone again.", 3000);
            }, time += 7000);
            window.setTimeout(() => {
              main.say("That's what's important to me.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.reverse();
            }, time + 4000);
            window.setTimeout(() => {
              main.say("Not comic books... not being famous.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("You.", 4000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I'll never leave you.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              boy.anim = 'stressed';
            }, time += 7000);
            window.setTimeout(() => {
              boy.say("If that's what you want... then...", 3000);
            }, time += 3000);
            window.setTimeout(() => {
              fadeOut(theEnd(remove, game));
            }, time + 5000);
            window.setTimeout(() => {
              boy.say("Thank you.", 3000);
            }, time += 6000);
          });
        }, time += 6000);
      }
    },
    { x: x += 200,
      main: "So long!"
    },
    { x: x += 100,
      boy: "So long."
    },
    { x: 3350,
      func() {
        remove();
        teen(game);
      }
    }
  );
}
