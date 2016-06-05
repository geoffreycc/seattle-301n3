//nav handler
$('nav').on('click', 'a', function() {
  $('section').hide();
  var $whereToGo = $(this).data('tab');
  $('#' + $whereToGo).fadeIn();
});

//event logger
function logTarget() {
  var $target = $(this).text();
  var $feedback = $('#feedback p:first-child');
  var $newFeedback = $feedback.clone();

  console.log(this);
  console.log($(this));
  $newFeedback.text('You clicked on ' + $target);
  $('#feedback').append($newFeedback);
}

//not delegated - event bound to all the 'li's
//no selector specified in .on() method
$('#menu1 li').on('click', logTarget);

//delegated - event is bound to parent
//'li' is specified in .on()
$('#menu2').on('click','li', logTarget);

//button handlers
$('button[name=adder1]').on('click', function() {
  $newLi1 = $('#menu1 li:first').clone();
  $newLi1.text('newLi1');
  $('#menu1').append($newLi1);
});

$('button[name=adder2]').on('click', function() {
  $newLi2 = $('#menu2 li:first').clone();
  $newLi2.text('newLi2');
  $('#menu2').append($newLi2);
});

$('button[name=clear]').on('click', function() {
  $('.log-item:first').siblings().remove();
});


//checkbox handler - change event.
//shows difference between attr & prop
$('input[name=check]').on('change', function() {
  var $checkbox = $(this);

  $('#checked-state').html('.attr( "checked" ): ' + $checkbox.attr("checked") + '<br>.prop( "checked" ): ' + $checkbox.prop("checked"));

}).change();

//select box filtering
$('select[name=icecream]').on('change', function() {
  var $choice = $(this).val();
  $('img').hide();
  $('img[data-flavor=' + $choice + ']').show();
});
