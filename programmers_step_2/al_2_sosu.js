// 소수 구하는 함수
function isPrime(num) {
    if(num < 2) return false
    if(num === 2) return true
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num / i === 0) {
            return false
        }
        return true
    }
}
// 진행중..