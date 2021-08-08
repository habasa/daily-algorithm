// 가운데 글자 찾기
function solution(s) {
    let index = 0
    if(s.length%2 !== 0) {
        index = Math.ceil(s.length/2)
        return s[index-1]
    }
    if(s.length%2 === 0) {
        index = s.length/2
        return s[index-1]+s[index]
    }
}