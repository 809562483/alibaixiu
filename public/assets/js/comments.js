/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-31 23:38:43
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 09:46:52
 */
function load(res) {
    $("#commentsList").html(template("commentTpl", res));
    $("#pagination").html(template("pageTpl",
        res
    ))
}
$.ajax({
    type: "get",
    url: "/comments",
    success: function(res) {
        console.log(res);
        load(res);
    }
})
$("#pagination").on("click", "a", function() {
    var page = $(this).attr("data-page");
    $.ajax({
        url: "/comments",
        data: {
            page: page
        },
        success: function(res) {
            // console.log(res)
            load(res)
        }
    })
})
$("#commentsList").on("click", ".state", function() {
        var state = $(this).attr("data-state") ^ 1;
        var id = $(this).attr("data-id");
        $.ajax({
            type: "put",
            url: "/comments/" + id,
            data: {
                state: state
            },
            success: function() {
                location.reload();
            }
        })
    })
    //删除评论事件
$("#commentsList").on("click", ".delete", function() {
    if (!confirm("确认删除此条评论？")) return;
    var id = $(this).attr("data-id");
    $.ajax({
        type: "DELETE",
        url: "/comments/" + id,
        success: function() {
            location.reload();
        }
    })
})