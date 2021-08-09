// 프로그래머스 문자열 내 마음대로 정렬하기
function solution(strings, n) {
    let result = string.sort((a,b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        if(a[n] === b[n]) {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0
        }
    })
    return result;
}

// localeCompare() 이런게 있나보다.
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}