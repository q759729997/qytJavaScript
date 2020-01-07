/**
 *
 文本工具函数
 *
 @module utils
 */

/**
 * 长字符串增加换行符号.
 * 
 * @param {String} text 待处理的字符串.
 * @param {Number} wrappingLength 需要折行的长度.
 * 
 * @return {String} 处理后加入换行符号的字符串.
 */
function wrapText(text, wrapLength = 5) {
	var newStr = " ";
	var start, end;
	var textLen = text.length; //每个内容名称的长度
	var newRow = Math.ceil(textLen / wrapLength); // 最多能显示几行，向上取整比如2.1就是3行
	if (textLen > wrapLength) { //如果长度大于每行最多显示的字数
		for (var i = 0; i < newRow; i++) { //循环次数就是行数
			var oldStr = ''; //每次截取的字符
			start = i * wrapLength; //截取的起点
			end = start + wrapLength; //截取的终点
			if (i == newRow - 1) { //最后一行就不换行了
				oldStr = text.substring(start);
			} else {
				oldStr = text.substring(start, end) + "\n";
			}
			newStr += oldStr; //拼接字符串
		}
	} else { //如果小于每行最多显示的字数就返回原来的字符串
		newStr = text;
	}
	return newStr;
}
