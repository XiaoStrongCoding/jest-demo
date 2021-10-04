/**
 * toMatchSnapshot 配置快照
 * 在项目根目录下生成一个__snapshots__文件夹，下面有一个snapshot.test.js.snap快照文件
 * npm test snapshot.test -- -u 更新
 */

import {getConfig} from './snapshot'

// test('测试snapshot', () => {
//     expect(getConfig()).toEqual({
//         server: 'https://demo.com',
//         port: '8080'
//     })
// });

test('测试toMatchSnapshot', () => {
    expect(getConfig()).toMatchSnapshot()
});