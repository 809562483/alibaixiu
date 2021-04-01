/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 14:49:55
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 15:32:02
 */
var id = undefined;

// || getUrlParam($(".nav li a").attr("href"), "id")
// console.log($(".nav li a").attr("href"));
if (getUrlParam("id")) {
    id = getUrlParam("id");
    load()
} else {
    $.get("/categories", function(res) {
        id = res[0]._id;
        load();
    })
}

function load() {
    $.ajax({
        url: "/categories/" + id,
        type: "get",
        success: function(res) {
            // console.log(res);
            $(".panel.new>h3").html(res.title)
        }
    })
    $.ajax({
        url: "/posts/category/" + id,
        type: "get",
        success: function(res) {
            // console.log(res);
            $(".panel.new>div").html(template("PostsTpl", {
                data: res
            }))
        }
    })
}