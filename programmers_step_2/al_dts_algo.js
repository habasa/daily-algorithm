// 프린터기 queue 
function queuePrinter(bufferSize, capacities, documents) {
    let count = 0 // 프린트 걸리는 시간
    let queue = []
    let totalBuffefSize = 0
  
    for(let i=0; i<bufferSize; i++) { // 고정 버퍼사이즈 큐에 만들어준다.
      queue.push(0)
    }
    let currentDocument = documents.shift()
    queue.unshift(currentDocument) // [7, 0]
    queue.pop()
    totalBuffefSize = totalBuffefSize + currentDocument
    count++ // 1초가 경과됨.
  
    while(totalBuffefSize) {
      totalBuffefSize = totalBuffefSize - queue.pop() // 전체 버퍼사이즈 계산하면서 배열 재조정
      currentDocument = documents.shift()
      if(totalBuffefSize + currentDocument <= capacities) {
        queue.unshift(currentDocument)
        totalBuffefSize = totalBuffefSize + currentDocument
      } else { // 총 capacities보다 클때
      documents.unshift(currentDocument)
      queue.unshift(0)
      }
      count++
    }
    return count
  }