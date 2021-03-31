/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-31 10:21:11
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-31 10:43:05
 */
$.ajax({
    url: "/categories",
    success: function(res) {
        $("#category").html(template("cateTpl", {
            data: res
        }));
    }
})
$("#formbox").on("change", "#feature", function() {
    var file = this.files[0];
    var formdata = new FormData();
    formdata.append("avatar", file);
    $.ajax({
        type: "post",
        url: "/upload",
        data: formdata,
        processData: false,
        contentType: false,
        success: function(res) {
            $("#imgFeature").show().attr("src", res[0].avatar);
            $("#hiddenFeature").val(res[0].avatar);
        }
    })
})
$("#postsForm").on("submit", function(e) {
    e.preventDefault();
    var formdata = $(this).serialize();
    console.log(formdata);
    $.ajax({
        type: "post",
        data: formdata,
        url: "/posts",
        success: function(res) {
            location.href = "./posts.html";
        }
    })
})