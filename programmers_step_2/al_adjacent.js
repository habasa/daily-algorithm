function getDirections(matrix, from, to) {
    const queue = [from]
    const enqueue = (n) => queue.unshift(n)
    const dequeue = () => queue.shift()
  
    const isVisited = new Array(matrix.length).fill(false)
    isVisited[from] = true
  
    while(queue.length > 0) {
      const now = dequeue()
      if(now === to) return true
  
      for(let i=0; i<matrix[now].length; i++) {
        if(matrix[now][i] && !isVisited[i]) {
          enqueue(i)
          isVisited[i]
        }
      }
    }
    return false
  }