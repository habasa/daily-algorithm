// 행렬 덧셈찾기
function solution(arr1, arr2) {
    let answer = []
    for(let k=0; k<arr1.length; k++) {
        answer.push([])
    }
    for(let i=0; i<arr1.length; i++) {
        for(let j=0; j<arr1[0].length; j++) {
             answer[i][j] = arr1[i][j] + arr2[i][j]   
        }
    }
    return answer
}
// 리턴할 배열에 값이 들어갈만큼 미리 2차원 배열을 만들어줘야하는듯?


function solution(arr1, arr2) {
    return arr1.map((el,i) => el.map((el2,j) => el2 + arr2[i][j]))
}

// 이렇게도 가능.f