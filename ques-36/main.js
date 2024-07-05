function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love typescript"; }
    console.log("make a ".concat(size, " shirt and write ").concat(message, " on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love coding");
