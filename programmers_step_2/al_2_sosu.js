// 프로그래머스 소수찾기
function solution(numbers) {
    const splitNum = numbers.split('')
    const result = new Set()
    
    function isPrime(num) {
        if(num < 2) {
            return false
        } 
        if(num === 2) {
            return true
        }
        for(let i=2; i<=Math.sqrt(num); i++) {
            if(num%i === 0) {
                return false
            }
            return true
        }
    }
    
    getNumber(splitNum, '')
    
    function getNumber(splitNumber, currentNumber) {
         if(splitNumber.length) {
            for(let j=0; j<splitNumber.length; j++) {
                const copy = [...splitNumber] // 기존 원본배열 유지
                copy.splice(j, 1)
                
                if(isPrime(parseInt(currentNumber + splitNumber[j]))) {
                   result.add(parseInt(currentNumber + splitNumber[j])) 
                }
                getNumber(copy, parseInt(currentNumber + splitNumber[j]))
            }
        }
    }
    return result.size
}