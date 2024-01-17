let a = +prompt("Nhập a")
let b = +prompt("Nhập b")
let arr = []
if(a>b){
    for(let i = b+1;i<a;i++){
        arr.push(i)
    }
}
else if(a<b){
    for(let i = a+1;i<b;i++){
        arr.push(i)
    }
}else alert("2 số bằng nhau ko có khoảng nào")
console.log(arr)