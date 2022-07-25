import data from './data.json';
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

console.log('JSON', data);