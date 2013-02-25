$(document).ready(function() {
  function update_player_position(player,position) {  
    if (player == 'player1' && position != 16) {
      $('tr#player1_strip').find('.active').removeClass('active');
      $('tr#player1_strip td:nth-child(' + position + ')').addClass('active');
      win_racer();
    } else if (player=='player2' && position != 16) {
      $('tr#player2_strip').find('.active').removeClass('active');
      $('tr#player2_strip td:nth-child(' + position + ')').addClass('active');
      win_racer();
    }

  }

  function reset_racer() {
    $('tr#player1_strip').find('.active').removeClass('active');
    $('tr#player1_strip td:nth-child(1)').addClass('active');
    $('tr#player2_strip').find('.active').removeClass('active');
    $('tr#player2_strip td:nth-child(1)').addClass('active');
  }

  function win_racer() {
    if ($('tr#player1_strip').find('.active').index() == 14) {
      $('#game_over').html("Game over. Play again! Player 1 wins!!!!")
      debugger
      window.setTimeout(reset_racer,2000);
    }
    if ($('tr#player2_strip').find('.active').index() == 14) {
      $('#game_over').html("Game over. Play again! Player 2 wins!!!!")
      window.setTimeout(reset_racer, 2000);

    }
  }

  $('#reset').click(function() {
    reset_racer();
  }) ;
    

  $(document).on('keyup', function(event) {
    var key_pressed = String.fromCharCode(event.keyCode);
    var key_press1 = key_pressed.match(/P/);
    var key_press2 = key_pressed.match(/W/);
    if (key_press1 != null) {
      var position = $('tr#player1_strip').find('.active').index();
      update_player_position('player1', position+2)
    }
    if (key_press2 != null ) {
      var position = $('tr#player2_strip').find('.active').index();
      update_player_position('player2', position+2)
    }
    
  });

});














  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
