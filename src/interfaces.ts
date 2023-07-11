interface Person {
  name: string;
  age: number
  talk(phrase: string): void
}

interface AddFn{
  (n1: number, n2: number): number
}

let c: AddFn

c =  (n1: number, n2: number) => n1 + n2


class Kid implements Person {
  constructor(
    public name: string,
    public age: number,
  ){}
  talk(phrase: string) {
    console.log(phrase)
  }
  add(n1: number, n2: number){

  }
}

