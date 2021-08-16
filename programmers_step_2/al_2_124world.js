// 1,2,4로만 이루어진 나라
function solution(n) {
    let result = ''
    while(n>0) {
        if(n%3 === 0) {
            result = '4' + result;
            n = n/3 - 1;
        } else if(n%3 === 1) {
            result = '1' + result;
            n = Math.floor(n/3)
        } else if(n%3 === 2) {
            result = '2' + result;
            n = Math.floor(n/3)
        }
    }
    return result;
}
    
// 10진법 3으로 나누면 나머지값에 따라 값 변동
// 1=>1 2=>2 0=>4