function findUnique(str) {
    let uniq = ""
    let isUnique = false;
  
    for (let i = 0; i < str.length; i++) {
      if (uniq.includes(str[i]) === false) {
        uniq += str[i]
        // console.log(str[i])
        isUnique = true;
        // console.log(isUnique)
      } else if (uniq.includes(str[i]) === true) {
        uniq += str[i]
        // console.log(str[i])
        isUnique = false;
        // console.log(isUnique)
        break
      }
    }
    return isUnique
  }
  
  console.log(findUnique(`Moonday`))