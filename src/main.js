import 'jquery.terminal';
import '../node_modules/jquery.terminal/css/jquery.terminal.min.css';
import './styles.css';
import Logo from './img/close.png';
import Max from './img/fullscreen.png';
import Min from './img/minimize.png';
import pd from './ResumeSeptember2019.pdf';
const elep = document.getElementById('resume');
elep.href = pd;
const ele = document.getElementById('img1');
ele.src = Logo;
const ele2 = document.getElementById('img2');
ele2.src = Max;
const ele3 = document.getElementById('img3');
ele3.src = Min;
let intro = ``;
let currentLine = 0;
if(window.innerWidth >= 1007) {
  intro =
    `
  __  __ _      _                _   _                                           _        
 |  \\/  (_)    | |              | | | |                                         | |       
 | \\  / |_  ___| |__   __ _  ___| | | |     __ _ _ __ _ __ __ _  __ _ _   _  ___| |_ __ _ 
 | |\\/| | |/ __| '_ \\ / _\` |/ _ \\ | | |    / _\` | '__| '__/ _\` |/ _\` | | | |/ _ \\ __/ _\` |
 | |  | | | (__| | | | (_| |  __/ | | |___| (_| | |  | | | (_| | (_| | |_| |  __/ || (_| |
 |_|  |_|_|\\___|_| |_|\\__,_|\\___|_| |______\\__,_|_|  |_|  \\__,_|\\__, |\\__,_|\\___|\\__\\__,_|
                                                                 __/ |                    
                                                                |___/                                                                                      
`;
} else currentLine--;

let wait = false;
var scanlines = $('.scanlines');
var tv = $('.tv');
  var term = $('#term').terminal(function (command, term) {
    currentLine++;
    if (command.match(/^\s*exit\s*$/)) {
      $('.tv').addClass('collapse');
      term.disable();
    } else if (command !== '') {
      processCommand(command, term);
    }
  }, {
    name: 'js_demo',
    onResize: set_size,
    exit: false,
    // detect iframe codepen preview
    enabled: $('body').attr('onload') === undefined,
    onInit: function () {
      set_size();
      //this.echo('Type [[b;#fff;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play');
    },
    prompt: 'V://> ',
    greetings: intro
  });

function set_size() {
  // for window height of 170 it should be 2s
  var height = $(window).height();
  var width = $(window).width();
  var time = (height * 2) / 170;
  scanlines[0].style.setProperty("--time", time);
  tv[0].style.setProperty("--width", width);
  tv[0].style.setProperty("--height", height);
}

let intro2 = "Hello And Welcome To My Portfolio";

let intro3 = "For a list of commands type ''help''";

let intro4 = "Here is a general overview of myself";

let intro5 = "Name: ";
let intro5A = "Michael Larragueta";


let intro6 = "Location: ";
let intro6A = "Portland, Oregon";


let intro7 = "Willing to relocate: "
let intro7A = "Yes, in the Oregon Area || Willing to work remotely";


let intro8 = "Position: ";
let intro8A = "Junior Web Developer";


let intro9 = "Skills: ";
let intro9A = "JavaScript, C#, C++, HTML, CSS, ASP.NET, React, Angular, Jquery, Unity, GIT CLI, React-THREE-Fiber, mySql, Node.js and more"


let introMid = "CONTACT INFO";


let intro11 = "Phone: ";
let intro11A = "(925)451-5515";


let intro12 = "Email: ";
let intro12A = "MjLarragueta@gmail.com";

let help = false;
let i = 0;
let printComm = "";
function resetPrint(){
  currentLine++;
  i = 0;
  printComm = "";
  help = true;
}
function printLine(thisLine, words, color){

  setTimeout(() => {
  if(help && i < words.length){
    printComm += words[i];
    if(i === 0){

      term.echo(`[[b;${color};]${printComm}]`);
    }else {
      term.update(thisLine, `[[b;${color};]${printComm}]`);
    }
    i++;
    printLine(thisLine, words, color);
  }else {
    // i = 0;
    help = false;
  }

  }, 30);
}

function printLineFaster(thisLine, words, color){

  setTimeout(() => {
    if(help && i < words.length){
      printComm += words[i];
      if(i === 0){

        term.echo(`[[b;${color};]${printComm}]`);
      }else {
        term.update(thisLine, `[[b;${color};]${printComm}]`);
      }
      i++;
      printLineFaster(thisLine, words, color);
    }else {
      // i = 0;
      help = false;
    }

  }, 15);
}
function printSameLineFaster(thisLine, words, prevWord, color, colorPrev){
  setTimeout(() => {
    if(help && i < words.length){
      printComm += words[i];
      term.update(thisLine, `[[b;${colorPrev};]${prevWord}]` + `[[b;${color};]${printComm}]`);
      //         term.update(9,`[[b;#EEFC12;]Skills]: ` + `[[b;#fff;]]${wordP9A}`);
      i++;
     printSameLineFaster(thisLine, words, prevWord, color, colorPrev);
    }else {
      // i = 0;
      help = false;
    }

  }, 15);
}
let yellow = "#EEFC12";
let red = "#ce2f2f";
let white = "#fff";
resetPrint();
wait = true;
printLine(currentLine, intro2, white);
setTimeout(() => {
  resetPrint();
  printLine(currentLine, intro3, white);
}, 1500);
setTimeout(() => {
  term.echo('');
  currentLine++;
  resetPrint();
  printLine(currentLine, intro4, white);
}, 2900 );

setTimeout(() => {
  resetPrint();
  printLineFaster(currentLine, intro5, yellow);
}, 5000 );
setTimeout(() => {
  resetPrint();
  currentLine--;
  printSameLineFaster(currentLine, intro5A, intro5, white, yellow);
}, 5650 );

setTimeout(() => {
  resetPrint();
  printLineFaster(currentLine, intro6, yellow);
}, 6000 );
setTimeout(() => {
  resetPrint();
  currentLine--;
  printSameLineFaster(currentLine, intro6A, intro6, white, yellow);
}, 6250 );

setTimeout(() => {
  resetPrint();
  printLineFaster(currentLine, intro7, yellow);
}, 6700 );
setTimeout(() => {
  resetPrint();
  currentLine--;
  printSameLineFaster(currentLine, intro7A, intro7, white, yellow);
}, 7150 );

setTimeout(() => {
  resetPrint();
  printLineFaster(currentLine, intro8, yellow);
}, 8250 );
setTimeout(() => {
  resetPrint();
  currentLine--;
  printSameLineFaster(currentLine, intro8A, intro8, white, yellow);
}, 8500 );


setTimeout(() => {
  resetPrint();
  printLineFaster(currentLine, intro9, yellow);
}, 8900 );
setTimeout(() => {
  resetPrint();
  currentLine--;
  printSameLineFaster(currentLine, intro9A, intro9, white, yellow);
}, 9100 );

setTimeout(() => {
  resetPrint();
  printLine(currentLine, introMid, red);
}, 11500 );

setTimeout(() => {
  resetPrint();
  printLineFaster(currentLine, intro11, yellow);
}, 12000 );
setTimeout(() => {
  resetPrint();
  currentLine--;
  printSameLineFaster(currentLine, intro11A, intro11, white, yellow);
}, 12300 );

setTimeout(() => {
  resetPrint();
  printLineFaster(currentLine, intro12, yellow);
}, 12600 );
setTimeout(() => {
  resetPrint();
  currentLine--;
  printSameLineFaster(currentLine, intro12A, intro12, white, yellow);
  wait = false;
}, 12900 );
function processCommand(command, term) {
  if(!wait) {
    let cmd = command.split(" ");
    cmd[0] = cmd[0].toLowerCase();
    if (cmd[0] == "help") {
      wait = true;
      resetPrint();
      printLine(currentLine, "All Commands: ", "#EEFC12");
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Education: ", yellow);
      }, 500);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Print all education information", "Education: ", white, yellow);

      }, 800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Work: ", yellow);
      }, 1600);//700
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Print all work experience", "Work: ", white, yellow);

      }, 2000);//900

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Languages: ", yellow);
      }, 2600);//1600
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Print all of my known programming languages", "Languages: ", white, yellow);

      }, 3000);//2000

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Github: ", yellow);
      }, 3800);//2600
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Link to my github profile", "Github: ", white, yellow);
      }, 4300);//3000

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "LinkedIn: ", yellow);
      }, 5000);//3800
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Link to my LinkedIn profile", "LinkedIn: ", white, yellow);

      }, 5400);//4300

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Projects: ", yellow);
      }, 6100);//5000
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Links to my 3 favorite projects", "Projects: ", white, yellow);

      }, 6500);//5400

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "About: ", yellow);
      }, 7100);//6100
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "About me", "About: ", white, yellow);
      wait = false;
      }, 7600);//6500

      // return;
    } else if (cmd[0] == "education") {
      wait = true;
      resetPrint();
      printLine(currentLine, "Education: ", red);
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Diablo Valley College, Concord CA - C++", yellow);
      }, 500);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Started: ", yellow);

      }, 1400);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "September, 2014", "Started: ", white, yellow);

      }, 1900);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Finished: ", yellow);

      }, 2400);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "June, 2018 ", "Finished: ", white, yellow);

      }, 3000);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Studied: ", yellow);

      }, 3500);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Computer Science", "Studied: ", white, yellow);

      }, 4000);


      setTimeout(() => {
        term.echo(' ');
        currentLine++;
        resetPrint();
        printLineFaster(currentLine, "Epicodus, Portland OR - C#/React Track", yellow);

      }, 4700);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Started: ", yellow);

      }, 5500);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "March 2019", "Started: ", white, yellow);

      }, 6400);
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Finished: ", yellow);

      }, 7000);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "September 2019", "Finished: ", white, yellow);

      }, 7600);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Studied: ", yellow);

      }, 8200);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "C#, .NET, React, Jquery, HTML, CSS, JavaScript, Angular ASP.NET, GIT CLI", "Studied: ", white, yellow);
    wait = false;
      }, 8800);
    } else if (cmd[0] == "work") {
      wait = true;
      resetPrint();
      printLine(currentLine, "Work History: ", red);
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Invisible Thread, Portland OR", yellow);
      }, 500);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Title: ", yellow);
      }, 1200);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Junior Developer", "Title: ", white, yellow);
      }, 1700);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Started: ", yellow);
      }, 2300);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "August 2019", "Started: ", white, yellow);
      }, 2800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Ended: ", yellow);
      }, 3300);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "October 2019", "Ended: ", white, yellow);
      }, 3800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Details", yellow);
      }, 4200);
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Re-Built website using React, THREE.js, and React-THREE-Fiber  ", white);
      }, 4600);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Built an augmented reality pathfinding android application using Unity and C#", white);
      }, 5800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Managed Project Workflow and tasks using Trello", white);
      }, 7600);

      setTimeout(() => {
        resetPrint();
        currentLine++;
        term.echo(" ");
        printLineFaster(currentLine, "The Creek Youth Center, Walnut Creek CA", yellow);
      }, 8800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Title: ", yellow);
      }, 9800);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "Lead Teachers Aide", "Title: ", white, yellow);
      }, 10300);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Started: ", yellow);
      }, 11000);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "January 2014", "Started: ", white, yellow);
      }, 11400);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Ended: ", yellow);
      }, 12100);
      setTimeout(() => {
        currentLine--;
        resetPrint();
        printSameLineFaster(currentLine, "August 2018", "Ended: ", white, yellow);
      }, 12800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Details", yellow);
      }, 13400);
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Created, planned and executed different learning activities  ", white);
      }, 14000);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Managed and lead groups of 30+ children", white);

      }, 15500);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Created and ran the tech club where students learned how to build and program  arduino based robotics", white);
        wait = false;
        }, 17000);
    } else if (cmd[0] == "github") {
      resetPrint();
      printLineFaster(currentLine, "https://github.com/toofpaste", red);
    } else if (cmd[0] == "linkedin") {
      resetPrint();
      printLineFaster(currentLine, "https://www.linkedin.com/in/mlarragueta", red);
    } else if (cmd[0] == "languages") {
      resetPrint();
      printLineFaster(currentLine, "C++, Node.js, HTML, Javascript, React, ASP.NET, CSS, jQuery, GIT CLI, AngularJS, Firebase, Webpack, NPM, C#, TypeScript, mySql, MongoDB", white);
    } else if (cmd[0] == "about") {
      resetPrint();
      printLineFaster(currentLine, "Born and raised in Concord, California. Out of high school, I attended the University of Nevada Reno where I studied business management. After my second year there I decided that it was not the direction I wanted to go with my career. To save some money I moved back home and attended Diablo Valley College where I discovered my love for computer science. I studied Computer Science there for 4 years. After attempting to afford living in the bay area by working as a valet, I made the decision to move up to Portland and attend Epicodus where I studied a variety of different web development languages. ", white);
    } else if (cmd[0] == "projects") {
      wait = true;
      resetPrint();
      printLine(currentLine, "IBM Watson Connect 4: ", yellow);
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "https://github.com/toofpaste/ReactWatsonAPIWorking", white);
      }, 900);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Details: ", yellow);

      }, 2000);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Written using React for the front end and Node.js to access the watson API ", white);

      }, 2600);


      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Using IBM Watson it analyzes a user's tweets and generates a personality profile for them. The Connect 4 AI then uses those personality traits against them in a game of Connect 4", white);

      }, 4000);


      setTimeout(() => {
        term.echo(" ");
        currentLine++;
        resetPrint();
        printLine(currentLine, "Invisible-Thread-Website", yellow);
      }, 7800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "https://github.com/toofpaste/Invisible-Thread-Website", white);
      }, 8700);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Details: ", yellow);

      }, 9900);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Written using React-THREE-Fiber. A React wrapper for THREE.js", white);

      }, 10800);

      setTimeout(() => {
        term.echo(" ");
        currentLine++;
        resetPrint();
        printLine(currentLine, "MultiPlayer Tetris", yellow);
      }, 12000);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "https://github.com/toofpaste/MPTetris", white);
      }, 12800);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "Details: ", yellow);

      }, 14000);

      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -Written using Javascript, Node.js with CSS and HTML", white);

      }, 14800);
      setTimeout(() => {
        resetPrint();
        printLineFaster(currentLine, "  -A simple Tetris game that drops block shapes down and board while a user tries to move the shapes around to fit the other shapes on. The player tryies to completely fill whole rows of blocks in order to remove them from the game while avoiding filling the game board all the way to the top.", white);
      wait = false;
      }, 16800);
    }
  }
}
