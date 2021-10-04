import { request } from './request'

// test('测试request', (done) => {
//     request(data => {
//         expect(data.data).toEqual({
//             "userId": 1,
//             "id": 1,
//             "title": "delectus aut autem",
//             "completed": false
//         })
//         done()
//     })
// })

test('测试request', () => {
    return request().then(data => {
        expect(data.data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        })
    })
})

// test('测试request', () => {
//     return expect(request()).resolves.toMatchObject({
//         data: {
//             "userId": 1,
//             "id": 1,
//             "title": "delectus aut autem",
//             "completed": false
//           }
//     })
// })

// 写法一
// test('测试request', async () => {
//     const res = await request()
//     expect(res.data).toEqual({
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     })
// })
// 写法二
// test('测试request', async () => {
//     await expect(request()).resolves.toMatchObject({
//         data: {
//             "userId": 1,
//             "id": 1,
//             "title": "delectus aut autem",
//             "completed": false
//             }
//         })
// })

test('测试request 404', () => {
    return request().catch((e)=>{
        console.log(e.toString())
        expect(e.toString().indexOf('404') > -1).toBeTruthy()
    })
})
