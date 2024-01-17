let a = prompt("mảng gồm ? phần tử")
let arr = []
for (let i = 0; i < a; i++) {
    arr[i] = prompt()
}
function lengthOfIndex(a,arr) {
    let max = arr[0]
    for(let i = 0; i <a;i++){
        if(arr[i].length>max.length) max = arr[i]
    }
    console.log(max)
}

lengthOfIndex(a,arr)
