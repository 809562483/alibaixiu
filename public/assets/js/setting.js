/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 10:42:56
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 11:32:18
 */

$.get("/settings", function(res) {
    console.log(res);
    if (res)
        $("#settingForm").html(template("settingTpl", res))
})
$("#settingForm").on("change", "#upload", function() {
    var file = this.files[0]
    console.log(file)
    var formdata = new FormData();
    formdata.append("logo", file);
    $.ajax({
        type: "post",
        url: "/upload",
        data: formdata,
        processData: false,
        contentType: false,
        success: function(res) {
            $("#logo").val(res[0].logo);
            $("#showlogo").attr("src", res[0].logo);
        }
    })
})
$("#settingForm").on("submit", function(e) {
    e.preventDefault();
    var dataform = $(this).serialize();
    if (!confirm("是否保存设置？")) return;
    $.ajax({
        type: "post",
        url: "/settings",
        data: dataform,
        success: function() {
            location.reload();
        }
    })
})