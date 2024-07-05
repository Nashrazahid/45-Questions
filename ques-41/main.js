var arrays = ["Salman Hasan", "Mumtaz Ahmad", "Shahzad Syed"];
function show_magician(magicians) {
    arrays.forEach(function (arrays) {
        console.log(arrays);
    });
}
var array = ["Salman Hasan", "Mumtaz Ahmad", "Shahzad Syed"];
function make_greet(magicians) {
    array.forEach(function (array) {
        console.log("Great ".concat(array));
    });
}
show_magician(arrays);
make_greet(array);
