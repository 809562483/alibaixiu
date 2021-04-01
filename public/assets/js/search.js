/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 14:49:55
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 16:52:31
 */
var search = undefined;

// || getUrlParam($(".nav li a").attr("href"), "id")
// console.log($(".nav li a").attr("href"));
if (getUrlParam("search")) {
    search = getUrlParam("search");
    $(".panel.new>h3").html("搜索结果")
    $.ajax({
        url: "/posts/search/" + search,
        success: function(res) {
            $(".panel.new>div").html(template("PostsTpl", {
                data: res
            }))
        }
    })

} else {
    $.get("/categories", function(res) {
        id = res[0]._id;
        load();
    })
}

function load() {
    $(".panel.new>h3").html("文章")
    $.ajax({
        url: "/posts/random",
        type: "get",
        success: function(res) {
            // console.log(res);
            $(".panel.new>div").html(template("PostsTpl", {
                data: res
            }))
        }
    })
}