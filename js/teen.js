import * as Objects from './objects.js';
import * as World from './world.js';
import { reverse, stop, lookAt, theEnd } from './game.js';
import adult from './adult.js';


export default function teen(game) {
  const { ent: world, overlay, boy, main, triggers, tree, fadeOut, onStop, onReverse, remove, end } = World.create(game, 'teen', 'autumn');
  end.x = 2900;
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
          boy.say("...", 4000);
        }, time += 5000);
        window.setTimeout(() => {
          boy.say("I thought you'd never come back.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.anim = 'sad';
          main.say("I'm sorry.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I thought I would dream about you again sooner.", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("...The very next night, I thought.", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          main.reverse();
        }, time + 4000);
        window.setTimeout(() => {
          main.say("I... was pretty dumb when I was twelve.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("How long's it been?", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Four years.", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.anim = 'look-up';
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("Oh.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.anim = 'stand-up';
        }, time += 7000);
        window.setTimeout(() => {
          boy.say("Well, that's okay.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("I'm just glad you're here now.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("I don't have to be alone anymore.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("I don't...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'stressed';
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'sob';
        }, time += 500);
        window.setTimeout(() => {
          boy.say("Thank you...", 3000);
        }, time += 4000);
        window.setTimeout(() => {
          boy.say("Thank you... for coming back...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("I missed you.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.anim = 'solemn';
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I missed you, too.", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          boy.anim = 'stressed-full';
        }, time + 3000);
        window.setTimeout(() => {
          main.say("You... you have no idea.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Since you died, I...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I haven't made any new friends.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("You were all I had...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I feel so lost and... and...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("So alone...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("There's no one out there like you.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("No one...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.reverse();
          main.say("No one like me.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          boy.anim = 'stressed';
          boy.reverse();
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Come on. Let's get caught up.", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          boy.say("Okay.", 3000);
        }, time += 6000);
        /**/
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
      main: "I'm in college now."
    },
    { x: x += 200,
      boy: "Ha ha..."
    },
    { x: x += 200,
      boy: "I knew you'd be in college by sixteen."
    },
    { x: x += 200,
      main: "Heh. Me, too."
    },
    { x: x += 200,
      main: "You'd love calculus. It's a lot of fun."
    },
    { x: x += 100,
      boy: "I know a bit of calculus, actually."
    },
    { x: x += 200,
      main: "Of course. But do you know integrals?"
    },
    { x: x += 200,
      boy: "...Heh. No."
    },
    { x: x += 200,
      main: "You'd love integrals."
    },
    { x: x += 200,
      main: "You were always better at math than me."
    },
    { x: x += 100,
      boy: "No! You were at <em>least</em> as good as me."
    },
    { x: x += 200,
      main: "I didn't know any calculus when I was twelve."
    },
    
    
    
    { x: x += 400,
      boy: "How's Dingbat Fred going?"
    },
    
    
    
    { x: x += 400,
      main: "Dingbat Fred..."
    },
    { x: x += 200,
      main: "I... I don't know..."
    },
    { x: x += 200,
      main: "I've had other ideas."
    },
    { x: x += 200,
      main: "Dingbat Fred was fun, but..."
    },
    { x: x += 200,
      main: "You live. You learn."
    },
    { x: x += 200,
      main: "You can't hold on to the same dreams your whole life."
    },
    { x: x += 200,
      main: "But I promise I'll make great things."
    },
    { x: x += 200,
      main: "Things you'd love."
    },
    { x: x += 200,
      boy: "Okay."
    },
    { x: x += 200,
      boy: "I trust you, my wise sixteen-year-old friend."
    },
    { x: x += 200,
      main: "Heh."
    },
    
    { x: x += 200,
      func() {
        onStop(); onReverse();
        main.cutscene();
        boy.cutscene();
        main.anim = boy.anim = null;
        main.flip = true;
        let time = 0;
        window.setTimeout(() => {
          boy.say("...", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("Is it really time for you to go?", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.anim = 'solemn';
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I'm sorry.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.say("I've been realizing... there's a lot of life ahead of me.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.reverse();
          main.say("I'll visit you again. I swear.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'stressed';
        }, time += 8000);
        window.setTimeout(() => {
          boy.anim = 'sob';
        }, time += 500);
        window.setTimeout(() => {
          boy.say("You... were only here a few minutes...", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          boy.say("Please don't go...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("Please... I... I can't be alone anymore...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("Don't leave me here...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'stressed-full';
          boy.say("You don't have to go. You said so...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'stressed';
          boy.reverse();
        }, time + 4000);/* */
        window.setTimeout(() => {
          boy.say("Please stay here. Stay with me.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          if(boy.flip) {
            boy.x -= 10;
          }
          boy.flip = false;
        }, time + 4000);
        window.setTimeout(() => {
          boy.say("Turn around and we can walk back to the tree.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'sad';
          boy.say("I can't walk back alone. I'll... I'll...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("...", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.control();
          onReverse(() => {
            let time = 0;
            main.cutscene();
            main.anim = null;
            window.setTimeout(() => {
              main.say("You're right.", 3000);
            }, time += 2000);
            window.setTimeout(() => {
              boy.reverse();
            }, time + 4000);
            window.setTimeout(() => {
              boy.say("...Really?", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I don't want to go back.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I don't want to finish school.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I don't want to get a job.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I don't want to be another face on the street.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I...", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.anim = 'solemn';
            }, time + 4000);
            window.setTimeout(() => {
              main.say("I just want to feel like I did...", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("When we were young and playful and...", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.reverse();
              main.say("When we had each other.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I've seen what the world is like without you, and... and...", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.flip = true;
            }, time += 4000);
            window.setTimeout(() => {
              main.say("I don't want to live there.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I just want to stay here with you.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("Forever.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I don't need anything else.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.reverse();
              main.say("Let's walk back to the tree.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              boy.say("Okay.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              fadeOut(theEnd(remove, game));
            }, time + 5000);
            window.setTimeout(() => {
              boy.say("Thank you.", 3000);
            }, time += 6000);
          });
        }, time += 1000);
      }
    },
    { x: x += 200,
      main: "I'm sorry."
    },
    { x: x += 200,
      main: "I'm so sorry..."
    },
    { x: x += 200,
      main: "I swear I'll make my life worthwhile."
    },
    { x: x += 200,
      main: "I swear..."
    },
    { x: 3850,
      func() {
        remove();
        adult(game);
      }
    }
  );
}
