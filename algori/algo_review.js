// 객체 복습 깃 에러 뭐임?
function getValueOfNthElement(arr, num) {
    if(arr.length === 0) {
      return 'no name'
    } else if(arr.length-1 < num) {
      return arr[arr.length-1].name
    } else {
      return arr[num].name
    }
  }