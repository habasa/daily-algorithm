// greedy
let activity = [[1,1,3], [2,2,5], [3,4,7], [4,1,8], [5,5,9], [6,8,10], [7,9,11], [8,11,14], [9,13,16]];

function activitySelection(act) {
    let result = []
    let sorted = act.sort((prev, cur) => { // 아 sorting 이렇게 가능하지...
        return prev[2] - cur[2]
    }) // using last array index to sorting activity.

    let last = 0
    sorted.forEach(el => {
        if(last < el[1]) {
            last = el[2]
            result.push(el)
        }
    })
    return result.map(el => {
        return el[0]
    })
}

activitySelection(activity)