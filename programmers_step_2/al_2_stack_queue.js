function solution(progresses, speeds) {
    let ansArr = []
    let answer = 0
    for(let i=0; i<progresses.length; i++) {
        answer = Math.ceil((100 - progresses[i]) / speeds[i])
        ansArr.push(answer)
    }
    let result = [0]
    let maxDay = ansArr[0]
    for(let i=0, j=0; i<ansArr.length; i++) {
        if(ansArr[i] <= maxDay) {
            result[j]++;
        } else {
            maxDay = ansArr[i];
            j = j+1;
            result[j] = 1;
        }
    }
    return result
}