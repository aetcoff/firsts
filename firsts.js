

$(document).ready(function() {
  $('#add-new-icon').click(function() {
      console.log("Hello");
  });

  // inserts content from add-new-container to list-nav

$('form').submit(function() {
  if ($('input').val() !== '') {
    var input_value = $('input').val();
    var markup = [];
      markup.push (
        '<li class="new-item">',
        '<a class="checkbox" href="#"></a>',
        input_value,
        '<a class="remove" href="#"></a>',
        '</li>');

    $('#list-nav').prepend(markup.join(''));
  };

});

$(document).on('click', 'a.remove', function(e){
  e.preventDefault();
  $(this).parent().remove();
});

// opens/closes add-new-container

$('#add-new-icon').click(function() {
  $('#add-new-container').toggle();
});


// checks and unchecks checkbox

$('#list-nav').click(function(e) {
  var parent = $(e.target.parentNode);
  if (e.target.className === 'checkbox'){
    if (parent.hasClass('completed')) {
      parent.removeClass('completed');
    }
    else { parent.addClass('completed');}
  };
});

});

