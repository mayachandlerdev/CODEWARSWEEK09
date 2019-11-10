//Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

'use strict';     
function validateUsr(name) {
    res = /^[a-z0-9\_]{4,16}$/g.test(name);
    return res
  }