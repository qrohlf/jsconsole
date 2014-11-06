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

  //Attach a submit handler to the form
  $('form').on('submit', function(event) {
    handleInput(prompt.val());
    prompt.val('');
    event.preventDefault();
    return false; //prevents the form submission event from being passed to the next handler
  });

  for(i=0; i<10; i++) {
    println('foobar '+i);
  }

});

function println(item) {
  var logline = $('<div class="logline"></div>').append(item);
  var append = $('.log').append(logline);
  if (logline[0].firstElementChild) {
    return $(logline[0].firstElementChild);
  } else {
    return $(logline[0]);
  }
}