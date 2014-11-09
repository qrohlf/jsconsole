//Declare a main function
function main(prompt_value) {
  // Split the string the user entered into its component words
  var words = prompt_value.split(' ');

  if (words[0] == 'img') {
    // If the first word is 'img', then assume the second word is
    // a link to an image and display it
    var image_url = words[1];
    println($("<img src='"+image_url+"'/>"));
  } else {
    // If the first word is not 'img', just print the whole string back out
    println(prompt_value);
  }
}

//Override the default handleInput function with our main function
handleInput = main;