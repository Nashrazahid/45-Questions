var answer = {
    make: "apple",
    model: "mac pro",
    year: 2023,
    describe: function () {
        console.log("this laptop is a ".concat(this.make, " ").concat(this.model, " ").concat(this.year));
    }
};
answer.describe();
