/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 15:39:03
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 17:49:55
 */
if (getUrlParam("id")) {
    var state = undefined;
    $.ajax({
        url: "/posts/" + getUrlParam("id"),
        success: function(res) {
            $(".article").html(template("articleTpl", res));
        }
    })
    $(".article").on("click", "#like", function() {
        var id = $(this).attr("data-id");
        $.post("/posts/fabulous/" + id, function() {
            location.reload()
        })
    })
    $.ajax({
        type: "get",
        url: "settings",
        success: function(res) {
            if (res.comment)
                $(".content .comment").html(`
                <form>
                    <textarea></textarea>
                    <input type="submit" value="提交评论">
                </form>`);
            state = res.review ^ 1;
        }
    })
    $(".content .comment").on("submit", "form", function(e) {
        e.preventDefault();
        $.ajax({
            url: "/login/status",
            success: function(res) {

                if (!res.includes("userId")) {
                    if (confirm("请先登录"))
                        location.href = "/admin/login.html"
                } else {
                    var content = $("textarea").val();
                    var post = getUrlParam("id");
                    $.ajax({
                        type: "post",
                        url: "/comments",
                        data: {
                            content,
                            post,
                            state
                        },
                        success: function() {
                            alert("评论成功")
                            location.reload();
                        },
                        error: function() {
                            alert("评论失败")
                        }
                    })
                }
            }
        })
    })
} else
    location.href = "/"