/**
 * 分组测试
 */

import Count from './hook'

describe('分别测试Count的4个方法', () => {
    let count
    beforeAll(()=>{
        console.log('before all test!')
    })
    beforeEach(()=>{
        console.log('before each test!')
        count = new Count()
    })
    afterAll(()=>{
        console.log('after all test!')
    })
    afterEach(()=>{
        console.log('after each test!')
    })
    test('测试increase', () => {
        count.increase()
        console.log(count.count)
    })
    test('测试decrease', () => {
        count.decrease()
        console.log(count.count)
    })
    test('测试double', () => {
        count.double()
        console.log(count.count)
    })
    test('测试half', () => {
        count.half()
        console.log(count.count)
    })
})