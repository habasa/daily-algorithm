// 프로그래머스 1단계 약수의 개수와 덧셈

function solution(left, right) {
    let count = 0
    let sum = 0
    for(let i=left; i<=right; i++) {
        for(let j=1; j<=left; j++) {
            if(left%j === 0) {
                count++
            }
        }
        if(count%2 === 0) {
                sum = sum + left
            count = 0
            left++
            } else if(count%2 !== 0) {
                sum = sum - left
                count = 0
                left++
            }
    }
    return sum
}