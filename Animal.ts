export class Animal {

private name:string
private age:number

constructor (name:string,age:number,weight:number){
    this.name = name
    this.age = age
    this.weight = number
}

    eat(quantity: number): void {
  console.log(`The animal has eaten ${quantity} grams of food`);

}  
emitSound():void{
    console.log("the animal makes a sound");
    
}

getName(){
    return this.name
}

getAge(){
    return this.age
}

setName(name:string){
    this.name = name
}

setAge(age:number){
    this.age = age
}

}














