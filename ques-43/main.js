function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with : ".concat(items.join(","), "."));
}
sandwich("ham", "cheese");
sandwich("lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
