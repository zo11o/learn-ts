// 泛型
function log<T>(value: T): T {
    console.log(value)
    return value;
}

log<string[]>(['a', 'b'])
console.log(['a', 'b']);

// type Log = <T>(value: T) => T
// let myLog: Log = log

interface Log {
    <T>(value: T): T
}

