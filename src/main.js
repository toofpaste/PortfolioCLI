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

// intro =
// `
// ▄▀▀▄ ▄▀▀▄  ▄▀▀█▀▄    ▄▀▀▄▀▀▀▄  ▄▀▀▄ ▄▀▀▄  ▄▀▀▀▀▄      ▄▀▀▄ ▄▄   ▄▀▀▄ ▄▀▀▄  ▄▀▀▄ ▀▄  ▄▀▀▀█▀▀▄  ▄▀▀█▄▄▄▄  ▄▀▀▄▀▀▀▄ 
// █   █    █ █   █  █  █   █   █ █   █    █ █ █   ▐     █  █   ▄▀ █   █    █ █  █ █ █ █    █  ▐ ▐  ▄▀   ▐ █   █   █ 
// ▐  █    █  ▐   █  ▐  ▐  █▀▀█▀  ▐  █    █     ▀▄       ▐  █▄▄▄█  ▐  █    █  ▐  █  ▀█ ▐   █       █▄▄▄▄▄  ▐  █▀▀█▀  
//    █   ▄▀      █      ▄▀    █    █    █   ▀▄   █         █   █    █    █     █   █     █        █    ▌   ▄▀    █  
//     ▀▄▀     ▄▀▀▀▀▀▄  █     █      ▀▄▄▄▄▀   █▀▀▀         ▄▀  ▄▀     ▀▄▄▄▄▀  ▄▀   █    ▄▀        ▄▀▄▄▄▄   █     █   
//            █       █ ▐     ▐               ▐           █   █               █    ▐   █          █    ▐   ▐     ▐   
//            ▐       ▐                                   ▐   ▐               ▐        ▐          ▐                  
// `;

var updateLines = [];

var scanlines = $('.scanlines');
var tv = $('.tv');
var term = $('#term').terminal(function (command, term) {
  if (command.match(/^\s*exit\s*$/)) {
    $('.tv').addClass('collapse');
    term.disable();
  } else if (command !== '') {
    processCommand(command, term);
    //term.echo(command);
    //term.update(2, "[[b;#fff;]Hello]")
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


function processCommand(cmd, term) {
  if (cmd == "status") {
    window.world.cities.forEach(city => {
      let sick = "";

      term.echo(`[[b;#fff;]Name:] ${city.name}`);
      term.echo(`Population: ${city.population}${sick > 0 ? ` / [[b;#EEFC12;]${sick}]` : ``}`);

      city.infected.forEach(i => {
        term.echo(`[[b;#ce2f2f;]${i.name}]: ${i.infected}`);
        updateLines.push({
          id: term.last_index(),
          city: city.name
        })
      });

    });
    return;
  }

}

function termUpdate() {
  updateLines.forEach(l => {

    let sick = 0;
    let city = window.world.cities.filter(c => c.name === l.city)[0];
    let pop = city.population;

    city.infected.forEach(i => {
    
    let color = "";
    if (i.infected < pop * 0.20) {
      color = "#0ab864"//Green
    }
    if (i.infected > pop * 0.50) {
      color = "#EEFC12"//Yellow
    }
    if (i.infected > pop * 0.90) {
      color = "#ce2f2f"//Red
    }    
      term.update(l.id, `[[b;#ce2f2f;]${i.name}]: [[b;${color};]${i.infected}]`);      
    });

  });
}

setInterval(() => {
  termUpdate();
}, 1000);