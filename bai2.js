function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(sumNumbers(10, 20));        
