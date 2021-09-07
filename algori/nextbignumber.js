// programmers 다음 큰 숫자
function solution(num) {
    const bin = num.toString(2).match(/1/g).length
    while(num++) {
        if(num.toString(2).match(/1/g).length === bin) {
            return num
        }
    }
}