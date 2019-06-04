import 'jquery.terminal';
import Contagion from '../src/viral';
import City from '../src/city';
import World from '../src/world';
import { generateTownName } from '../src/world';
import '../node_modules/jquery.terminal/css/jquery.terminal.min.css';
import './styles.css';

let intro =
  `
██▒   █▓ ██▓ ██▀███   █    ██   ██████     ██░ ██  █    ██  ███▄    █ ▄▄▄█████▓▓█████  ██▀███  
▓██░   █▒▓██▒▓██ ▒ ██▒ ██  ▓██▒▒██    ▒    ▓██░ ██▒ ██  ▓██▒ ██ ▀█   █ ▓  ██▒ ▓▒▓█   ▀ ▓██ ▒ ██▒
▓██  █▒░▒██▒▓██ ░▄█ ▒▓██  ▒██░░ ▓██▄      ▒██▀▀██░▓██  ▒██░▓██  ▀█ ██▒▒ ▓██░ ▒░▒███   ▓██ ░▄█ ▒
 ▒██ █░░░██░▒██▀▀█▄  ▓▓█  ░██░  ▒   ██▒   ░▓█ ░██ ▓▓█  ░██░▓██▒  ▐▌██▒░ ▓██▓ ░ ▒▓█  ▄ ▒██▀▀█▄  
  ▒▀█░  ░██░░██▓ ▒██▒▒▒█████▓ ▒██████▒▒   ░▓█▒░██▓▒▒█████▓ ▒██░   ▓██░  ▒██▒ ░ ░▒████▒░██▓ ▒██▒
  ░ ▐░  ░▓  ░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ▒ ▒▓▒ ▒ ░    ▒ ░░▒░▒░▒▓▒ ▒ ▒ ░ ▒░   ▒ ▒   ▒ ░░   ░░ ▒░ ░░ ▒▓ ░▒▓░
  ░ ░░   ▒ ░  ░▒ ░ ▒░░░▒░ ░ ░ ░ ░▒  ░ ░    ▒ ░▒░ ░░░▒░ ░ ░ ░ ░░   ░ ▒░    ░     ░ ░  ░  ░▒ ░ ▒░
    ░░   ▒ ░  ░░   ░  ░░░ ░ ░ ░  ░  ░      ░  ░░ ░ ░░░ ░ ░    ░   ░ ░   ░         ░     ░░   ░ 
     ░   ░     ░        ░           ░      ░  ░  ░   ░              ░             ░  ░   ░     
    ░                                                                                          
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
  var width = $(window).width()
  var time = (height * 2) / 170;
  scanlines[0].style.setProperty("--time", time);
  tv[0].style.setProperty("--width", width);
  tv[0].style.setProperty("--height", height);
}


function processCommand(command, term) {
  let cmd = command.split(" ");
  if (cmd[0] == "status") {
    window.world.cities.forEach(city => {
      let sick = "";
      term.echo(`[[b;#fff;]Name:] ${city.name}`);
      term.echo(`Population: ${city.population}${sick > 0 ? ` / [[b;#EEFC12;]${sick}]` : ``}`);

      city.infected.forEach(i => {
        term.echo(`[[b;#ce2f2f;]${i.name}]: ${i.infected}`);
        updateLines.push({
          id: term.last_index(),
          city: city.name,
          infection: i.name
        })
      });

    });
    return;
  }
  if (cmd[0] == "flyto") {
    if(window.world.cities.filter(i => i.name === cmd[1]).length > 0) {
      term.echo(`[[g;#4daacf;]Flying to ${cmd[1]}]`)
    } else {
      term.echo(`[[b;#ce2f2f;]Invalid location. Please input valid destination.]`)
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
      color = "#0ab864"//Green
    }
    if (infection.infected > pop * 0.50) {
      color = "#EEFC12"//Yellow
    }
    if (infection.infected > pop * 0.90) {
      color = "#ce2f2f"//Red
    }
    term.update(l.id, `[[b;#ce2f2f;]${infection.name}]: [[b;${color};]${infection.infected}]`);
  });

}

setInterval(() => {
  termUpdate();
}, 1000);