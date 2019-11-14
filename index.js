let first = prompt('Write first number');
let last = prompt('Write second number');

function prime() {
    for (let count = first; count < last; count++) {
        let check = true;
        for (let i = 2; i < count; i++) {
            if (count % i == 0) {
                check = false;
            }
        }
        if (check) {
            check = true;
        }
        return check;
    }
}
console.log(prime(first, last));