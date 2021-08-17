// 프로그래머스2 짝지어 제거하기
function solution(s) {
    let arr = []
    for(let i=0; i<s.length; i++) {
        if(arr.length === 0 || arr[arr.length-1] !== s[i]) {
            arr.push(s[i])
        } else if(arr[arr.length-1] === s[i]) {
            arr.pop(s[i])
        }
    }
    if(arr.length === 0) {
        return 1
    }
    return 0
}

// stack사용
// 1. 빈배열 하나 만들고
// 2. stack처럼 넣어서 비교 후, push 하거나 pop으로 진행
// 3. 최종적으로 빈배열이 나오거나, 배열 안에 찌꺼기가 남게 됨.
// 4. 빈배열 return 1 찌꺼기 있는 배열 return 0