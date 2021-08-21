// toy 브라우저 뒤로가기 앞으로 가기 stack 자료구조
function browserStack(actions, start) {
    let prev = []
    let next = []
    let currentPage = start
  
    for(let i=0; i<actions.length; i++) {
      if(actions[i] === -1 && prev.length !== 0) { // 뒤로가기
        let prevPage = prev.pop()
        next.push(currentPage)
        currentPage = prevPage
      } else if(actions[i] === 1 && next.length !== 0) { // 앞으로 가기
          let nextPage = next.pop()
          prev.push(currentPage)
          currentPage = nextPage
      } else { // 알파벳일때
          prev.push(currentPage)
          currentPage = actions[i]
          next = []
      }
    }
  
    return [prev, currentPage, next]
  }