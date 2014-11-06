# jsconsole

This is a small teaching tool I built for people to program their own REPL in JavaScript.

# Getting Started 

Clone the repository and open up `index.html` in your browser. You'll see a terminal. The default behavior for this terminal is defined in `main.js`. It will simply echo out whatever you type into it using the `println` command, *unless* you type "img http://some-website.com/some-image.jpg" in which case it will output an image. You can edit the `main.js` file to change the behavior of the terminal.

# API

The  `handleInput` function will be called and passed the user's input whenever the user enters something at the prompt.  It can be reassigned to another function (see `main.js` line 13 for an example of this).


The `println` function takes one argument, and will print the argument to the console. The argument can be either a string or an HTML node. 