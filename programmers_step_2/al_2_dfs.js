// 바코드
function barcode(len) {
    const isValid = (str) => {
      const reversed = str.split('').reverse().join('')
      const halfLen = Math.floor(str.length/2)
      for(let i=1; i<=halfLen; i++) {
        if(reversed.slice(0,i) === reversed.slice(i, i+i)) {
          return false
        }
      }
      return true
    }
  
    const char = '123'
    const aux = (str) => {
      // 재귀는 탈출구가 있어야함.
      if(str.length === len) return str
      for(let i=0; i<char.length; i++) {
        if(isValid(str + char[i])) {
          const founded = aux(str + char[i])
          if(founded !== null) return founded
        }
      }
      return null
    }
    return aux('')
  }