//Declare a main function
function main(prompt_value) {
  var words = prompt_value.split(' ');
  if (words[0] == 'img') {
    var image_url = words[1];
    println($("<img src='"+image_url+"'/>"));
  } else {
    println(prompt_value);
  }
}

//Override the default handleInput function with our main function
handleInput = main;