//You are given two strings. In a single move, you can choose any of them, and delete the first (i.e. leftmost) character.

function shiftLeft(s, t) {
    let i = s.length, l = t.length;
    while (i >= 0 && l >= 0 && s[i] == t[l])
      i--, l--;
    return (i + 1) + (l + 1);
  }