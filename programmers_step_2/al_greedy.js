// 짐 나르기
function movingStuff(stuff, limit) {
    stuff.sort((a,b) => a-b)
    let count = 0
    while(stuff.length > 0) {
      if(stuff[0] + stuff[stuff.length-1] <= limit) {
        stuff.shift()
        stuff.pop()
      } else {
        stuff.pop()
      }
      count = count + 1
    }
    return count
  }