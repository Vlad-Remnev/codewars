// функция очистки массива от букв и отрицательных чисел

function filter_list(l) {
    let newArr = []
    l.filter(item => {
        if (typeof item === "number" && item >= 0) {
            newArr.push(item)
        }
    })
    return newArr
}

console.log(filter_list([22, 33, 'dsfdsf', 'asd', '123', -1]))