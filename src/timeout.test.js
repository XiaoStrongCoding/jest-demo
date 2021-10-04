/**
 * 异步方法测试
 * 
 * done test方法会等到done所在的代码块内容执行完毕后才返回测试结果
 * 
 * 跳过异步时间
 * useFakeTimers 启动模拟真实的定时器
 * advanceTimersByTime 参数传入毫秒，立即跳过
 * toHaveBeenCalledTimes 测试函数调用次数(matchers)
 * 
 * 跳过多层嵌套异步时间
 * runAllTimers
 * 
 * runOnlyPendingTimers 只执行当前正在等待的所有定时器
 */

import timeout, {nestTimeout} from './timeout'

// test('测试timer', (done) => {
//     timeout(() => {
//         jest.advanceTimersByTime(2000)
//         expect(2+2).toBeCloseTo(4)
//         done()
//     })
// })

beforeEach(()=>{
    jest.useFakeTimers()
})

test('测试fakeTimer', () => {
    // jest.useFakeTimers() 
    const fn  = jest.fn() // jest提供的用来测试函数
    timeout(fn)
    jest.advanceTimersByTime(2000)
    expect(fn).toHaveBeenCalledTimes(1)
})

test('测试多层timer', () => {
    // jest.useFakeTimers()
    const fn = jest.fn()
    nestTimeout(fn)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(2)
})

test('测试多层timer', () => {
    // jest.useFakeTimers()
    const fn = jest.fn()
    nestTimeout(fn)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(2)
})

test('测试runOnlyPendingTimers', () => {
    const fn = jest.fn()
    nestTimeout(fn)
    jest.runOnlyPendingTimers()
    expect(fn).toHaveBeenCalledTimes(1)
    jest.runOnlyPendingTimers()
    expect(fn).toHaveBeenCalledTimes(2)
})