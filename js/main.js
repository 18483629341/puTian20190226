function HautoFit() {
	swidth = $(window).width();
	if (swidth > 1320 || swidth === 1320) {
		homeresize();
	}
}

//部分模块等比缩放


function homeresize() {
	var winratio = $(window).width() / 1920;
	var height = $(window).height();
	console.log(winratio);
    if(winratio<1){
		$('.body1').css({
			transform: "scale("+winratio+")",
			transformOrigin: "left top"
		});
	}
}