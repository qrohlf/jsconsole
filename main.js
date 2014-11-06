function main(prompt_value) {
  var image = prompt_value.match(/^img (https?:\/\/.*)$/);
  if (image) {
    var image_url = image[1];
    println($("<img src='"+image_url+"'/>"));
  } else {
    println(prompt_value);
  }
}


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//                                                     //
//                                                     //
// Here be dragons!                                    //
//                                                     //
// Do not change the code below unless you are         //
// sure that you know what you are doing               //
//                                                     //
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//Global pointer to input handler
var handleInput = main;

//Wait until the page is finished loading before doing anything
$(document).ready(function() {
  //Get a handle on the prompt element
  var prompt = $('#prompt');
  var history = [];
  if (localStorage.history) {
    history = JSON.parse(localStorage.history);
  }
  var history_index = history.length;
  var temp_command;

  //Attach a submit handler to the form
  $('form').on('submit', function(event) {
    addToHistory(prompt.val());
    handleInput(prompt.val());
    prompt.val('');
    event.preventDefault();
    history_index = history.length;
    return false; //prevents the form submission event from being passed to the next handler
  });

  $('form').on('keyup', function(event) {
    var update = false;
    switch(event.keyCode) {
      case 38: //up arrow
        if (history_index == history.length) {
          temp_command = prompt.val();
        }
        history_index -= 1;
        update = true;
        break;
      case 40: //down arrow
        history_index += 1;
        update = true;
        break;
    }
    if (update) {
        history_index = Math.max(history_index, 0);
        history_index = Math.min(history_index, history.length);
        if (history_index == history.length) {
          prompt.val(temp_command);
        } else {
          prompt.val(history[history_index]);
        }
    }
  });

  function addToHistory(item) {
    //add an item to the localstorage-backed history
    history.push(item);
    localStorage.history = JSON.stringify(history);
  }

  welcome();

});

function println(item) {
  var logline = $('<div class="logline"></div>').append(item)[0];
  $('.log').append(logline);
  logline.scrollIntoView();
  if (logline.firstElementChild) {
    return $(logline.firstElementChild);
  } else {
    return $(logline);
  }
}

function welcome() {
  println('Hi! Welcome to jsconsole.');
  println('This is a very simple prompt that you can use to play around with JavaScript.');
  println('To get started, check out the Readme.md file.');
  println('If you already know a little JavaScript, you can also check out the main.js file.');
}