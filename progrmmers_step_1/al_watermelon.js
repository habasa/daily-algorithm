// 수박수박수박..
function solution(n) {
    let WM = '수박'
    let result = ''
    if(n%2 === 0) {
        for(let i=0; i<n/2; i++) {
            result = result + WM;
        }
        return result;
    } else if(n%2 !== 0) {
        for(let i=0; i<(parseInt(n/2) + 1); i++) {
            result = result + WM;
        }
        return result.slice(0, result.length-1)
    }
}

// repeat이란게 있었넹 
function solution(n) {
    return '수박'.repeat(n).slice(0,n)
}