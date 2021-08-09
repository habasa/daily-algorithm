// 프로그래머스 두 정수 사이의 합

// 노가다 풀이
function solution(a, b) {
    let sum = 0
    if(a === b) return a
    if(a<b) {
     while(a<=b) {
        sum = sum + a
        a++
    }
    return sum   
    } else if(a>b) {
        while(a>=b) {
        sum = sum + b
        b++
    }
    return sum
    }
}

// 순열써도 될듯 