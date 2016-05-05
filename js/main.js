$(document).ready(function(){
  $('[data-toggle]').on('click', function(e){
    $($(this).data('toggle')).slideToggle();
    $(this).parent().parent().toggleClass('open');
    e.preventDefault();
  })
});
