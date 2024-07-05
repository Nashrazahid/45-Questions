interface Laptop {
    make: string;
    model: string;
    year: number;
    describe: () => void;
}

let answer:Laptop={
    make : "apple",
    model :"mac pro",
    year : 2023,
    describe : function(){
        console.log(`this laptop is a ${this.make} ${this.model} ${this.year}`)
    }
}
answer.describe()