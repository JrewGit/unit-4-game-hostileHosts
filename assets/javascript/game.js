function chooseACharacter() {
    $("#message").text("Choose a character!");
  }
  
  function displayCharacters() {
    $("#characterSelection").append("<img src='' id='goku'>");
    $("#characterSelection").append("<img src='' id='superman'>");
    $("#characterSelection").append("<img src='' id='thanos'>");
    $("#characterSelection").append("<img src='' id='aang'>");
  }
  
  
  
  displayCharacters();
  chooseACharacter();