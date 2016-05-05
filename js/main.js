Handlebars.registerHelper('hiddenIfEmpty', function(phone) {
  return phone == '' ? 'hidden' : '';
});

$(document).ready(function(){
  var template = Handlebars.compile($("#user-template").html());
  var usersElement = $('#users');
  $.getJSON( "data/users.json", function( data ) {

    data.forEach(function(user){
      usersElement.append(template(user));
    });

    // Attaching the event to toggle the accordion
    $('[data-toggle]').on('click', function(e){
      $($(this).data('toggle')).slideToggle();
      $(this).parent().parent().toggleClass('open');
      e.preventDefault();
    })
  });
});
