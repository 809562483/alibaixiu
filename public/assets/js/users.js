/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-29 23:50:17
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-29 23:50:18
 */
$("#avatar").on("change", function(e) {
    var file = this.files[0];
    // var reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = function() {
    //     $("#avatar").siblings("img").attr("src", reader.result);
    // }
    var formdata = new FormData();
    formdata.append("avatar", file);
    $.ajax({
        type: "post",
        url: "/upload",
        data: formdata,
        processData: false,
        contentType: false,
        success: function(res) {
            console.log(res);
            $("#avatar").siblings("img").attr("src", res[0].avatar);
            $("#hiddenAvatar").val(res[0].avatar);
        },
        error: function() {
            console.log("上传失败")
        }
    })
})
$("#userForm").on("submit", function(e) {
    e.preventDefault();
    var formdata = $(this).serialize();
    console.log(formdata);
    $.ajax({
        type: "post",
        url: "/users",
        data: formdata,
        success: function(res) {
            location.reload();
        },
        error: function(xhr) {
            alert(JSON.parse(xhr.responseText).message);
        }
    })
})