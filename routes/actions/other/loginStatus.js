/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-29 11:19:35
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 17:49:04
 */
module.exports = async(req, res) => {
    if (req.session && req.session.userInfo && req.session.userInfo.role == 'admin') {
        const s = `var isLogin = true; var userId=\"${req.session.userInfo._id}\"`
        res.send(s)
    } else if (req.session && req.session.userInfo && req.session.userInfo.role == 'normal') {
        const s = `var userId=\"${req.session.userInfo._id}\"`
        res.send(s)
    } else {
        res.send('var isLogin = false')
    }
};