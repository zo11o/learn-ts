// 布尔值
let bool: boolean = true;
// 数字
let num: number | undefined | null = 123;
// 字符串
let str: string = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, "5"];

// 元祖
let tuple: [number, string] = [0, "1"];

// 函数
let add = (x: number, y: number): number => x + y;

// 第一函数类型
let compute: (x: number, y: number) => number;

compute = (a, b) => a + b;

// 对象类型
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2);

// undefined, null
let un: undefined = undefined;
let nu: null = null


// void 无任何返回值函数
let noReturn = () => {}

// any 任何类型
let a: any = 1;
a = 2;
a = 'x'

// never 永远不会返回
let error = () => {
    throw new Error('error')
}

let errorWhile = () => {
    while(true) {
        console.log(1)
    }
}