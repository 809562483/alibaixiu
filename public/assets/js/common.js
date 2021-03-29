/*
 * @Description: 前端页面公共方法
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-29 22:27:08
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-29 22:27:40
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