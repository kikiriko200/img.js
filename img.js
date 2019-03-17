//img.js
//(c) 2019- DAFU(https://github.com/kikiriko200/img.js)
//MIT License(https://github.com/kikiriko200/img.js/blob/master/LICENSE)
var counter = 0; //個別番号
var scale = 1; // 倍率
var classname = $('.as'); //クラス名
classname.each(function(){
	var height = $(this).parent();
	height = height.height();
	var width = $(this).parent();
	width = width.width();
	if (height <= width){ //小さい方に合わせる
		width = height;
	}else{
		height = width;
	}
	$(this).css({ //CSS制御
		'height': height*scale,
		'width' : width*scale,
		'object-fit': 'cover'
  });
  counter++;
  console.log('Resize Image#'+counter+'\nwidth:'+width+'px;\nheight:'+height+'px');
});
