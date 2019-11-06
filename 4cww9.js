//Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

//Find the number of Friday 13th in the given year.

function unluckyDays(year){
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
      if(new Date(year, i, 13).getDay() === 5){
        unlucky++;
      }
    }
    return unlucky;
  }