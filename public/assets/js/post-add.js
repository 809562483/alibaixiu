/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-03-31 10:21:11
 * @LastEditors: Observer
 * @LastEditTime: 2021-03-31 22:38:09
 */
function dateformat(date) {
    date = new Date(date);
    return date.getFullYear() + "-" + ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate()) + 'T' + (date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours()) + ':' + (date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes());
}
template.defaults.imports.dateformat = dateformat;

function getUrlParam(name) {
    var params = location.search.substring(1).split("&");
    // console.log(params)
    var value = undefined;
    params.forEach(ele => {
        var tmp = ele.split("=");
        console.log(tmp)
        if (tmp[0] == name) {
            value = tmp[1];
        }
    })
    return value;
}
var category = undefined;
if (getUrlParam("id")) {
    $.ajax({
        async: false,
        url: "/posts/" + getUrlParam("id"),
        success: function(res) {
            category = res.category._id;
            $("#formbox").html(template("modifyTpl", res));
        }
    })
}

function loadCate() {
    $.ajax({
        url: "/categories",
        success: function(res) {
            console.log(res)
            $("#category").html(template("cateTpl", {
                data: res,
                category: category
            }));
        }
    })
}


loadCate();
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
$("#formbox").on("submit", "#modifyForm", function(e) {
    e.preventDefault();
    var formdata = $(this).serialize();
    var id = $(this).attr("data-id");
    console.log(formdata);
    $.ajax({
        type: "put",
        data: formdata,
        url: "/posts/" + id,
        success: function(res) {
            location.href = "./posts.html";
        }
    })
})