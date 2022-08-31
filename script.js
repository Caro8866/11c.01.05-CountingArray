"use strict";
window.addEventListener("DOMContentLoaded", countingArray);

let counter = 0;
const array = [];

function countingArray() {
  if (counter < 20) {
    console.log(counter);
    setTimeout(countingArray, 1000);
    array.unshift(counter);
    console.log(array);
    counter += 1;

    if (array.length > 8) {
      array.pop();
    }
  }
}
