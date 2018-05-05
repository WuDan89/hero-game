$(document).ready(function(){
	// alert(11);
	// 弹框隐藏
	$(".gameDialog").hide();
	// 点击游戏说明，弹框显示
	$("#game-info").click(function(){
		$(".gameDialog").show();
	});
	// 点击返回按钮，弹框隐藏
	$(".close").click(function(){
		$(".gameDialog").hide();
	});

})