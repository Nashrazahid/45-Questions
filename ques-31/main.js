var current_Username = ["nashra", "ruby", "laiba", "samra", "ramsha"];
var new_User = ["kinza", "sania", "rumaisa", "ruby", "laiba"];
new_User.forEach(function (new_User) {
    if (current_Username.some(function (current_Username) { return current_Username.toLowerCase() == new_User.toLowerCase(); })) {
        console.log("".concat(new_User, " need to enter new name"));
    }
    else {
        console.log("".concat(new_User, " is available"));
    }
});
