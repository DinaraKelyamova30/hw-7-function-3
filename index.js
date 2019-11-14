//прості числа
first = prompt('Write first number');
last = prompt('Write second number');

function prime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
for (var i = first; i < last; i++) {
    if (prime(i)) {
        console.log(i);
    }
}