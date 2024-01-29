import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let counter = 0;
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

function updateCounter() {
    counter++;
    $('#count').html(`${counter} clicks on the button`);
}
const debounceUpdate = _.debounce(updateCounter, 500);
$('button').on('click', debounceUpdate);
