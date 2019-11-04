//Your task is to find all the elements of an array that are not consecutive.

//Create a function named allNonConsecutive

//E.g., if we have an array [1,2,3,4,6,7,8,10] then 6 and 10 are non-consecutive.

//You should return the results as an array of objects with two values i: <the index of the non-consecut

function allNonConsecutive (arr) {
    const result = [];
    for (let i = 1; i < arr.length; i++)
      if (arr[i] != arr[i-1] + 1)
        result.push({i: i, n: arr[i]});
    return result;
  }