var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (numbers) {
    var ordinal;
    if (numbers == 1) {
        ordinal = "st";
    }
    else if (numbers == 2) {
        ordinal = "nd";
    }
    else if (numbers == 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(numbers).concat(ordinal));
});
