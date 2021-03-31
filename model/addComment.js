/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 00:06:30
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 00:13:17
 */
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://helei:123456@localhost:27017/alibaixiu', { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));
const { Comment, validateComment } = require('./Comment');
Comment.create({
    "state": 0,
    "author": "6061eb606b08d82cc4c5697f",
    "content": "文章很精彩啊啊啊",
    "post": "60646a715c596d1aacaf1aea",
    "createAt": "2021-04-01T06:51:20.552Z"
});
Comment.create({
    "state": 1,
    "author": "6061eb606b08d82cc4c5697f",
    "content": "文章很精彩呵呵呵",
    "post": "60646b2a5c596d1aacaf1aec",
    "createAt": "2021-03-31T06:51:20.552Z"
});