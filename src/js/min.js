// 轮播图
$(function() {
    /***用于放图片的数组*****/
    var arr = ["img/3.png", "img/4.png", "img/5.png"];
    /****初始化页面启动显示的图片*****/
    $(".ul_img li img").attr("src", ""+arr[0]);

    var index = 0;
    var timer = null;
    /****当鼠标滑动到列表索引按钮时，显示当前的图片*****/
    // $(".ul_text li").hover(function() {
    //     clearInterval(timer);
    //     index = $(this).index();
    //     //alert(index);
    //     $(this).addClass("hover").siblings().removeClass("hover");
    //     $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
    //         'opacity': 1
    //     }, 500);
    // }, function() {
    //     auto();
    // });
    auto();
    /*****自动播放图片的定时器****/
    function auto() {
        timer = setInterval(function() {
            index++;
            if (index > 2) {
                index = 0;
            }
            // $(".ul_text li").eq(index).addClass("hover").siblings().removeClass("hover");
            $(".ul_img li img").attr("src", arr[index]).css('opacity', 0.5).animate({
                'opacity': 1
            }, 600);
        }, 2000);
    }
});
// 图片滚动
$(function(){
	var oul = $('.wrap ul');
	var oulHtml = oul.html();
	oul.html(oulHtml+oulHtml)
	var timeId = null;

	var ali = $('.wrap ul li');
	var aliWidth = ali.eq(0).width();
	var aliSize = ali.size();
	var ulWidth = aliWidth*aliSize;
	oul.width(ulWidth);	//1600px
	
	var speed = -2;

	function slider(){

		if(speed<0){
			if(oul.css('left')==-ulWidth/2+'px'){
	 		oul.css('left',0);
		 	}
		 	oul.css('left','+=-2px');
		}

	 	
		if(speed>0){
			if(oul.css('left')=='0px'){
	 		oul.css('left',-ulWidth/2+'px');
		 	}
		 	oul.css('left','+='+speed+'px');
		}
	 	
	 }
	
	// setInterval()函数的作用是：每隔一段时间，执行该函数里的代码
	 timeId = setInterval(slider,30);

	$('.wrap').mouseover(function(){
		// clearInterval()函数的作用是用来清除定时器
		clearInterval(timeId);
	});

	$('.wrap').mouseout(function(){
		timeId = setInterval(slider,30);
	});

	$('.goLeft').click(function(){
		speed=-2;
	});

	$('.goRight').click(function(){
		speed=2;
	});

});