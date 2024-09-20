const fibonacci = function(num) {
    let position = +num;
    let before = 0;
    let next = 0;

    if (position < 0) {
        return 'OOPS';
    } else {
        for (let i = 0; i < position; i++) {
            if (i === 0) {
                next = 1;
                continue;
            }
            const placeholder = next;
            next += before;
            before = placeholder;
        }
    }
    return next;
};

console.log(fibonacci(25));

// Do not edit below this line
module.exports = fibonacci;
