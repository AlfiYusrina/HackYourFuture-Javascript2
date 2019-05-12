'use strict';

//Write a JavaScript function to check if an object contains given property.
var checkHasOwnProp = (obj, prop) => {
  if(obj.hasOwnProperty(prop)){
    console.log("Yes, I have that property");
  }
};
//Write a JavaScript program to get the length (amount of keys) of a JavaScript object.
var getTheObjLength = key => {
  return Object.keys(key).length;
};
//Write a JavaScript program to create a Clock. Console, every second :”14:37:42”,”14:37:43", “14:37:44”, "14:37:45"
var clock = () => {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  console.log(hours + ":" + minutes + ":" + seconds);
}
window.setInterval(clock, 1000);
