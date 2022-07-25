const hello = (name) => `Hello ${name}`;

console.log(hello('World'));
console.log(hello('OW'));

class Test {
    greet() {
        return 'hello world'
    }

}

const a = new Test();

console.log(a.greet());