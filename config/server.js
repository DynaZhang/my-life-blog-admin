/*
 * @Author: zhangzhulei zhangzhulei@baidu.com
 * @Date: 2022-07-18 03:23:20
 * @LastEditors: zhangzhulei zhangzhulei@baidu.com
 * @LastEditTime: 2022-07-18 12:33:59
 * @FilePath: /my-life-blog-admin/config/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
