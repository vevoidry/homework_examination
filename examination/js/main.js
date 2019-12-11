var messageList = new Array();

//启动函数，打开主页即启动该函数
function startFunction() {
	console.log("启动函数");
	//初始化留言板数据
	messageList[0]="这是留言板~";
	// 启动计时器
	setInterval(refreshTime, "1000");
	// 显示留言板信息
	setMessage();
}

//获取留言并加入留言板并显示
function postContent(){
	var content="";
	content=$("#content").val();
	if(content==""){
		return;
	}
	messageList[messageList.length]=content;
	//清空发送栏
	$("#content").val("").focus();
	//重绘留言板
	setMessage();
}

// 获取数据绘制留言板
function setMessage() {
	var startString = "<ul class=\"list-group\">";
	var middleString = "";
	var endString = "</ul>";
	for ( var index in messageList) {
		middleString += "<li class=\"list-group-item\">" + messageList[index]
				+ "</li>";
	}
	$("#message").show();
	$("#centerData").html("");
	$("#centerData").html(startString + middleString + endString);
}
// 绘制链接
function setLink() {
	var startString = "<ul class=\"list-group\">";
	var middleString = "";
	var endString = "</ul>";
	middleString += "<li class=\"list-group-item\">"
			+ "<a href=\"http://www.baidu.com\">" + "百度" + "</a>" + "</li>";
	middleString += "<li class=\"list-group-item\">"
			+ "<a href=\"http://www.alibaba.com\">" + "阿里巴巴" + "</a>" + "</li>";
	middleString += "<li class=\"list-group-item\">"
			+ "<a href=\"http://www.tencent.com\">" + "腾讯" + "</a>" + "</li>";
	$("#message").hide();
	$("#centerData").html("");
	$("#centerData").html(startString + middleString + endString);
}

// 绘制动画
function setAnime() {
	$("#message").hide();
	var randomX = 100 + Math.random() * 200 + Math.random() * 100;
	var randomY = 100 + Math.random() * 200 + Math.random() * 100;
	var randomLeft = Math.random() * 500;
	var randomRight = Math.random() * 500;
	$("#timeSection").animate({
		left : randomLeft + 'px',
		opacity : '0.5',
		height : randomY + 'px',
		width : randomX + 'px'
	});
	$("#timeSection").animate({
		right : randomRight + 'px',
	});
	var randomColor = Math.random() * 5;
	if (randomColor >= 0 && randomColor < 1) {
		$("#timeSection").css("background", "pink");
	} else if (randomColor >= 1 && randomColor < 2) {
		$("#timeSection").css("background", "red");
	} else if (randomColor >= 2 && randomColor < 3) {
		$("#timeSection").css("background", "green");
	} else if (randomColor >= 3 && randomColor < 4) {
		$("#timeSection").css("background", "yellow");
	} else {
		$("#timeSection").css("background", "black");
	}
}

// 刷新时间
function refreshTime() {
	var time = getTime() + '';
	$("#time").html(time);
}
// 获取当前时间
function getTime() {
	var myDate = new Date();
	var year = myDate.getFullYear(); // 获取当前年
	var month = myDate.getMonth() + 1; // 获取当前月
	var date = myDate.getDate(); // 获取当前日
	var h = myDate.getHours(); // 获取当前小时数(0-23)
	var m = myDate.getMinutes(); // 获取当前分钟数(0-59)
	var s = myDate.getSeconds();

	var now = year + '-' + getNow(month) + "-" + getNow(date) + " " + getNow(h)
			+ ':' + getNow(m) + ":" + getNow(s);
	return now;
}

function getNow(s) {
	return s < 10 ? '0' + s : s;
}
