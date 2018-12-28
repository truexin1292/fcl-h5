# 项目描述：
https://www.swiper.com.cn/usage/animate/index.html

http://wow.techbrood.com/fiddle/43200?vm=full

https://a.xiumi.us/stage/v5/3bQHp/121785150#/

```text
<script>
    // 方法1：
    // var timeStart = new Date().getTime();
    // var lenTime = 0;

    // function imgLoad(img, callback) {
    //     var timer = setInterval(function () {
    //         if (img.complete) {
    //             callback(img);
    //             var timeEnd = new Date().getTime();
    //             lenTime = Math.ceil((timeEnd - timeStart) / 1000);
    //             console.log('--lenTime1--:', lenTime);
    //             $('.loading-mask').hide();
    //             clearInterval(timer);
    //         }
    //     }, 50)
    // }
    //
    // var img1 = document.getElementById("bgImg");
    // imgLoad(img1, function () {
    //     console.log('--done--:')
    // })

    // 方法2：
    // var timeStart = new Date().getTime();
    // var lenTime = 0;
    // function preImg() {
    //     var preImg = new Image();
    //     preImg.src = './images/bg.png';
    //     return preImg;
    // }
    //
    // var a = preImg();
    // a.onload = function () {
    //     var timeEnd = new Date().getTime();
    //     lenTime = Math.ceil((timeEnd - timeStart) / 1000);
    //     console.log('--lenTime2--:', lenTime);
    //     $('.loading-mask').hide();
    // }
</script>
```