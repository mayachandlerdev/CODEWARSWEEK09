//Given a positive integer N, return the largest integer k such that 3^k < N.


function largestPower(n){
    if (n == 3 || n == 2 || n == 0) {
        return 0;
    }
    else if (n == 1) {
        return -1;
    }
    else {
        return Math.trunc(Math.log(n-1)/Math.log(3));
    }
  }