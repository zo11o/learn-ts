interface List {
    id: number;
    name: string;
    // [x: string]: any;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach( value => {
        console.log(value.id, value.name);
    })
}

let result = {
    data: [
        { id: 1, name: 'A', sex: 'male'},
        { id: 2, name: 'B'}
    ]
}

render(result);
// 类型断言
render({
    data: [
        { id: 1, name: 'A', sex: 'male'},
        { id: 2, name: 'B'}
    ]
} as Result)

interface StringArray {
    [index: number]: string
}

let sa: StringArray = ['a', 'nb']



// 函数接口
// interface Add {
//     (x:number, y: number): void
// }

// 类型别名
type Add = (x: number, y: number) => number;

let addFn: Add = (a, b) => a + b;

// 混合接口
interface Lib {
    (): void;
    version: string,
    doSomething(): void
}

// let lib: Lib = {
//     (): void(0),
//     version: '1.1.3',
//     doSomething() {
//         console.log('hello')
//     }
// }
// console.log(lib);
let lib: Lib = (() => {}) as Lib;
lib.version = '1.2.1'
lib.doSomething = () => a
console.log(lib);
