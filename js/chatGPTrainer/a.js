class A {
    static belly = [];
    eat() { A.belly.push("food");}
}

let an = new A();

an.eat();

console.log(A.belly[0]);