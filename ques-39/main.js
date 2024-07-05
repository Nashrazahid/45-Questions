function make_album(artist, title, track) {
    var album = { artist: artist, title: title };
    if (track) {
        album["track"] = track;
    }
    return album;
}
console.log(make_album("atif aslam", "meri kahani"));
console.log(make_album("Junoon", "azadi"));
console.log(make_album("Nusrat Fateh Ali Khan", "shahbaz", 8));
