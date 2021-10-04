export default (fn) => {
    setTimeout(() => {
        fn()
        console.log('异步执行完毕！')
    }, 2000)
}

export function nestTimeout(fn) {
    setTimeout(() => {
        fn()
        console.log('this is timeout outside!')
        setTimeout(() => {
            fn()
            console.log('this is timeout inside!')
        }, 3000)
    }, 2000)
}