//Declare a main function
function main(prompt_value) {
  var matches = prompt_value.match(/^img (https?:\/\/\S*) ?(\d*)$/);
  if (matches) {
    var image_url = matches[1];
    var timeout = parseInt(matches[2]);
    if (!timeout) {
      timeout = 5;
    }
    var image = println($("<img src='"+image_url+"'/>"));

    var timer = setInterval(function() {
      timeout -= 1;
      println('You have '+timeout+' seconds remaining');
      if (timeout <= 0) {
        image.remove();
        clearTimeout(timer);
      }
    }, 1000);

    image.on('click', function() {
      image.remove();
      clearTimeout(timer);
    });

  } else {
    var text = println(prompt_value);
    text.on('click', function() {
      alert(prompt_value);
    });
  }
}

//Override the default handleInput function with our main function
handleInput = main;