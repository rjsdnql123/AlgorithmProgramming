//프로그래머스 K번째 수 (정렬)
//문제시 메일 주시면 삭제 하겠습니다.
function solution(array, commands) {
    let result
    let arr = [];
    
    for(let i = 0; i < commands.length; i++){
        result = array.slice(commands[i][0]-1,commands[i][1]);    //슬라이스 친다.
        
        result.sort(function(a,b){
           return a-b
        });//정렬
        arr.push(result[commands[i][2]-1]) //선택
        
    }
    return arr;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))