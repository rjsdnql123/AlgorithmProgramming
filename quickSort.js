function quick(start, end, arr) {
    if(start >= end) {
        return
    }
    let temp;
    let i = start + 1;
    let j = end;
    let key = start
    while(i <= j) {   //둘이 크로스 되지 않았을 때
        while(arr[key] >= arr[i]) {  //arr[key]가 arr[i] 보다 클때
            i++;
        };
        while(arr[key] <= arr[j] && j > start) {
            j--;
        };
        if(i > j) {
            temp = arr[key];
            arr[key] = arr[j];
            arr[j] = temp; 
        }else {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }
    quick(start, j - 1, arr)
    quick(i + 1, end, arr)
}

function quickSort(arr) {
    quick(0, arr.length - 1, arr)
    console.log(arr)
}

quickSort([5,6,8,3,5,6,3,2,1])