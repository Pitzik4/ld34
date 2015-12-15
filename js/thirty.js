import * as Objects from './objects.js';
import * as World from './world.js';
import { reverse, stop, lookAt, theEnd } from './game.js';
import fortyTwo from './forty-two.js';


export default function thirty(game) {
  const { ent: world, overlay, boy, main, triggers, tree, fadeOut, onStop, onReverse, remove, end } = World.create(game, 'adult', 'spring');
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
          main.say("...", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          main.say("Eight years.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          boy.anim = 'look-up';
        }, time += 8000);
        window.setTimeout(() => {
          boy.say("How's life?", 3000);
        }, time += 2500);
        window.setTimeout(() => {
          main.say("I'm married now.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I'm making a lot of money as a software engineer.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I learned how to make friends again.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("It's life.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I just wish things could have been different.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          boy.say("Why?");
        }, time += 8000);
        window.setTimeout(() => {
          main.say("Let's walk.");
        }, time += 8000);
        window.setTimeout(() => {
          boy.anim = 'stand-up';
        }, time += 6000);
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
    
    { x: x += 600,
      main: "I never did it. Any of it."
    },
    { x: x += 300,
      main: "Chances came, and I passed them by."
    },
    { x: x += 200,
      main: "And now..."
    },
    { x: x += 400,
      main: "I'm a normal person."
    },
    { x: x += 200,
      main: "Just another face on the street."
    },
    { x: x += 400,
      main: "I don't know when it happened."
    },
    { x: x += 200,
      main: "My energy. My enthusiasm. My hope."
    },
    { x: x += 300,
      main: "It's gone. It's gone somewhere far away."
    },
    { x: x += 400,
      boy: "You're only thirty."
    },
    { x: x += 300,
      main: "That doesn't matter."
    },
    { x: x += 300,
      main: "What matters is that..."
    },
    { x: x += 400,
      main: "Something inside of me is dead."
    },
    { x: x += 300,
      main: "Something that's been dying since I was twelve."
    },
    { x: x += 400,
      main: "I was foolish to think it would survive."
    },
    
    { x: x += 400,
      func() {
        onStop(); onReverse();
        main.cutscene();
        boy.cutscene();
        main.anim = boy.anim = null;
        main.flip = boy.flip = true;
        let time = 0;
        /*FOR-RELEASE*/
        window.setTimeout(() => {
          boy.say("That doesn't sound like you.", 3000);
        }, time += 4000);
        window.setTimeout(() => {
          boy.say("You wouldn't just give up.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I gave up a long time ago.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I just didn't want to admit it to myself.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("But why?", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          boy.x -= 10;
          boy.flip = false;
          boy.cutscene(lookAt(boy, main));
        }, time + 4000);
        window.setTimeout(() => {
          boy.say("You've got money and friends and a wife...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("And fifty more years to live.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I spent the last thirty years doing nothing.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("The next fifty will be the same.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("My son was born a month ago.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.say("I named him after you.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.say("After the hopes we shared.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("After the dreams I wasted.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("Maybe he'll be able to live for both of us.", 3000);
        }, time += 12000);
        window.setTimeout(() => {
          main.say("I guess it's up to him.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          boy.say("But...", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          boy.say("What you're saying doesn't make any sense.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("I want you to be someone special.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("And so do you.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("You don't have to give up.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("You have to keep trying!", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("It should have been me who died eighteen years ago.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.say("The world would be a different place.", 3000);
        }, time += 8000);
        /* */
        window.setTimeout(() => {
          main.control();
          onReverse(() => {
            let time = 0;
            main.cutscene();
            main.anim = null;
            boy.flip = false;
            window.setTimeout(() => {
              main.say("Too late to die young.", 3000);
            }, time += 2000);
            window.setTimeout(() => {
              main.say("Too late to die trying.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("Now that I've lost what I really cared about...", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.say("I don't really care about anything.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("Somehow I know...", 3000);
            }, time += 10000);
            window.setTimeout(() => {
              main.say("I won't miss any of it.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I won't miss my wife.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.say("I won't miss my son.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I won't miss my friends.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("Lying here in the grass...", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.say("Just lying here... Forever...", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              main.say("I'll finally be free of everything.", 3000);
            }, time += 6000);
            window.setTimeout(() => {
              boy.say("But I want you to go back...", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              boy.say("I want you to have the life you want...", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              fadeOut(theEnd(remove, game));
            }, time + 2000);
            window.setTimeout(() => {
              boy.say("Please go.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.say("I'm sorry.", 3000);
            }, time += 8000);
          });
        }, time += 1000);
      }
    },
    { x: x += 300,
      main: "I have to get back to my family."
    },
    { x: x += 400,
      main: "Goodbye."
    },
    { x: 3850,
      func() {
        remove();
        fortyTwo(game);
      }
    }
  );
}
