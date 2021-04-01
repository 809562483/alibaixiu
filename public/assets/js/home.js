/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-01 12:27:14
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-01 14:39:28
 */
$.ajax({
    type: "get",
    url: "/slides",
    success: function(res) {
        $(".swipe-wrapper").html(template("swiperTpl", {
            data: res
        }));
        var swiper = Swipe(document.querySelector('.swipe'), {
            auto: 3000,
            transitionEnd: function(index) {
                // index++;

                $('.cursor span').eq(index).addClass('active').siblings('.active').removeClass('active');
            }
        });

        // 上/下一张
        $('.swipe .arrow').on('click', function() {
            var _this = $(this);

            if (_this.is('.prev')) {
                swiper.prev();
            } else if (_this.is('.next')) {
                swiper.next();
            }
        })
    }
})
$.ajax({
    type: "get",
    url: "/posts/lasted",
    success: function(res) {
        // console.log(res);
        $(".panel.new").html(template("newPostsTpl", {
            data: res
        }))
    }
});