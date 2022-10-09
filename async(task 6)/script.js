/*What is async JavaScript?
Asynchronous programming is a technique that enables your program to start a potentially long-running 
 
task and still be able to be responsive to other events while that task runs, rather than having to wait until that 
task has finished. Once that task has finished, your program is presented with the result*/

/*
The global setTimeout method sets a timer which executes a function or specified piece of code once the timer expires
const myTimeout = setTimeout();*/
setTimeout(() => {
    console.log("Hello world");
  }, 3000);

  const currentTime= new Date().getTime()
  setTimeout(() => {
    console.log(currentTime);
  }, 3000);

  /*clear time out
  The clearTimeout() 
  function in javascript clears the timeout which has been set by setTimeout()function before that
  clearTimeout();*/
  