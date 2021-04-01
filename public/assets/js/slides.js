/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 10:12:22
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 10:42:35
 */
$.ajax({
    url: "/slides",
    success: function(res) {
        console.log(res)
        $("#slidesList").html(template("slidesTpl", {
            slides: res
        }))
    }
})
$("#upload").on("change", function() {
    var file = this.files[0];
    // console.log(file)
    var formdata = new FormData();
    formdata.append("image", file);
    $.ajax({
        type: "post",
        url: "/upload",
        processData: false,
        contentType: false,
        data: formdata,
        success: function(res) {
            $("#image").val(res[0].image);
            $("#showimg").attr("src", res[0].image);
            $("#showimg").show();
        }
    })
})
$("#slidesForm").on("submit", function(e) {
    e.preventDefault();
    var dataform = $(this).serialize();
    $.ajax({
        type: "post",
        url: "/slides",
        data: dataform,
        success: function() {
            location.reload();
        }
    })
})
$("#slidesList").on("click", ".delete", function() {
    if (!confirm("确认删除此轮播图吗？")) return;
    var id = $(this).attr("data-id");
    $.ajax({
        type: "delete",
        url: "/slides/" + id,
        success: function() {
            location.reload();
        }
    })
})