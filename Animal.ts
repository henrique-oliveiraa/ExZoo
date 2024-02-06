export class Animal {

private name:string
private age:number

constructor (name:string,age:number){
    this.name = name
    this.age = age
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














