var user_names = ["admin", "eric", "laiba", "malaika"];
user_names.forEach(function (user_names) {
    if (user_names == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("".concat(user_names, ", thank you for logging in again."));
    }
});
