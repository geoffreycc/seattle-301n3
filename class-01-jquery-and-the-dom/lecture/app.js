// Basic jQuery Selectors
// Reminder that all jQuery selectors will begin with a '$'

var test = $('#test').text(); // Targets the element with an ID of 'test', and assigns the text content to a var.
var liEls = $('.first_li').text(); // Targets all elements with a class of 'first_li' and assigns the text content to a var.
var sectionEls = $('section:first').html(); // Targets the first section element and assigns the inner html to a var.

console.log(test, liEls, sectionEls);

$('.scott').css('list-style-type', 'none');
var test = $('#one').hide();
