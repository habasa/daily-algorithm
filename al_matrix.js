// 인접행렬 찾기
function createMatrix(edges) {
    let max = 0
    for(let i=0; i<edges.length; i++) {
      if(edges[i][1] > max) {
        max = edges[i][1]
      }
    }
    const matrix = Array(max+1).fill(0).map(row => Array(max+1).fill(0))
    
    for(let j=0; j<edges.length; j++) {
      if(edges[j][2] === 'directed') {
        matrix[edges[j][0]][edges[j][1]] = 1
      } else if(edges[j][2] === 'undirected') {
        matrix[edges[j][0]][edges[j][1]] = 1
        matrix[edges[j][1]][edges[j][0]] = 1
      }
    }
    return matrix
  }

  // forEach 사용
  function createMatrix(edges) {
    let max = 0
    for(let i=0; i<edges.length; i++) {
      if(edges[i][1] > max) {
        max = edges[i][1]
      }
    }
    const matrix = Array(max+1).fill(0).map(row => Array(max+1).fill(0))
  
    edges.forEach(edge => {
      const [row, col, direction] = edge
      if(direction === "undirected") {
        matrix[col][row] = 1
      }
      matrix[row][col] = 1
    })
    return matrix
  }