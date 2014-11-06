//Declare a main function
function main(prompt_value) {
  var image = prompt_value.match(/^img (https?:\/\/.*)$/);
  if (image) {
    var image_url = image[1];
    println($("<img src='"+image_url+"'/>"));
  } else {
    println(prompt_value);
  }
}

//Override the default handleInput function with our main function
handleInput = main;