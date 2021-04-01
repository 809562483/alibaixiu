/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 09:47:19
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 10:12:43
 */
$.get("/posts/count", function(res) {
    $("#posts").html(`<strong>${res.postCount}</strong>篇文章（<strong>${res.draftCount}</strong>篇草稿）`)
})
$.get("/categories/count", function(res) {
    $("#categories").html(`<strong>${res.categoryCount}</strong>个分类`)
})
$.get("/comments/count", function(res) {
    $("#comments").html(`<strong>${res.commentCount}</strong>条评论`)
})