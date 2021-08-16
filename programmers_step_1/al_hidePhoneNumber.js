// 프로그래머스 핸드폰번호 가리기
function solution(phone_number) {
    let head = phone_number.slice(0, phone_number.length-4).length
    let tail = phone_number.slice(phone_number.length-4)
    let star = ''
    for(let i=0; i<head; i++) {
        star += '*'
    }
    return star + tail
}