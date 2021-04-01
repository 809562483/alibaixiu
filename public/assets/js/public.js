/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 14:18:19
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 16:57:30
 */


//随机推荐获取
$.ajax({
    type: "get",
    url: "/posts/random",
    success: function(res) {
        var str = `{{each data}}<li>
                <a href="/detail.html?id={{@$value._id}}">
                    <p class="title">{{$value.title}}</p>
                    <p class="reading">阅读({{$value.meta.views}})</p>
                    <div class="pic">
                        <img src="{{$value.thumbnail ?  $value.thumbnail : 'uploads/hots_5.jpg'}}" alt="#">
                    </div>
                </a>
            </li>{{/each}}`
        $(".body.random").html(template.render(str, {
            data: res
        }));
    }
});
//最新评论获取
$.ajax({
    type: "get",
    url: "/comments/lasted",
    success: function(res) {
        var str = `{{each data}}<li>
                <a href="javascript:;">
                    <div class="avatar">
                        <img src="{{$value.author.avatar ?  $value.author.avatar : 'uploads/hots_5.jpg'}}" alt="">
                    </div>
                    <div class="txt">
                        <p>
                            <span>{{$value.author.nickName}}</span>{{$value.createAt.split('T')[0]}}说:
                        </p>
                        <p>{{$value.content}}</p>
                    </div>
                </a>
            </li>{{/each}}`
        $(".body.discuz").html(template.render(str, {
            data: res
        }));
    }
});
//初始化导航模块
$.ajax({
    type: "get",
    url: "/categories",
    success: function(res) {
        // console.log(res)
        var str = `{{each data}}<li><a href="list.html?id={{@$value._id}}"><i class="fa {{$value.className}}"></i>{{$value.title}}</a></li>{{/each}}`
        var html = template.render(str, {
            data: res
        });
        $(".header .nav").html(html);
        $(".topnav ul").html(html);
    }
});

//获取地址里面的get参数
function getUrlParam(name) {
    var params = location.search.substring(1).split("&");
    // console.log(params)
    var value = undefined;
    params.forEach(ele => {
        var tmp = ele.split("=");
        // console.log(tmp)
        if (tmp[0] == name) {
            value = tmp[1];
        }
    })
    return value;
}
//搜索框事件
$(".search form").on("submit", function(e) {
    e.preventDefault();
    var search = $(this).find(".keys").val();
    location.href = "search.html?search=" + search;
})