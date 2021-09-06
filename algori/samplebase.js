// const isSubsetOf = function (base, sample) {
  
//   while(sample.length > 0) {
//     if(base.includes(sample[0])) {
//       sample.splice(0, 1)
//     } else {
//       return false
//     }
//   }
//   return true
// };

// const isSubsetOf = function(base, sample) {
//   base.sort((a,b) => {
//     return a-b
//   })
//   sample.sort((a,b) => {
//     return a-b
//   })

//   let min = sample[0]
//   let max = sample[sample.length-1]
//   while(sample.length > 0) {
//     let mid = parseInt((min + max)/2)
//     if(mid >= sample[0]) {
//       max = mid
//       if(max === sample[0]) {
//         sample.splice(0, 1)
//         min = sample[0]
//         max = sample[sample.length-1]
//       } 
//     } else if(mid <= sample[0]){
//       min = mid
//       if(mid === sample[0]) {
//         sample.splice(0, 1)
//         min = sample[0]
//         max = sample[sample.length-1]
//       } 
//     }
//   }
//   if(sample.length === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// sample을 base가 갖고있는지에 대한 확인
// 하나라도 없으면 false 다 포함하고 있으면 true
// 시간복잡도 개선 위해서는... 이분탐색쓰면 될것같다
// 1,2,3,4,5 면 1이랑 5사이 중간점 잡아서 반씩 줄이기
// 그러려면 sort로 정렬을 사용 후 이분탐색 시전
// 최솟값 최댓값 지정


const isSubsetOf = function (base, sample) {
    base.sort((a,b) => {
      return a-b
    })
    sample.sort((a,b) => {
      return a-b
    })
    const findItemSortedArr = (item, arr, from) => {
      for(let i=from; i<arr.length; i++) {
        if(item === arr[i]) return i
        else if(item < arr[i]) return -1 // sample값보다 작은거 다 걸러냈는데 본인이랑 같은게 안나오고 바로 초과된 값이 나오면 값을 가진게 아니므로 false return!
      }
      return -1
    }
  
    let baseIdx = 0
    for(let i=0; i<sample.length; i++) {
      baseIdx = findItemSortedArr(sample[i], base, baseIdx)
      if(baseIdx === -1) {
        return false
      }
    }
    return true // 최종적으로 다 돌렸는데 문제가 없으면 return true!
  }
  
  // 너무 복잡하게 생각하지말기..