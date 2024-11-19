const fibs = function (n) {
    let result = [0]
    if (n < 1) {
        return 'error'
    } else if (n === 1) {
        return result
    } else {
        for (let i = 1; i < n; i++) {
            if (i === 1) {
                result.push(1)
            } else {
                result.push(result[i - 2] + result[i - 1])
            }
        }
        return result
    }
}

const fibsRec = function (n) {

    if (n < 1) {
        return 'Error'
    } else if (n === 1) {
        return [0]
    } else {
        if (n < 3) {
            return [0, 1]
        } else {
            let arr = fibsRec(n - 1)
            arr.push(arr[arr.length - 2] + arr[arr.length - 1])
            return arr
        }
    }
}

let test1 = [3, 2, 1, 13, 8, 5, 0, 1]
let test2 = [105, 79, 100, 110]

const mergeSort = function (arr) {
    if (arr.length == 1) {
        return arr[0]
    } else {
        let mid = Math.floor(arr.length / 2)
        let arr1 = arr.slice(0, mid)
        let arr2 = arr.slice(mid)
        mergeSort(arr1)
        mergeSort(arr2)
        let arr3 = []
        while (arr1.length > 0 && arr2.length > 0) {
            if (arr1[0] < arr2[0]) {
                console.log(arr1.shift())
            } else {
                console.log(arr2.shift())
            }
        }
        // return [...arr3, ...arr2, ...arr2]
    }
}

console.log(mergeSort(test2))