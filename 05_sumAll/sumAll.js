const sumAll = function(int1, int2) {
    let result = 0;

    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    } else if (!Number.isSafeInteger(int1) || !Number.isSafeInteger(int2)) {
        return 'ERROR';
    }

    if (int1 > int2) {
        for (let i = int1; i >= int2; i--) {
            result += i;
        }
        return result;
    } else {
        for (let i = int1; i <= int2; i++) {
            result += i;
        }
        return result;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
