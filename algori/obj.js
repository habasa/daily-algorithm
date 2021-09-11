function select(arr, obj) {
    let answer = {}
    for(let i=0; i<arr.length; i++) {
      for(let key in obj) {
        if(key === arr[i]) {
          answer[key] = obj[key]
        }
      }
    }
    return answer
  }
