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

// banjo

function areYouPlayingBanjo(name) {
    const newName = name.toLowerCase().split('');
    if (newName[0] == 'r') {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}

console.log(areYouPlayingBanjo('Adam'))
console.log(areYouPlayingBanjo('Ringo'))



