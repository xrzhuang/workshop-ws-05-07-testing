// change require to es6 import style
import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');

let num = 0;

const increment = () => {
  num += 1;
  $('#main').html(`You have been on this page for ${num} seconds.`);
};

setInterval(increment, 1000);
