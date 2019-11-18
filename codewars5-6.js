// You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

function pattern(n){
    return Array.from({ length: n }, (x, i) =>
      Array.from({ length: n }, (x, j) => (i + j) % n + 1).join('')
    ).join('\n');
  }