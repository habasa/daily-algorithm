function reverseArr(arr) {
    if(arr.length === 0) {
      return []
    }
    const head = arr[0]
    const tail = arr.slice(1)
    return reverseArr(tail).concat(head)
  }