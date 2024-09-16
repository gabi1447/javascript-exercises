const removeFromArray = function(array, ...removedNums) {
    return array.filter(num => {
        if (removedNums.includes(num)) {
            return false
        }
        return true;
    });
};

console.log(removeFromArray([1, 2, 3], 2, 3));
// Do not edit below this line
module.exports = removeFromArray;
