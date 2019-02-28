function tabToggle(){
    $('body').on('click','.selfTab',function(){
        var targetId=$(this).attr('data-target');
        $('.watStaListDiv .selfTab').removeClass('active');
        $('.watStaListDiv .tab-pane').removeClass('active');
        $(this).addClass('active');
        $('#'+targetId).addClass('active');
    })
}
function loadImg(){
	$('img[data-src]').each(function(i, obj){
		var _src=$(this).attr("data-src");
		$(this).attr("src",_src);

	});
}
var swidth = null;
var W = null;
//header部分里面的所有元素的宽高全自适应方法

function HautoFit() {
	swidth = $(window).width();
	if (swidth > 1320 || swidth === 1320) {
		resize();
	}
}

//部分模块等比缩放


function resize() {
	var winratio = $(window).width() / 1920;
	var height = $(window).height();
	//console.log(winratio);
    if(winratio<1){
		$('.body1').css({
			transform: "scale("+winratio+")",
			transformOrigin: "left top"
		});
	}
}