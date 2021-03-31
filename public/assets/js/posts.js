/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-31 10:27:51
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 00:20:04
 */

var condition = {
    category: undefined,
    state: undefined,
    page: undefined
};
$.ajax({
    url: "/posts",
    success: function(res) {
        // console.log(res);
        load(res)
    }
})
$.ajax({
    url: "/categories",
    success: function(res) {
        // console.log(res);
        $("#categories").html(template("cateTpl", {
            data: res
        }))
    }
})
$("#selectForm").on("submit", function(e) {
    var arr = $(this).serializeArray();
    arr.forEach(ele => {
        condition[ele.name] = ele.value == "-1" ? undefined : ele.value;
    })
    condition["page"] = undefined;
    e.preventDefault();
    $.ajax({
        url: "/posts",
        data: condition,
        success: function(res) {
            load(res)
        }
    })
})
$("#pagination").on("click", "a", function() {
    condition["page"] = $(this).attr("data-page");
    $.ajax({
        url: "/posts",
        data: condition,
        success: function(res) {
            load(res)
        }
    })
})
$("#postList").on("click", ".delete", function() {
    if (!confirm("确认删除此条数据？")) return;
    var id = $(this).attr("data-id");
    $.ajax({
        type: "delete",
        url: "/posts/" + id,
        success: function() {
            location.reload();
        }
    })

})

function load(res) {
    $("#postList").html(template("postTpl", {
        posts: res.records
    }))
    $("#pagination").html(template("pageTpl",
        res
    ))
}