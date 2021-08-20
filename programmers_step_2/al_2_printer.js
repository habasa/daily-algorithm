// 프린터
function solution(priorities, location) {
    let first = 1
    let answer = 1
    let target_index = location
    
    while(priorities.length>0) {
        first = priorities.shift()
        
        if(priorities.some(el => el > first)) {
            priorities.push(first)
        } else {
            if(target_index === 0) {
                break
            } else {
                answer++
            }
        }
        
        if(target_index === 0) {
            target_index = priorities.length-1
        } else {
            target_index--
        }
    }
    return answer
}

// queue 사용