// obj1의 객체 Obj2의 객체의 키값과 동일한게 없으면 obj2 추가
// 동일한게 있으면 Obj1의 키:값 그대로 유지시키기.
function extend(obj1, obj2) {
    for(let key in obj2) {
      if(!(obj1[key])) {
        obj1[key] = obj2[key]
      }
    }
  }

  // let str = 'banana'
  // {b:1, a:3, n:2} 결과값이 이런식으로 되게 만들어주기.
  function countAllCharacters(str) {
    let obj = {}
    for(let i=0; i<str.length; i++) {
      if(obj[str[i]] === undefined) {
        obj[str[i]] = 1
      } else {
        obj[str[i]]++
      }
    }
    return obj
  }
  