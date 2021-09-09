function solution(n) {
    let r = [];
    for (var i = 0; i < n; i++) {
        r[i] = i + 1;
    }
    var i = 0;
    
    while (i < n) {
        for (var j = i + 2; j < n; j++) {
            if (r[i] < n) {
                r[i] = r[i] + j;
            } else break 
        }
        i++;
    }
    return r.filter(element => n === element).length;
}



function solution(n) {
    let count = 0
    let arr = []
    for(let i=1; i<=n; i++) {
        arr.push(i)
    } // 배열생성
    
    function recur(Narr) {
        if(count > 0) {
            Narr.shift()
            if(Narr[0] + Narr[1] > n) {
                return count
            }
        }
        Narr.reduce((acc, val) => {
            if(acc+val === n) {
                count++
                recur(Narr)
            } else if(acc + val > n) {
                recur(Narr)
            }
            return acc + val
        })
    }
    recur(arr)
}