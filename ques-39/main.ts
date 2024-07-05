function make_album(artist:string,title:string,track?:number){
   let album ={artist,title}
    if(track){
       album["track"] = track 
    }
    return album
}
console.log(make_album("atif aslam","meri kahani"))
console.log(make_album("Junoon","azadi"))
console.log(make_album("Nusrat Fateh Ali Khan", "shahbaz", 8 ))