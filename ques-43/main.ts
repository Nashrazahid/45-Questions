function sandwich(...items:string[]){
    console.log(`making a sandwich with : ${items.join(",")}.`)
}
sandwich("ham", "cheese");
sandwich("lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");
