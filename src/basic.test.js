
/**
 * toBe 基本类型数据
 * toEqual 引用类型数据
 * toBeNull
 * toBeUndefined
 * toBeDefined
 * toBeTruthy
 * toBeFalsy
 * 
 * .not. 否定
 * 
 * toBeGreaterThan >
 * toBeGreaterThanOrEqual >=
 * toBeLessThan <
 * toBeLessThanOrEqual <=
 * 
 * toBeCloseTo 可用于浮点数相加
 * 
 * toMatch 字符串正则匹配
 * 
 * Array Set 判断
 * toContain 是否包含某元素
 * toHaveLength 判断数组长度
 * 
 * toThrow 判断抛出异常
 */

import {findMax, twoSum} from './basic'

test('findMax函数输出', () => {
    expect(findMax([1,3])).toBe(3)
})

test('twoSum', () => {
    expect(twoSum([1,2,6,3,5], 5)).toBe(true)
})

test('toEqual', () => {
    expect([1,2,3]).toEqual([1,2,3])
})

test('toBeUndefined', () => {
    let a;
    expect(a).toBeUndefined()
})

test('toBeDefined', () => {
    let a = 1
    expect(a).toBeDefined()
})

test('toBeNull', () => {
    let a = null
    expect(a).toBeNull()
})

test('toBeTruthy', () => {
    let a = 1
    expect(a).toBeTruthy()
})

test('toBeFalsy', () => {
    let a = 0
    expect(a).toBeFalsy()
})

test('not', () => {
    let a = 0
    expect(a).not.toBeTruthy()
})

test('toMatch', () => {
    const str = 'Lebron James'
    expect(str).toMatch(/Ja/)
    expect(str).toMatch('Ja')
})

test('Array Set Matcher', () => {
    const arr = ['Kobe', 'James', 'Curry']
    const set = new Set(arr)
    expect(set).toContain('Kobe')
    expect(arr).toHaveLength(3)
})

function throwError() {
    throw new Error('this is an error!!')
}

test('toThrow', () => {
    expect(throwError).toThrow('this is an error') // /this is an error/ 有点类似字符串匹配
})