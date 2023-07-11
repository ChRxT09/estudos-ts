





function Logger(log: string) {
  return function(construct: Function) {
    console.log(log)
  }
}


function WithTemplate(template: string, hookId: string) {
  return function(constructor: Function){
  }
}


@WithTemplate('heheeheeh', 'heehee')
class Person {
  public static aaa = 0
  constructor(
    public name: string = 'Gus',
    public age: number = 21
  ){
    console.log('creating person')
  }
}

const aaa = new Person()

console.log(aaa)