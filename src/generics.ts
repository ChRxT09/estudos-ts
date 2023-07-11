const arr: Array<number> = [1, 2, 3];

arr[0] += 5;

console.log(arr);

function merge<T extends object, U>(objA: T, objB: U): T & U {
	return Object.assign(objA, objB);
}

const merged = merge({name: 'Tom'}, {age: 30})

console.log(merged.name)




function countAndPrint<T extends string | any[] >(element: T){
  let description = 'got no Value'
  if(element.length > 0 ){
    description = `Got ${element.length} elements`
  }
  return [element, description]
}


function extract<T extends object,U extends keyof T>( obj: T, key: U){
  return obj[key]
}


class DataStorage<T> {
  private data: Array<T> = []
  addItem(item: T){
    this.data.push(item)
  }
}








