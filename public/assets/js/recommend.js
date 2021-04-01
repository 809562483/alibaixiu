/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 13:10:47
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 13:13:05
 */
$.ajax({
    type: "get",
    url: "/posts/recommend",
    success: function(res) {
        var str = `{{each data}}
       <li>
            <a href="/detail.html?id={{@$value._id}}">
        <img src="{{$value.thumbnail ?  $value.thumbnail : 'uploads/hots_5.jpg'}}" alt="{{$value.title}}">
        <span>{{$value.title}}</span>
             </a>
          </li> {{/each}}`
            // console.log(res);
        $(".panel.hots ul").html(template.render(str, {
            data: res
        }));

    }
})