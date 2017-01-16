/*### First program
  * Create a file called `hello-world.js` . In it, write a simple node program that outputs "`Hello World!`" 
  to the console.
  * Add an instruction to your program that will output "`Hello World Again!!`" 10 seconds after
  the program was run.
  * Save, commit and push.*/
  
  function sayHello() {
      console.log("Hello World!");
      setTimeout(sayHello, 10000);
  }
  
 sayHello();
  