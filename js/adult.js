import * as Objects from './objects.js';
import * as World from './world.js';
import { reverse, stop, lookAt, theEnd } from './game.js';
import thirty from './thirty.js';


export default function adult(game) {
  const { ent: world, overlay, boy, main, triggers, tree, fadeOut, onStop, onReverse, remove, end } = World.create(game, 'adult', 'winter');
  end.x = 2900;
  //main.x = -2420; boy.x = main.x = 2900; // FOR-RELEASE remove this
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
          main.say("Hey.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("How's it been?", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          boy.anim = 'look-up';
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("You know.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.anim = 'stand-up';
        }, time += 5000);
        window.setTimeout(() => {
          boy.say("Same as always.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.say("Six years.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          boy.say("Don't worry. I don't mind.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'sad';
          boy.say("As long as I knew you were coming back some day...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("I could get used to waiting.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("The snow is beautiful.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          boy.reverse();
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Remember when we used to go sledding together?", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.say("You always had the best, most dangerous sleds.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.anim = 'solemn';
        }, time += 6000);
        window.setTimeout(() => {
          main.say("If you were still around today...", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.say("At twenty-two years old...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Would you still want to go sledding with me...?", 4000);
        }, time += 6000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I do.", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          main.say("I want to forget everything that's wrong with the world.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("And everything that's right.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Because none of it would matter...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("If we could just...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Be kids together again.", 4000);
        }, time += 8000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 8000);
        window.setTimeout(() => {
          main.say("But I've left all that behind.", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          main.say("I've left <em>you</em> behind.", 3000);
        }, time += 3000);
        window.setTimeout(() => {
          main.say("You're just a memory now...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("A memory of a twelve-year-old kid.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 7000);
        window.setTimeout(() => {
          main.say("You lucky little guy.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("You're never too old to be a kid.", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.say("...", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 8000);
        window.setTimeout(() => {
          main.say("Come on. Let's get caught up.", 3000);
        }, time += 1000);
        window.setTimeout(() => {
          boy.say("Okay.", 3000);
        }, time += 6000);
        /**/
        window.setTimeout(() => {
          boy.control();
          main.control();
          onReverse(reverse(main, boy, onReverse));
        }, time += 6000);
      }
    },
    { x: x,
      func() {
        onStop(stop(boy));
      }
    },
    
    { x: x += 200,
      main: "I got my bachelor's degree two years ago."
    },
    { x: x += 200,
      boy: "In quantum physics?"
    },
    
    
    
    { x: x += 400,
      main: "Computer science."
    },
    { x: x += 200,
      main: "I thought it would help me get jobs I'd be good at."
    },
    { x: x += 200,
      boy: "Oh. Cool."
    },
    { x: x += 200,
      boy: "You always were a computer whiz."
    },
    { x: x += 200,
      boy: "I should have guessed you'd end up using them for your job."
    },
    { x: x += 200,
      main: "Yeah. It's fun."
    },
    
    
    
    { x: x += 400,
      main: "I work at Google now."
    },
    { x: x += 200,
      main: "It's a good place to work."
    },
    
    
    
    { x: x += 400,
      main: "But it's just a day job."
    },
    { x: x += 200,
      main: "What I really want to do... still..."
    },
    { x: x += 200,
      main: "Is make things."
    },
    { x: x += 200,
      boy: "Of course! That's the plan, right?"
    },
    { x: x += 200,
      main: "Right."
    },
    
    
    
    { x: x += 400,
      main: "I have to leave my mark on the world."
    },
    { x: x += 200,
      main: "So it doesn't forget me."
    },
    
    
    
    { x: x += 400,
      main: "Like it forgot..."
    },
    
    
    
    { x: x += 400,
      boy: "..."
    },
    
    { x: x += 400,
      func() {
        onStop(); onReverse();
        main.cutscene();
        boy.cutscene();
        main.anim = boy.anim = null;
        main.flip = true;
        let time = 0;
        window.setTimeout(() => {
          if(boy.flip) {
            boy.x -= 10;
          }
          boy.flip = false;
          boy.cutscene(lookAt(boy, main));
        }, time += 2000);
        /*FOR-RELEASE*/
        window.setTimeout(() => {
          boy.say("See you in a few years.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("I know you have to go back now, but...", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.anim = 'sad';
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("Thank you for visiting me.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("I don't know what I would do without you.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("I miss being alive.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.anim = 'solemn';
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I don't know if I want to go back.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.reverse();
        }, time + 4000);
        window.setTimeout(() => {
          boy.say("Huh?", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.say("I feel like I'm losing track of my dreams.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I feel like someday, I'll find out that...", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 8000);
        window.setTimeout(() => {
          main.say("That nothing really matters.", 4000);
        }, time += 1000);
        window.setTimeout(() => {
          main.say("I don't know if there's anything...", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 6000);
        window.setTimeout(() => {
          main.say("Anything I want that the world has to offer me.", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          main.say("But I want to stay here with you and forget everything.", 4000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("I do know that.", 3000);
        }, time += 7000);
        window.setTimeout(() => {
          boy.say("But what about our dreams?", 3000);
        }, time += 10000);
        window.setTimeout(() => {
          boy.say("How will you do great things if you're stuck here?", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          main.reverse();
        }, time += 8000);
        window.setTimeout(() => {
          main.say("You really think I can do great things?", 3000);
        }, time += 2000);
        window.setTimeout(() => {
          boy.say("Of course! Anyone can.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("Just try. For me.", 3000);
        }, time += 6000);
        window.setTimeout(() => {
          boy.say("Please.", 3000);
        }, time += 8000);
        window.setTimeout(() => {
          main.say("...", 3000);
        }, time += 8000);/* */
        window.setTimeout(() => {
          main.control();
          onReverse(() => {
            let time = 0;
            main.cutscene();
            main.anim = null;
            window.setTimeout(() => {
              main.say("I'm sorry.", 3000);
            }, time += 2000);
            window.setTimeout(() => {
              main.say("I can't go back there.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.say("Please forgive me.", 3000);
            }, time += 10000);
            window.setTimeout(() => {
              main.say("I just want to be here with you.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              main.say("Forever.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              boy.say("It's okay.", 3000);
            }, time += 8000);
            window.setTimeout(() => {
              fadeOut(theEnd(remove, game));
            }, time + 2000);
            window.setTimeout(() => {
              boy.say("I understand.", 3000);
            }, time += 10000);
          });
        }, time += 1000);
      }
    },
    { x: x += 200,
      main: "You're right."
    },
    { x: x += 200,
      main: "I have to try."
    },
    { x: x += 400,
      main: "I have to..."
    },
    { x: 3850,
      func() {
        remove();
        thirty(game);
      }
    }
  );
}
