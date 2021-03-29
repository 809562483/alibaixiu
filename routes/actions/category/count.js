/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-29 11:19:35
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-29 17:02:18
 */
const { Category } = require('../../../model/Category');

module.exports = async(req, res) => {
    // 查询所有文章数量
    const categoryCount = await Category.countDocuments();
    // 响应
    res.send({ categoryCount });
}