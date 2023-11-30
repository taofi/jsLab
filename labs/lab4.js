const products = new Set();
  products.add("Товар 1");
  products.add("Товар 2");
  products.add("Товар 3");
  console.log("Товар 2 есть в списке:", products.has("Товар 2")); 
  console.log("Товар 4 есть в списке:", products.has("Товар 4"));
  products.delete("Товар 1");
  console.log("Количество товаров в списке:", products.size);
  
class StudentList{
    constructor() {
        this.students = new Set();
    }
    add(student){
        for (const item of this.students) {
            if (item.number == student.number) {
              return;
            }
        }
        this.students.add(student);
    }
    removeStudent(number) {
        this.students.forEach((student) => {
          if (student.number == number) {
            this.students.delete(student);
            return;
          }
        });
    }
    filterByGroup(group) {
       return [...this.students].filter((student) => student.group == group);
    }
    sortByNumber() {
        this.students = new Set([...this.students].sort((a, b) => a.number - b.number));
    }
}

let studentsList = new StudentList();
const obj1 = {number: 3, group:5, name:"Gleb"};
const obj2 = {number: 6, group:4, name:"Oleg"};
const obj3 = {number: 195, group:2, name:"Katy"};
studentsList.add(obj1);
studentsList.add(obj2);
studentsList.add(obj3);
studentsList.add(obj1);
studentsList.sortByNumber();
//studentsList.removeStudent(195);
console.log(studentsList.students);
console.log(studentsList.filterByGroup(5));


class productMap{
    constructor(){
        this.products = new Map();
    }
    add(id, name, count, price) {
        this.products.set(id, { name, count, price }); 
    }
    removeById(id) {
        this.products.delete(id);
    }
    removeByName(name) {
        for (const [id, product] of this.products) {
          if (product.name == name) {
            this.products.delete(id);
          }
        }
    }
    changeCount(id, count) {
        if (this.products.has(id)) {
            const product = this.products.get(id);
            product.count = count;
            this.products.set(id, product);
        }
    }
    changeCost(id, price) {
        if (this.products.has(id)) {
            const product = this.products.get(id);
            product.price = price;
            this.products.set(id, product);
        }
    }
    show(){
        for (const [id, product] of this.products) {
            console.log(`id: ${id}, name ${product.name}, count ${product.count}, cost ${product.price} `)
        }
    }
    totalPrice(){
        let cost = 0;
        for (const [, product] of this.products) {
            cost += product.price;
        }
        return cost;
    }
    getItemCount() {
        return this.products.size;
    }
}

let productsList = new productMap();
productsList.add(123, "asd", 2, 78);
productsList.add(12, "adg", 10, 7);
productsList.add(13, "afsd", 6, 70);
productsList.changeCost(12, 100);
productsList.changeCount(123, 100);
productsList.removeById(13);
productsList.add(80, "ad", 10, 7);
productsList.add(34, "ad", 6, 70);
productsList.add(90, "ads", 10, 7);
productsList.add(70, "ad", 6, 70);
console.log("");
productsList.show();
productsList.removeByName("ad");
console.log("");
productsList.show();
console.log(productsList.totalPrice());
console.log(productsList.getItemCount());
console.log("");


const cacheList = new WeakMap();

function cachedFunction(fun, cache) {
  if (cache.has(fun)) {
    console.log(cache.get(fun));
    return cache.get(fun);
  } else {
    const result = fun();
    cache.set(fun, result);
    return result;
  }
}
function fun1(){
    return productsList.getItemCount();
}

function fun2(){
    return productsList.totalPrice();
}

console.log(cachedFunction(fun1, cacheList));
console.log(cachedFunction(fun2, cacheList));
cachedFunction(fun2, cacheList);
console.log(cacheList);