//Declare a main function
function main(prompt_value) {
  var words = prompt_value.split(' ');
  if (words[0] == 'img') {
    var image_url = words[1];
    var timeout = parseInt(words[2]);
    if (!timeout) {
      timeout = 5;
    }
    var snap = println($("<img src='"+image_url+"'/>"));
    var timer = setInterval(function() {
      timeout -=1;
      println(timeout+' seconds remaining');
      if (timeout === 0) {
        snap.remove();
        clearInterval(timer);
      }
    }, 1000);
  } else {
    println(prompt_value);
  }
}

//Override the default handleInput function with our main function
handleInput = main;