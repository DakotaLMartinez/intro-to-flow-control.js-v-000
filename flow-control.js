'use strict';
function basicTeenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!";
  } else if ( age < 13) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return 13 <= age && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  var output;
  switch(age) {
    case 13:
      output = "You are a teenager";
      break;
    case 14:
      output = "You are a teenager";
      break;
    case 15:
      output = "You are a teenager";
      break;
    case 16:
      output = "You are a teenager";
      break;
    case 17:
      output = "You are a teenager";
      break;
    case 18:
      output = "You are a teenager";
      break;
    case 19:
      output = "You are a teenager";
      break;
    default:
      output = "You have an age";
  }
  return output
}