// and
function and(arr) {
    if(arr.length === 0) {
      return true
    }
    const head = arr[0]
    const tail = arr.slice(1)
    return head && and(tail)
  }

// or
function or(arr) {
    if(arr.length === 0) {
      return false
    }
    const head = arr[0]
    const tail = arr.slice(1)
    return head || or(tail)
  }

// reverse
  function reverseArr(arr) {
    if(arr.length === 0) {
      return []
    }
    const head = arr[0]
    const tail = arr.slice(1)
    return reverseArr(tail).concat(head)
  }