import 'jquery.terminal';
import '../node_modules/jquery.terminal/css/jquery.terminal.min.css';
import './styles.css';
import Logo from './img/close.png';
import Max from './img/fullscreen.png';
import Min from './img/minimize.png';
import on from './img/powerOff.png';
import off from './img/powerOn.png';
import pd from './ResumeSeptember2019.pdf';
const elep = document.getElementById('resume');
elep.href = pd;
const ele = document.getElementById('img1');
ele.src = Logo;
const ele2 = document.getElementById('img2');
ele2.src = Max;
const ele3 = document.getElementById('img3');
ele3.src = Min;
const ele4 = document.getElementById('img4');
const ele5 = document.getElementById('img5');
ele4.src = off;
ele5.src = on;
let intro = `I recommend accessing this site on a computer. There are still mobile version bugs`;
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
}

let wait = false;
var scanlines = $('.scanlines');
var tv = $('.tv');
var term = $('#term').terminal(function (command, term) {
  if (command.match(/^\s*exit\s*$/)) {
    $('.tv').addClass('collapse');
    term.disable();
  } else if (command !== '') {
    processCommand(command, term);
  }else if(command === ''){
    holdHistory.push({
      mess: 'V://> ',
      color: '#AAAAAA'
    });
  }
}, {
  name: 'js_demo',
  exit: false,
  enabled: true,
  pauseEvents: false,
  softPause: false,
  onInit: function () {
    set_size();
  },
  onFocus: function(){
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    term.resume();
  },
  onBlur: function(){
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    term.resume();
  },
  prompt: 'V://> ',
  greetings: intro
});
term.enable();
term.focus(true);
$(document).ready(function(){
  $('.old').addClass('runAnim');
  $(`img.img5`).css("visibility", "hidden");
  $(`img.img4`).on('click', function(e){
    e.preventDefault();
    $('.tv').addClass('collapse');
    term.disable();
    $('.old').removeClass('runAnim');
    $(`img.img4`).css("visibility", "hidden");
    $(`img.img5`).css("visibility", "visible");
  }); //red button
  $(`img.img5`).on('click', function(e){
    e.preventDefault();
    // animation: flicker 0.12s infinite
    $('.tv').removeClass('collapse');
    // $('.tv').addClass('expand');
    $('.old').addClass('runAnim');
    term.enable();
    $(`img.img5`).css("visibility", "hidden");
    $(`img.img4`).css("visibility", "visible");
  }); //green button
  term.pause();
  testTime(allIntro);
  //printLine(allIntro[0]);
  $('a.help1').on('click', function(e) {
    // term.insert("education");
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    // term.resume();
    setTimeout(()=>{
      if(!wait) {
        term.echo(`[[b;${'#AAAAAA'};]${'V://> Education'}]`);
        processCommand("Education", term);
      }

    }, 500);

    // term.exec("education", true)
    e.preventDefault();
  });
  $('a.help2').on('click', function(e) {
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    setTimeout(()=>{
      if(!wait) {
        term.echo(`[[b;${'#AAAAAA'};]${'V://> Work'}]`);
        // wait = false;
        processCommand("Work", term);
      }

    }, 500);
    e.preventDefault();
  });
  $('a.help3').on('click', function(e) {
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    // term.resume();
    setTimeout(()=>{
      if(!wait) {
        term.echo(`[[b;${'#AAAAAA'};]${'V://> Languages'}]`);
        // wait = false;
        processCommand("Languages", term);
      }

    }, 500);

    e.preventDefault();
  });
  $('a.help4').on('click', function(e) {
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    // term.resume();
    setTimeout(()=>{
      if(!wait) {
        term.echo(`[[b;${'#AAAAAA'};]${'V://> Github'}]`);

        // wait = false;
        processCommand("Github", term);
      }

    }, 500);

    e.preventDefault();
  });
  $('a.help5').on('click', function(e) {
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    // term.resume();
    setTimeout(()=>{
      if(!wait) {
        term.echo(`[[b;${'#AAAAAA'};]${'V://> LinkedIn'}]`);
        // wait = false;
        processCommand("Linkedin", term);
      }

    }, 500);

    e.preventDefault();
  });
  $('a.help6').on('click', function(e) {
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    setTimeout(()=>{
      if(!wait) {
        term.echo(`[[b;${'#AAAAAA'};]${'V://> Projects'}]`);
        // wait = false;
        processCommand("Projects", term);
      }

    }, 500);

    e.preventDefault();
  });
  $('a.help7').on('click', function(e) {
    countLetter2 = 1000;
    countLetter = 1000;
    countLoops = 1000;
    term.clear();
    term.echo(intro);
    setAllLines();
    setTimeout(()=>{
      if(!wait) {
        term.echo(`[[b;${'#AAAAAA'};]${'V://> About'}]`);
        // wait = false;
        processCommand("About", term);
      }

    },500);

    e.preventDefault();
  });
});

function setAllLines(){
  for(var i = 0; i < holdHistory.length; i ++){
    if(!holdHistory[i].hasOwnProperty('mess2')){
      term.echo(`[[b;${holdHistory[i].color};]${holdHistory[i].mess}]`);
    }else if(holdHistory[i].hasOwnProperty('mess2')){
      term.echo(`[[b;${holdHistory[i].color};]${holdHistory[i].mess}]` + `[[b;${holdHistory[i].color2};]${holdHistory[i].mess2}]`);
    }
  }
  term.resume();
}
function set_size() {
  // for window height of 170 it should be 2s
  var height = $(window).height();
  var width = $(window).width();
  var time = (height * 2) / 170;
  scanlines[0].style.setProperty("--time", time);
  tv[0].style.setProperty("--width", width);
  tv[0].style.setProperty("--height", height);
}
let buildWord = "";
let buildWord2 = "";
let countLetter = 0;
let countLetter2 = 0;

function printLine(words){
  if(countLetter < 950 && countLetter2 < 950) {
    setTimeout(() => {
      if (!words.hasOwnProperty('mess2') && countLetter < words.mess.length) {
        buildWord += words.mess[countLetter];
        countLetter++;
        if (countLetter <= 1) {
          term.echo(`[[b;${words.color};]${buildWord}]`);
          printLine(words);
        } else if (countLetter >= 2) {
          term.update(term.last_index(), `[[b;${words.color};]${buildWord}]`);
          if (buildWord === words.mess && !runtime) {
            term.resume();
          }
          printLine(words);
        }
      } else if (words.hasOwnProperty('mess2') && countLetter < words.mess2.length) {

        if (countLetter <= 0) {
          buildWord += words.mess[countLetter];
          countLetter++;
          term.echo(`[[b;${words.color};]${buildWord}]`);
          printLine(words);
        } else if (countLetter >= 1 && countLetter < words.mess.length) {
          buildWord += words.mess[countLetter];
          countLetter++;
          term.update(term.last_index(), `[[b;${words.color};]${buildWord}]`);
          printLine(words);
        } else if (countLetter >= words.mess.length && countLetter2 < words.mess2.length) {
          buildWord2 += words.mess2[countLetter2];
          countLetter2++;
          term.update(term.last_index(), `[[b;${words.color};]${words.mess}]` + `[[b;${words.color2};]${buildWord2}]`);
          if (buildWord2 === words.mess2 && !runtime) {
            term.resume();
          }
          printLine(words);
        }

      }
    }, 15);
  }
}
let yellow = "#EEFC12";
let red = "#ce2f2f";
let white = "#fff";

let runtime = true;
let time1 = 500;
let countLoops = 0;
let waitTime = 26;
let holdHistory = [];
function resetPrint(){
  buildWord = "";
  buildWord2 = "";
  countLetter = 0;
  countLetter2 = 0;
}
function resetCounts(){
  countLoops = 0;
  runtime = true;
}

function testTime(allIntro){
  if(countLoops >= allIntro.length){
    runtime = false;
    wait = false;
  }
  if(countLoops === 0){
    holdHistory = holdHistory.concat(allIntro);
    time1 = 500;
  }else if(countLoops > 950){
    runtime=false;
  }else if (!allIntro[countLoops - 1].hasOwnProperty('mess2') && allIntro[countLoops - 1].mess !== " ") {
      time1 = allIntro[countLoops - 1].mess.length * 30;
    }else if (allIntro[countLoops - 1].mess === " ") {
      time1 = 50;
    }else if (allIntro[countLoops - 1].hasOwnProperty('mess2')) {
      time1 = (allIntro[countLoops - 1].mess2.length + allIntro[countLoops - 1].mess.length) * waitTime;
    }
  if(runtime && countLoops < 950){
    setTimeout(()=>{

        resetPrint();
      if(countLoops < 950) {
        printLine(allIntro[countLoops]);
        countLoops++;
      }
        testTime(allIntro);

    }, time1);

  }
}
let allIntro = [
  {
    mess: "Hello And Welcome To My Portfolio",
    color: white
  },
  {
    mess: "For a list of commands type ''help''",
    color: white
  },
  {
    mess: " ",
    color: white
  },
  {
    mess: "Here is a general overview of myself",
    color: white,
  },
  {
    mess: "Name: ",
    color: yellow,
    mess2: "Michael Larragueta",
    color2: white

  },
  {
    mess: "Location: ",
    color: yellow,
    mess2: "Portland, Oregon",
    color2: white
  },
  {
    mess: "Willing to relocate: ",
    color: yellow,
    mess2: "Yes, within the state of Oregon || Willing to work remotely",
    color2: white
  },
  {
    mess: "Position: ",
    color: yellow,
    mess2: "Junior Web Developer",
    color2: white
  },
  {
    mess: "Skills: ",
    color: yellow,
    mess2: "JavaScript, C#, C++, HTML, CSS, ASP.NET, React, Angular, Jquery, Unity, GIT CLI, React-THREE-Fiber, mySql, Node.js and more",
    color2: white
  },
  {
    mess: "CONTACT INFO",
    color: red
  },
  {
    mess: "Phone: ",
    color: yellow,
    mess2: "(925)451-5515",
    color2: white
  },
  {
    mess:  "Email: ",
    color: yellow,
    mess2: "MjLarragueta@gmail.com",
    color2: white
  }
];
let helpCommand = [
  {
    mess: "All Commands: ",
    color: red
  },
  {
    mess: "Education: ",
    color: yellow,
    mess2: "Show all education information",
    color2: white
  },
  {
    mess: "Work: ",
    color: yellow,
    mess2: "Show all work experience",
    color2: white
  },
  {
    mess: "Languages: ",
    color: yellow,
    mess2: "Show all of my known programming languages",
    color2: white
  },
  {
    mess: "Github: ",
    color: yellow,
    mess2: "Link to my github profile",
    color2: white
  },
  {
    mess: "LinkedIn: ",
    color: yellow,
    mess2: "Link to my LinkedIn profile",
    color2: white
  },
  {
    mess: "Projects: ",
    color: yellow,
    mess2: "Links to my 3 favorite projects with added descriptions",
    color2: white
  },
  {
    mess: "About: ",
    color: yellow,
    mess2: "About me",
    color2: white
  },
  {
    mess: "Reset: ",
    color: yellow,
    mess2: "Resets terminal page",
    color2: white
  },
  {
    mess: "Exit: ",
    color: red,
    mess2: "Turns terminal off",
    color2: white
  }
];
let educCommand = [
  {
    mess: "Education: ",
    color: red
  },
  {
    mess: "Diablo Valley College, Concord CA - C++",
    color: yellow
  },
  {
    mess: "Started: ",
    color: yellow,
    mess2: "September, 2014",
    color2: white
  },
  {
    mess: "Finished: ",
    color: yellow,
    mess2: "June, 2018 ",
    color2: white
  },
  {
    mess: "Studied: ",
    color: yellow,
    mess2: "Computer Science",
    color2: white
  },
  {
    mess: " ",
    color: white
  },
  {
    mess: "Epicodus, Portland OR - C#/React Track",
    color: yellow
  },
  {
    mess: "Started: ",
    color: yellow,
    mess2: "March 2019",
    color2: white
  },
  {
    mess: "Finsihed: ",
    color: yellow,
    mess2: "September 2019",
    color2: white
  },
  {
    mess: "Studied: ",
    color: yellow,
    mess2: "C#, .NET, React, Jquery, HTML, CSS, JavaScript, Angular ASP.NET, GIT CLI",
    color2: white

  }
];
let unknownCommand = [
  {
    mess: "UNKOWN COMMAND",
    color: red
  },
  {
    mess: "For a list of commands type ''help''",
    color: white
  }
];
let workCommand = [
  {
    mess: "Work History: ",
    color: red
  },
  {
    mess: "Invisible Thread, Portland OR",
    color: yellow
  },
  {
    mess: "Title: ",
    color: yellow,
    mess2: "Junior Developer",
    color2: white
  },
  {
    mess: "Started: ",
    color: yellow,
    mess2: "August 2019",
    color2: white
  },
  {
    mess: "Finished: ",
    color: yellow,
    mess2: "October 2019",
    color2: white
  },
  {
    mess: "Details",
    color: yellow
  },
  {
    mess: "  -Re-Built website using React, THREE.js, and React-THREE-Fiber",
    color: white
  },
  {
    mess: "  -Built an augmented reality pathfinding android application using Unity and C#",
    color: white
  },
  {
    mess: "  -Managed Project Workflow and tasks using Trello",
    color: white
  },
  {
    mess: " ",
    color: white
  },
  {
    mess: "The Creek Youth Center, Walnut Creek CA",
    color: yellow
  },
  {
    mess: "Title: ",
    color: yellow,
    mess2: "Lead Teachers Aide",
    color2: white
  },
  {
    mess: "Started: ",
    color: yellow,
    mess2: "January 2014",
    color2: white
  },
  {
    mess: "Ended: ",
    color: yellow,
    mess2: "August 2018",
    color2: white
  },
  {
    mess: "Details",
    color: yellow
  },
  {
    mess: "  -Created, planned and executed different learning activities",
    color: white
  },
  {
    mess: "  -Managed and lead groups of 30+ children grade 6th-8th",
    color: white
  },
  {
    mess: "  -Created and ran the tech club where students learned how to build and program Arduino based robotics",
    color: white
  }
];
let gitCommand = [
  {
    mess: "https://github.com/toofpaste",
    color: red
  }
];
let linkCommand = [
  {
    mess: "https://www.linkedin.com/in/mlarragueta",
    color: red
  }
];
let langCommand = [
  {
    mess: "C++, Node.js, HTML, Javascript, React, ASP.NET, CSS, jQuery, GIT CLI, AngularJS, Firebase, Webpack, NPM, C#, TypeScript, mySql, MongoDB",
    color: white
  }
];
let aboutCommand = [
  {
    mess: "Born and raised in Concord, California. Out of high school, I attended the University of Nevada Reno where I studied business management. After my second year there I decided that it was not the direction I wanted to go with my career. To save some money I moved back home and attended Diablo Valley College where I discovered my love for computer science. I studied Computer Science there for 4 years. After attempting to afford living in the bay area by working as a valet, I made the decision to move up to Portland and attend Epicodus where I studied a variety of different web development languages. ",
    color: white
  }
];
let projCommand = [
  {
    mess: "IBM Watson Connect 4: ",
    color: yellow
  },
  {
    mess: "https://github.com/toofpaste/ReactWatsonAPIWorking",
    color: white
  },
  {
    mess: "Details",
    color: yellow
  },
  {
    mess: "  -Written using React for the front end and Node.js to access the watson API",
    color: white
  },
  {
    mess: "  -Using IBM Watson it analyzes a user's tweets and generates a personality profile for them. The Connect 4 AI then uses those personality traits against them in a game of Connect 4",
    color: white
  },
  {
    mess: " ",
    color: white
  },
  {
    mess: "Invisible-Thread-Website",
    color: yellow
  },
  {
    mess: "https://github.com/toofpaste/Invisible-Thread-Website",
    color: white
  },
  {
    mess: "Details",
    color: yellow
  },
  {
    mess: "  -Written using React-THREE-Fiber. A React wrapper for THREE.js",
    color: white
  },
  {
    mess: " ",
    color: white
  },
  {
    mess: "MultiPlayer Tetris",
    color: yellow
  },
  {
    mess: "https://github.com/toofpaste/MPTetris",
    color: white
  },
  {
    mess: "Details",
    color: yellow
  },
  {
    mess: "  -Written using Javascript, Node.js with CSS and HTML",
    color: white
  },
  {
    mess: "  -A simple Tetris game that drops block shapes down and board while a user tries to move the shapes around to fit the other shapes on. The player tryies to completely fill whole rows of blocks in order to remove them from the game while avoiding filling the game board all the way to the top.",
    color: white
  }
];
function processCommand(command, term) {
  if(!wait) {
    let cmd = command.split(" ");
    holdHistory.push({
      mess: `V://> ${cmd[0]}`,
      color: '##AAAAAA'
    });
    cmd[0] = cmd[0].toLowerCase();
    if (cmd[0] == "help") {
      wait = true;
      term.pause();
      resetPrint();
      resetCounts();
      testTime(helpCommand);
      // return;
    } else if (cmd[0] == "education") {
      wait = true;
      term.pause();
      resetPrint();
      resetCounts();
      testTime(educCommand);
    } else if (cmd[0] == "work") {
      wait = true;
      term.pause();
      resetPrint();
      resetCounts();
      testTime(workCommand);
    } else if (cmd[0] == "github") {
      wait = true;
      term.pause();
      resetPrint();
      resetCounts();
      testTime(gitCommand);
    } else if (cmd[0] == "linkedin") {
      term.pause();
      resetPrint();
      resetCounts();
      testTime(linkCommand);
    } else if (cmd[0] == "languages") {
      wait = true;
      term.pause();
      resetPrint();
      resetCounts();
      testTime(langCommand);
    } else if (cmd[0] == "about") {
      term.pause();
      wait = true;
      resetPrint();
      resetCounts();
      testTime(aboutCommand);
    } else if (cmd[0] == "projects") {
      term.pause();
      wait = true;
      resetPrint();
      resetCounts();
      testTime(projCommand);
    }else if(cmd[0] == "reset"){
      term.clear();
      holdHistory = [];
      term.echo(intro);
    }else {
      term.pause();
      wait = true;
      resetPrint();
      resetCounts();
      testTime(unknownCommand);
    }
  }
}

