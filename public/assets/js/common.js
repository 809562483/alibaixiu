/*
 * @Description: 前端页面公共方法
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-29 22:27:08
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 11:27:04
 */
$("#logOut").on("click", function() {
    if (!confirm("真的要退出吗？")) return;
    $.ajax({
        type: "post",
        url: "/logout",
        success: function(res) {
            alert(res.message);
            location.href = "./login.html"
        },
        error: function(xhr) {
            alert("退出失败");
        }
    })
})

function dateformat(date) {
    date = new Date(date);
    return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate()) + 'T' + (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours()) + ':' + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
}

template.defaults.imports.dateformat = dateformat;

$.ajax({
    url: "/users/" + userId,
    success: function(res) {
        if (res.avatar)
            $(".profile .avatar").attr("src", res.avatar);
        $(".profile .name").html(res.nickName);
    }
})