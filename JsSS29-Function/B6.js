function upperCase(a,arr){
    for(let i = 0; i < a.length; i++){
        if(i==0){
            let b = a.toUpperCase();
            let c = b.charAt(0)
            arr.push(c)
        }else arr.push(a[i])
    }
    let result = arr.join("")
    console.log(result)
}
let a = prompt("Nhập 1 chuỗi bất kì")
let arr = []
upperCase(a,arr);


