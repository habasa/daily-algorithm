// 프로그래머스 제일 작은 수 제거하기
function solution(arr) {
    if(arr.length === 1) {
        return [-1]
    }
    let min = arr[0]
    let index = 0
    for(let i=1; i<arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
            index = arr.indexOf(min)
        }
    }
    return arr.filter((el,i) => i !== index)
}

// 또다른 풀이법 spread syntax 사용시
function solution(arr) {
    if(arr.length === 1) {
        return [-1]
    }
    let min = Math.min(...arr)
    let index = arr.indexOf(min)
    return arr.filter((el, i) => i !== index)
}