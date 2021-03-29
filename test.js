/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-29 14:16:52
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-29 14:19:19
 */
const bcrypt = require('bcrypt');
(async() => {
    let salt = await bcrypt.genSalt(10);
    let pass = await bcrypt.hash('123456', salt)
    console.log(pass);
})()