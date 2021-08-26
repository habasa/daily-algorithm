const rockPaperScissors = function (rounds) {
    let results = []
    let arr = ['rock','paper','scissors']
    if(rounds) {
      rounds =rounds
    } else {
      rounds = 3
    }
  
    const rec = (result, round) => {
      if(rounds === round) {
        results.push(result)
      } else {
        arr.forEach(function(el) {
          rec(result.concat(el), round + 1)
        })
      }
    }
    rec([], 0)
    return results
  }