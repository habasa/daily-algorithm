// 프로그래머스 숫자 각 자릿수 더하기
function solution(n){
    return n.toString().split('').reduce( (num1, num2) => Number(num1) + Number(num2) , 0)
}