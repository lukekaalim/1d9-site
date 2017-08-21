import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'click me and check the console! you twat';
  btn.onclick = printMe;

  element.appendChild(btn);

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
