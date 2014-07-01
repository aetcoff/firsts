
var listNav = $('#list-nav');

 // inserts content from add-new-container to list-nav

$('#add-new-icon').hover(
  function(){
    $(this).addClass('hover');
  },
  function () {
    $(this).removeClass('hover');
  });

$('form').submit(function() {


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
    else { parent.addClass('completed');
  };
  };
});

// getting tag values



//remove placeholder text on focus
$('input,textarea').focus(function(){
   $(this).removeAttr('placeholder');
});

// show and hide .new-tag-plus on click of .tag-icon-plus
$('.tag-icon-plus').click(function() {
  $('.new-tag-plus').toggle();
});

//local storage

$(document).ready(function(ls){
  var firsts;
  if (ls.getItem('firsts')) {
    firsts = JSON.parse(ls.getItem('firsts'));
    buildList(firsts);
  } else {
    ls.setItem('firsts','{}');
  }

  var todo;
  $('#add-button').click(function(e){
    e.preventDefault();
    todo = $('input')[0].value;
    var inputs = $('input.input-tag');
    tagsArr = [];
    for (var i = 0; i < inputs.length; i++) {
      console.log(i, inputs, inputs[i]);
      tagsArr.push(inputs[i].value);
    }
    firsts[todo] = {
      'todo': todo,
      'completed': false,
      'tags': tagsArr
    };
    ls.setItem('firsts', JSON.stringify(firsts));
    if ($('#new-firsts').val() !== '') {
      var input_value = $('#new-firsts').val();
      var markup = [];

      console.log(tagsArr);
        markup.push (
          '<li>',
          '<a class="checkbox" href="#">checkbox</a>',
          '<span class="new-list-item">' + input_value + '</span>',
          '<a class="remove" href="#">remove</a>',
          '<span class="list-tag-item">' + tagsArr.join(' ,') + '</span>',
          '</li>');

      listNav.prepend(markup.join(''));
    };
  });

  //remove item

  $('#list-nav').on('click', '.remove', function(e){
    e.preventDefault();
    var key = $(this).parent().find("span").text();
    delete firsts[key];
    $(this).parent().remove();
    ls.setItem('firsts', JSON.stringify(firsts));

  });

  function buildList(firsts) {
    for (foo in firsts) {
      $('#list-nav').prepend('<li><a class="checkbox" href="#">checkbox</a><span class="new-list-item">'+ firsts[foo].todo + '</span> <a class="remove" href="#">remove</a></li>');
    }
  }
}(window.localStorage));



