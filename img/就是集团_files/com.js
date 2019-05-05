$(function(){
	if($(".foucs")){
		$(".foucs").addClass("on");
	}
	$(".hm-about-txt").css("height",$(".video-box").height());
	$(".pro-item .cover_text").css("height",$(".pro-item").height());
	$(".about-md-right").css("height",$(".about-md-img").height());
	$(".preheader-nav li a").click(function(){
		$($(this).attr('dataid')).slideToggle().siblings(".dropdown").slideUp();
	});
	$(".company-list .btn-close").click(function(){
		$("#company").slideUp();
	});
	$(".downpage").click(function(){
		var downSt = $(".downpage").offset().top;
		$("body,html").animate({scrollTop:downSt + 80},300)
	});
	$(".filter-options ul li.filter-opener-container").click(function(){
		$(this).toggleClass("active");
		$(this).siblings("li").toggle();
	})

});
function hmSwp(){
	var qi = 0
var wi
if($(window ).width()>768){
	 wi = $( window ).width() / 2

}else{
	wi = $( window ).width()

}
$( ".controller_right" ).click( function()
{
	qi++
	if( qi == 1 )
	{
		$( ".exp_data._1 .desc_title" ).addClass( "top_hidden" )
		$( ".exp_data._1 .desc_text " ).addClass( "bottom_hidden" )
		$( ".exp_data._1 .pointer " ).addClass( "no_width" )
		$( ".exp_data._1 .line " ).addClass( "no_height" )
		$( ".exp_data._1 .more p" ).addClass( "top_single" )
		$( ".controller_right .controller_text" ).addClass( "top_hidden" )
		$( "#experience_box_scroller " ).animate( { marginLeft: -wi }, 1000 )
		setTimeout( function()
		{
			$( ".exp_data._1" ).removeClass( "active" )
			$( ".exp_data._2" ).addClass( "active" )

			$( "http://www.shenergy.com.cn/Application/Home/View/Static/Js/.controller_left .back" ).removeClass( "hidden_by_scaling_full" )
			$( ".controller_left .arrow" ).removeClass( "hidden" )
			$( ".controller_left .controller_text" ).removeClass( "top_hidden" ).text( "集团宣传片" )
			$( ".controller_right .controller_text" ).removeClass( "top_hidden" ).text( "社会责任" )
			setTimeout( function()
			{
				$( ".exp_data._2 .desc_title" ).removeClass( "top_hidden" )
				$( ".exp_data._2 .desc_text " ).removeClass( "bottom_hidden" )
				$( ".exp_data._2 .pointer " ).removeClass( "no_width" )
				$( ".exp_data._2 .line " ).removeClass( "no_height" )
				$( ".exp_data._2 .more p" ).removeClass( "top_single" )
			}, 10 )
		}, 1000 )
	}
	if( qi == 2 )
	{
		$( ".exp_data._2 .desc_title" ).addClass( "top_hidden" )
		$( ".exp_data._2 .desc_text " ).addClass( "bottom_hidden" )
		$( ".exp_data._2 .pointer " ).addClass( "no_width" )
		$( ".exp_data._2 .line " ).addClass( "no_height" )
		$( ".exp_data._2 .more p" ).addClass( "top_single" )
		$( ".controller_left .controller_text" ).addClass( "top_hidden" )
		$( ".controller_right .controller_text" ).addClass( "top_hidden" )
		$( "http://www.shenergy.com.cn/Application/Home/View/Static/Js/.controller_right .back" ).addClass( "hidden_by_scaling_full" )
		$( ".controller_right .arrow" ).addClass( "hidden" )
		$( "#experience_box_scroller " ).animate( { marginLeft: -wi * 2 }, 1000 )

		setTimeout( function()
		{
			$( ".exp_data._2" ).removeClass( "active" )
			$( ".exp_data._3" ).addClass( "active" )

			$( ".controller_left .controller_text" ).removeClass( "top_hidden" ).text( "董事长致辞" )
			setTimeout( function()
			{
				$( ".exp_data._3 .desc_title" ).removeClass( "top_hidden" )
				$( ".exp_data._3 .desc_text " ).removeClass( "bottom_hidden" )
				$( ".exp_data._3 .pointer " ).removeClass( "no_width" )
				$( ".exp_data._3 .line " ).removeClass( "no_height" )
				$( ".exp_data._3 .more p" ).removeClass( "top_single" )
			}, 10 )
		}, 1000 )
	}
} )
$( ".controller_left" ).click( function()
{
	qi--
	if( qi == 0 )
	{
		$( ".exp_data._2 .desc_title" ).addClass( "top_hidden" )
		$( ".exp_data._2 .desc_text " ).addClass( "bottom_hidden" )
		$( ".exp_data._2 .pointer " ).addClass( "no_width" )
		$( ".exp_data._2 .line " ).addClass( "no_height" )
		$( ".exp_data._2 .more p" ).addClass( "top_single" )
		$( "http://www.shenergy.com.cn/Application/Home/View/Static/Js/.controller_left .back" ).addClass( "hidden_by_scaling_full" )
		$( ".controller_left .arrow" ).addClass( "hidden" )
		$( ".controller_right .controller_text" ).addClass( "top_hidden" )
		$( ".controller_left .controller_text" ).addClass( "top_hidden" )
		$( "#experience_box_scroller " ).animate( { marginLeft: 0 }, 1000 )

		setTimeout( function()
		{
			$( ".exp_data._2" ).removeClass( "active" )
			$( ".exp_data._1" ).addClass( "active" )
			$( ".controller_right .controller_text" ).removeClass( "top_hidden" ).text( "董事长致辞" )
			setTimeout( function()
			{
				$( ".exp_data._1 .desc_title" ).removeClass( "top_hidden" )
				$( ".exp_data._1 .desc_text " ).removeClass( "bottom_hidden" )
				$( ".exp_data._1 .pointer " ).removeClass( "no_width" )
				$( ".exp_data._1 .line " ).removeClass( "no_height" )
				$( ".exp_data._1 .more p" ).removeClass( "top_single" )
			}, 10 )
		}, 1000 )
	}
	if( qi == 1 )
	{
		$( ".exp_data._3 .desc_title" ).addClass( "top_hidden" )
		$( ".exp_data._3 .desc_text " ).addClass( "bottom_hidden" )
		$( ".exp_data._3 .pointer " ).addClass( "no_width" )
		$( ".exp_data._3 .line " ).addClass( "no_height" )
		$( ".exp_data._3 .more p" ).addClass( "top_single" )
		$( ".controller_left .controller_text" ).addClass( "top_hidden" )
		$( "#experience_box_scroller " ).animate( { marginLeft: -wi }, 1000 )

		setTimeout( function()
		{
			$( ".exp_data._3" ).removeClass( "active" )
			$( ".exp_data._2" ).addClass( "active" )
			$( "http://www.shenergy.com.cn/Application/Home/View/Static/Js/.controller_right .back" ).removeClass( "hidden_by_scaling_full" )
			$( ".controller_right .arrow" ).removeClass( "hidden" )
			$( ".controller_left .controller_text" ).removeClass( "top_hidden" ).text( "集团宣传片" )
			$( ".controller_right .controller_text" ).removeClass( "top_hidden" ).text( "社会责任" )
			setTimeout( function()
			{
				$( ".exp_data._2 .desc_title" ).removeClass( "top_hidden" )
				$( ".exp_data._2 .desc_text " ).removeClass( "bottom_hidden" )
				$( ".exp_data._2 .pointer " ).removeClass( "no_width" )
				$( ".exp_data._2 .line " ).removeClass( "no_height" )
				$( ".exp_data._2 .more p" ).removeClass( "top_single" )
			}, 10 )
		}, 1000 )
	}

} )
}