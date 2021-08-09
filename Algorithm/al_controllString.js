// 문자열 다루기
function solution(s) {
    if(s.length === 4 || s.length === 6) {
        return s.split('').every(el => !isNaN(el))
    }
    return false
}

// every 모든 요소값이 해당조건을 만족하는지 확인 불린값으로 나옴.