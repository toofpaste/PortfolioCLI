import 'jquery.terminal';
import Contagion from '../src/viral';
import City from '../src/city';
import World from '../src/world';
import { generateTownName } from '../src/world';
import '../node_modules/jquery.terminal/css/jquery.terminal.min.css';
import './styles.css';

let intro =
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
var updateLines = [];

var scanlines = $('.scanlines');
var tv = $('.tv');
var term = $('#term').terminal(function (command, term) {
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

window.world = new World();
for (let i = 0; i < 20; i++) {
  window.world.infectCity();
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

let intro2 = "Hello And Welcome To My Portfolio";
let wordP2 = "";
let line2 = true;
let x = 0;

let intro3 = "For a list of commands type ''help''";
let wordP3 = "";
let line3 = false;
let y = 0;

let intro4 = "Here is a general overview of myself";
let wordP4 = "";
let line4 = false;
let z = 0;






printline();
function printline() {
  setTimeout(() => {

    if (line2 && x < intro2.length) {
      wordP2 += intro2[x];
      if (x === 0) {
        term.echo(`${wordP2}`);
      } else term.update(1, `${wordP2}`);
      x++;
      printline();
    } else {
      line2 = false;
      line3 = true;
    }
    if (line3 && y < intro3.length) {
      wordP3 += intro3[y];
      if (y === 0) {
        term.echo(`${wordP3}`);
      } else term.update(2, `${wordP3}`);
      y++;
      printline();
    } else {
      line3 = false;
      line4 = true;
    }
    if (line4 && z < intro4.length && !line2 && !line3) {
      wordP4 += intro4[z];
      if (z === 0) {
        term.echo(``);
        term.echo(`${wordP4}`);
      } else term.update(4, `${wordP4}`);
      z++;
      printline();
    } else {
      line5 = true;
      line4 = false;
    }
    if (line5 && !line2 && !line3 && !line4) {
      printInfo();
    }
  }, 50);
}

let intro5 = "Name: ";
let intro5A = "Michael Larragueta";
let wordP5 = "";
let wordP5A = "";
let line5 = false;
let a = 0;

let intro6 = "Location: ";
let intro6A = "Portland, Oregon";
let wordP6 = "";
let wordP6A = "";
let line6 = false;
let b = 0;

let intro7 = "Willing to relocate: "
let intro7A = "Yes, in the Oregon Area || Willing to work remotely";
let wordP7 = "";
let wordP7A = "";
let line7 = false;
let c = 0;

let intro8 = "Position: ";
let intro8A = "Junior Web Developer";
let wordP8 = "";
let wordP8A = "";
let line8 = false;
let d = 0;

let intro9 = "Skills: ";
let intro9A = "JavaScript, C#, C++, HTML, CSS, ASP.NET, React, Angular, Jquery, Unity, GIT CLI, React-THREE-Fiber, mySql, Node.js and more"
let wordP9 = "";
let wordP9A = "";
let line9 = false;
let e = 0;

let introMid = "CONTACT INFO";
let wordP10 = "";
let line10 = false;
let f = 0;

let intro11 = "Phone: ";
let intro11A = "(925)451-5515";
let wordP11 = "";
let wordP11A = "";
let line11 = false;
let g = 0;

let intro12 = "Email: ";
let intro12A = "MjLarragueta@gmail.com";
let wordP12 = "";
let wordP12A = "";
let line12 = false;
let h = 0;

function printInfo(){
  setInterval(() => {
    if(line5 && !line2 && !line3 && !line4){
      wordP5 += intro5[a];
      if(a < intro5.length) {
        if (a === 0) {
          term.echo(`[[b;#EEFC12;]${wordP5}]`);
        } else {
          term.update(5, `[[b;#EEFC12;]${wordP5}]`);
        }
      }else if((a - intro5.length) < intro5A.length){
        //alert(a, intro5.length, intro5A.length)
        wordP5A += intro5A[a - intro5.length];
        term.update(5,`[[b;#EEFC12;]Name]: ` + `[[b;#fff;]]${wordP5A}`);

      }else {
        line5 = false;
        line6 = true;
      }
      a++;

      printInfo();
    }
    if(line6 && !line5){
      wordP6 += intro6[b];
      if(b < intro6.length){
        if(b === 0){
          term.echo(`[[b;#EEFC12;]${wordP6}]`)
        }else {
          term.update(6, `[[b;#EEFC12;]${wordP6}]`);
        }
      }else if((b - intro6.length) < intro6A.length){
        //alert(a, intro5.length, intro5A.length)
        wordP6A += intro6A[b - intro6.length];
        term.update(6,`[[b;#EEFC12;]Location]: ` + `[[b;#fff;]]${wordP6A}`);

      }else {
        line6 = false;
        line7 = true;
      }
      b++;
      printInfo();
    }
    if(line7 && !line6){
      wordP7 += intro7[c];
      if(c < intro7.length){
        if(c === 0){
          term.echo(`[[b;#EEFC12;]${wordP7}]`)
        }else {
          term.update(7, `[[b;#EEFC12;]${wordP7}]`);
        }
      }else if((c - intro7.length) < intro7A.length){
        //alert(a, intro5.length, intro5A.length)
        wordP7A += intro7A[c - intro7.length];
        term.update(7,`[[b;#EEFC12;]Willing to relocate]: ` + `[[b;#fff;]]${wordP7A}`);

      }else {
        line7 = false;
        line8 = true;
      }
      c++;
      printInfo();
    }
    if(line8 && !line7){
      wordP8 += intro8[d];
      if(d < intro8.length){
        if(d === 0){
          term.echo(`[[b;#EEFC12;]${wordP8}]`)
        }else {
          term.update(8, `[[b;#EEFC12;]${wordP8}]`);
        }
      }else if((d - intro8.length) < intro8A.length){
        //alert(a, intro5.length, intro5A.length)
        wordP8A += intro8A[d - intro8.length];
        term.update(8,`[[b;#EEFC12;]Position]: ` + `[[b;#fff;]]${wordP8A}`);

      }else {
        line8 = false;
        line9 = true;
      }
      d++;
      printInfo();
    }
    if(line9 && !line8){
      wordP9 += intro9[e];
      if(e < intro9.length){
        if(e === 0){
          term.echo(`[[b;#EEFC12;]${wordP9}]`)
        }else {
          term.update(9, `[[b;#EEFC12;]${wordP9}]`);
        }
      }else if((e - intro9.length) < intro9A.length){
        //alert(a, intro5.length, intro5A.length)
        wordP9A += intro9A[e - intro9.length];
        term.update(9,`[[b;#EEFC12;]Skills]: ` + `[[b;#fff;]]${wordP9A}`);

      }else {
        line9 = false;
        line10 = true;
      }
      e++;
      printInfo();
    }
    if(line10 && !line9 && f < introMid.length){
      wordP10 += introMid[f];
      if(f === 0){
        term.echo(`[[b;#ce2f2f;]${wordP10}]`);
      }else term.update(10, `[[b;#ce2f2f;]${wordP10}]`);
      f++;
      printInfo();
    }else {
      line10 = false;
      line11 = true;
    }
    if(line11 && !line10 && !line9 && !line8 && !line7 && !line6 && !line5 && !line4 && !line3 && !line2){
      wordP11 += intro11[g];
      if(g < intro11.length){
        if(g === 0){
          term.echo(`[[b;#EEFC12;]${wordP11}]`);
        }else {
          term.update(11, `[[b;#EEFC12;]${wordP11}]`);
        }
      }else if((g - intro11.length) < intro11A.length){
        //alert(a, intro5.length, intro5A.length)
        wordP11A += intro11A[g - intro11.length];
        term.update(11,`[[b;#EEFC12;]Phone]: ` + `[[b;#fff;]]${wordP11A}`);
      }else {
        line11 = false;
        line12 = true;
      }
      g++;
      printInfo();

    }
    if(line12 && !line11 && !line10 && !line9 && !line8 && !line7 && !line6 && !line5 && !line4 && !line3 && !line2){
      wordP12 += intro12[h];
      if(h < intro12.length){
        if(h === 0){
          term.echo(`[[b;#EEFC12;]${wordP12}]`);
        }else {
          term.update(12, `[[b;#EEFC12;]${wordP12}]`);
        }
      }else if((h - intro12.length) < intro12A.length){
        //alert(a, intro5.length, intro5A.length)
        wordP12A += intro12A[h - intro12.length];
        term.update(12,`[[b;#EEFC12;]Email]: ` + `[[b;#fff;]]${wordP12A}`);
      }else {
        line12 = false;
      }
      h++;
      printInfo();

    }


  }, 75);

}
function printhelp(){

}
function processCommand(command, term) {
  let cmd = command.split(" ");
  if (cmd[0] == "help") {
    printhelp();
    return;
  }
  if (cmd[0] == "flyto") {
    if(window.world.cities.filter(i => i.name === cmd[1]).length > 0) {
      term.echo(`[[b;#549af5;]Flying to ${cmd[1]}]`);
    } else {
      term.echo(`[[b;#ce2f2f;]Invalid location. Please input valid destination.]`);
    }
  }
}

function termUpdate() {
  updateLines.forEach(l => {

    let city = window.world.cities.filter(c => c.name === l.city)[0];
    let infection = city.infected.filter(i => i.name === l.infection)[0];
    let pop = city.population;


    let color = "";
    if (infection.infected < pop * 0.20) {
      color = "#0ab864";//Green
    }
    if (infection.infected > pop * 0.50) {
      color = "#EEFC12";//Yellow
    }
    if (infection.infected > pop * 0.90) {
      color = "#ce2f2f";//Red
    }
    term.update(l.id, `[[b;#ce2f2f;]${infection.name}]: [[b;${color};]${infection.infected}]`);
  });

}

setInterval(() => {
  termUpdate();
}, 1000);
