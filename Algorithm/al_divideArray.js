// 프로그래머스 나누어 떨어지는 숫자배열
function solution(arr, divisor) {
    return arr.map(el => el%divisor).includes(0) ? 
    arr.filter(el => el%divisor ===0).sort((a,b) => a-b):
    [-1]
}