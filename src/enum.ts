// 数字枚举 反向映射
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}

console.log(Role[3]);

// 字符串枚举 不反向映射
enum Message {
    Success = '恭喜你',
    Fail = '抱歉，失败了'
}
console.log(Message);

// 异构枚举 字符串枚举&数字枚举混用
enum Answer {
    N,
    Y = 'Yes'
}
console.log(Answer);

// 枚举成员
enum Char {

    // const
    a,
    b = Char.a,
    c = 1 + 2,

    d = Math.random(),
    e = '123'.length,

    f = 3 // 一定要赋值
}

const enum Month {
    Jan,
    Feb,
    Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]
console.log(month);


// 枚举类型
enum E { a, b}
enum F { a = 1, b = 'ab'}

// 不同类型不能比较
let e1: E = E.a