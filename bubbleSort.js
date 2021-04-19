function bubbleSort(arr) {
    console.log(typeof arr[1])

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            let temp;
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            };
        };
    };
    return arr
};

module.exports =  bubbleSort;
// bubbleSort([8,6,7,3,1,2,6])