function getAllButLastElementOfProperty(obj, key) {
    let copy = obj[key]
    if(!Array.isArray(copy) || obj[key].length === 0) {
      return []
    }
    return copy.slice(0, -1)
  }
  