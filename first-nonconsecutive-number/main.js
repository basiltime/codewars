function firstNonConsecutive (arr) {
    let consecInteger = arr[0];
    let nonConsec;
    for (let i = 1; i < arr.length; i++) {
      if ((consecInteger + 1) !== arr[i]) {
        nonConsec = arr[i];
        break;
      }
      consecInteger ++;
    }
    if (nonConsec == undefined) {
      return null 
    } else { 
      return nonConsec }
  }

  function firstNonConsecutive (arr) {
    let nonConsec = null
    let consecInteger = arr[0]
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i] + 1) - consecInteger != 1) {
        nonConsec = arr[i]
        break
    }
      consecInteger ++
  }
    return nonConsec
  }