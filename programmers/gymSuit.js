// 체육복 (Greedy) 문제

function solution(n, lost, reserve) {
    var answer = 0;
    answer = n - lost.length;
    
    let checkLost = lost.slice().fill(false)
    let checkReserve = reserve.slice().fill(false);

    for(let i = 0; i < checkLost.length; i++) {
        let checkLow = reserve.indexOf(lost[i] - 1);
        let checkHight = reserve.indexOf(lost[i] + 1)
        
        if(!checkLost[i] && checkLow>= 0 && !checkReserve[checkLow]) {
            checkLost[i] = true;
            checkReserve[checkLow] = true
            answer +=1;

        }else if (!checkLost[i] &&  checkReserve[checkHight] && !checkReserve[checkHight]){
            checkLost[i] = true;
            checkReserve[checkHight] = true;
            answer += 1;
        }
    }
    return answer;
}



// result 5
solution(5,[2,3], [1,3,5])
// result 4
solution(5,[2,4], [3])
// result 2
solution(3,[3], [1])