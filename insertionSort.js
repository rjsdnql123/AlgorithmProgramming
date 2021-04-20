function insertionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let j = i;
        while(arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            j--
        }
    }
    console.log(arr)
}

insertionSort([3,2,1])

//배열의 앞과 바로 뒤의 값을 비교한다.
//비교한뒤, 그 다음것을 비교한다.