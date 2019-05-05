function divleft(ids,x){
	if ( $(ids).length > 0) {
		$(ids).removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      		$(this).removeClass();
		});
	}
}
$(function(){
	var winH = $(window).height();
	//var isFirst = true;
	var amtlx;
	$(".animatesv").each(function(){
		//判断div是否在第一屏
		amtlx = $(this).attr("amt");
		if ($(this).offset().top < winH ) {
		    divleft(this,amtlx);
		}
	})
	$(window).scroll(function(){
		//bounceInLeft
		$(".animatesv").each(function(){
			amtlx = $(this).attr("amt");
			if ($(window).scrollTop() > $(this).offset().top - winH ) {
			    divleft(this,amtlx);//fadeOutUp
			}
		})
	})
})