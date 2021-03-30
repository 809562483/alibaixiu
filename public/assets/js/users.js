/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-29 23:50:17
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-30 17:11:05
 */
$.ajax({
    url: "/users",
    success: function(res) {
        $("#users").html(template("tpl", {
            users: res
        }))
    }
})
$("#formbox").on("change", "#avatar", function(e) {
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
$("#formbox").on("submit", "#modifyform", function(e) {
    e.preventDefault();
    var formdata = $(this).serialize();
    $.ajax({
        type: "put",
        url: "/users/" + $("#modifyBtn").attr("data-id"),
        data: formdata,
        success: function(res) {
            location.reload();
        }
    })
})
$("#users").on("click", ".userModify", function() {
    $.ajax({
        url: "/users/" + $(this).attr("data-id"),
        success: function(res) {
            $("#formbox").html(template("userTpl", {
                user: res
            }))
        }
    })
})
$("#users").on("click", ".userDelete", function() {
    if (!confirm("确认删除？？？？")) return;
    $.ajax({
        type: "DELETE",
        url: "/users/" + $(this).attr("data-id"),
        success: function() {
            location.reload();
        }
    })
})
$("#selectAll").on("change", function() {
    $("#users input:checkbox").prop("checked", $("#selectAll").prop("checked"));
    if ($("#users :checked").length > 0)
        $("#batchDelete").show()
    else
        $("#batchDelete").hide()
})
$("#users").on("change", ":checkbox", function() {
    if (!$(this).prop("checked"))
        $("#selectAll").prop("checked", false);
    else {
        if ($("#users :checked").length == $("#users :checkbox").length)
            $("#selectAll").prop("checked", true);
    }
    if ($("#users :checked").length > 0)
        $("#batchDelete").show()
    else
        $("#batchDelete").hide()
})
$("#batchDelete").on("click", function() {
    if (!confirm("确认要删除选择的用户吗？")) return;
    ids = "";
    $("#users :checked").each((index, ele) => {
        ids += $(ele).attr("data-id") + "-"
    });
    ids = ids.substring(0, ids.length - 1);
    $.ajax({
        type: "DELETE",
        url: "/users/" + ids,
        success: function() {
            location.reload();
        }
    })
})