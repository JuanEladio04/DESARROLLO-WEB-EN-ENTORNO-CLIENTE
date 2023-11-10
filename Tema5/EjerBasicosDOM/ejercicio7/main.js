function ordernumbers() {
    const numberList = Array.from(document.getElementById("numberList").children).map(el => parseInt(el.innerText));
    let ordererNumberList = bubbleSort(numberList);

    ordererNumberList.forEach(num => {
        let number = document.createElement('li');
        number.textContent = num;
        document.getElementById('ordererNumberList').appendChild(number);
    });
}

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
