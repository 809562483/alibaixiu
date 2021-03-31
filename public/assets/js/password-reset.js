/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-30 16:58:57
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-31 22:42:14
 */
$("#modifyForm").on("submit", function(e) {

    e.preventDefault();
    if (!confirm("确认要修改密码吗？")) return;
    var formdata = $(this).serialize();
    $.ajax({
        type: "put",
        url: "/users/password",
        data: formdata,
        success: function() {
            alert("密码修改成功");
            location.href = "/admin/login.html"
        }
    })
})