$(document).ready(function (){
console.log("hey!");
    var frodo = {};

    frodo.x = 0;
    frodo.y = 0;

  $(document).on('keydown', handleTyping);

  function handleTyping(event) {
    console.log(event.which);
    switch(event.which) {
      case 39:
        $('#frodo').css({
          'left': (frodo.x += 10) + 'px'
        });
        break;
      case 40:
        $('frodo').css({
          'top': (frodo.y += 10) + 'px'
        });
        break;
      case 37:
        $('frodo').css({
          'left': (frodo.x -= 10) + 'px'
        });
        break;
      case 38:
        $('frodo').css({
          'top': (frodo.y -= 10) + 'px'
        });
        break;
      }
}
});
