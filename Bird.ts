import { Animal } from "./Animal";

export class Bird extends Animal {
    private wingspan:number

    constructor (name:string,age:number, wingspan:number){
        super(name,age)
        this. wingspan =  wingspan
    }

    fly(){
        console.log("this animal is flying");
        
    }

    getWingspan(){
        return this.wingspan
    }
    
    setWingspan(wingspan){
        this.wingspan = wingspan
    }


}



