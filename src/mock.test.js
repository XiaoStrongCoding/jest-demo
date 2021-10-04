/**
 * jest.fn模拟函数，返回mock数据
 * 
 * mockImplementation或者mockImplementationOnce
 * 
 * mockReturnValue或者mockReturnValueOnce
 * 
 * toBeCalledWith 测试函数传参是否符合预期（matcher）
 * 
 * mockResolvedValue或者mockResolvedValueOnce mock请求数据
 */
import axios from 'axios'
import {run, request} from './mock'

test('测试 jest.fn()', () => {
    const fn = jest.fn(() => {
        return 'this is mock fn!'
    })
    const a = run(fn)
    console.log(a)
})

test('测试 mockImplementation', () => {
    const func = jest.fn()
    func.mockImplementation(()=>{
        return 'this is mock fn 1'
    })

    func.mockImplementationOnce(()=>{
        return 'this is mock fn 2'
    })

    func.mockReturnValue('this is mock fn 3')

    func.mockReturnValueOnce('this is mock fn 4')
        .mockReturnValueOnce('this is mock fn 5')

    const a = run(func)
    const b = run(func)
    const c = run(func)
    const d = run(func)
    const e = run(func)
    const f = run(func)

    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
    console.log('e', e)
    console.log('f', f)
})

test('测试 toBeCalledWith', () => {
    const func = jest.fn()
    const a = run(func)
    expect(func).toBeCalledWith('this is run!')
})

jest.mock('axios')

test('测试mock request', async () => {
    axios.get.mockResolvedValueOnce({data: 'Jordan', position: 'SG'})
    axios.get.mockResolvedValue({data: 'kobe', position: 'SG'})

    await request().then(res => {
        expect(res.data).toBeCalledWith('Jordan')
    })

    await request().then(res => {
        expect(res.data).toBeCalledWith('kobe')
    })
})