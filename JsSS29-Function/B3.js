let a = prompt("Nhap chuoi bat ki")
function check(a){
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        
        if (chuoi[i] !== ' ') {
            count++;
        }
    }

}
check(a)