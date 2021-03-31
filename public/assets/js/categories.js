/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-31 09:44:21
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-31 09:44:37
 */
$("#categoryForm").on("submit", function(e) {
    e.preventDefault();
    var formdata = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/categories",
        data: formdata,
        success: function() {
            location.reload();
        }
    })
})
$.ajax({
    url: "/categories",
    success: function(res) {
        console.log(res);
        $("#categories").html(template("cateTpl", {
            categories: res
        }))
    }
})
$("#categories").on("click", ".modify", function(e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    $.ajax({
        type: "get",
        url: "/categories/" + id,
        success: function(res) {
            $("#formbox").html(template("modifyTpl", res))
        }
    })
})
$("#formbox").on("submit", "#modifyForm", function(e) {
    e.preventDefault();
    var formdata = $("#modifyForm").serialize();
    $.ajax({
        type: "put",
        url: "/categories/" + $("#modifyForm").attr("data-id"),
        data: formdata,
        success: function() {
            // console.log(res);
            location.reload();
        }
    })
})
$("#categories").on("click", ".delete", function(e) {
    e.preventDefault();
    if (!confirm("确认要删除此条数据吗？")) return;
    var id = $(this).attr("data-id");
    $.ajax({
        type: "delete",
        url: "/categories/" + id,
        success: function(res) {
            location.reload();
        }
    })
})