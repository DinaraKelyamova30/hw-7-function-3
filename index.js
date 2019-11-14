function num(n1, n2){
    n1 = prompt('Write first number');
    n2 = prompt('Write second number');
    check = true;
    for(let i=2; i<=n2; i++){
        if(n1%i==0){
            check = false;
            break;
        }
        if(check){
            ckeck= true;
        }
    }
    return n1 <= n2;
}
console.log(num(n1, n2));
