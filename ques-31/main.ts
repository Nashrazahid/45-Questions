let current_Username :string[] = ["nashra","ruby","laiba","samra","ramsha"]
let new_User :string[] = ["kinza","sania","rumaisa","ruby","laiba"]
new_User.forEach((new_User) =>{
    if(current_Username.some((current_Username) => current_Username.toLowerCase() == new_User.toLowerCase())
    )
{ 
    console.log(`${new_User} need to enter new name`)
}else{
    console .log(`${new_User} is available`)
}
})