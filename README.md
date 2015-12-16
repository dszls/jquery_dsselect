# jquery.dsselect
简单模拟下拉列表效果。样式可以自己修改CSS样式

## html 结构

> 点击列表后会自动赋值给'.js-input-hidden input'对象

    <div class="dsselect_menu ">
        <a class="dsselect_switch" href="javascript:;">
         <label></label>
         <i></i>
        </a>
        <div class="dsselect_data_con ">
	        <ul class="dsselect_data_list">
	          <li><a href="javascript:;" data-value="1" >第1个</a></li>
	          <li><a href="javascript:;" data-value="2" >第2个</a></li>
	          <li><a href="javascript:;" data-value="3" >第3个</a></li>
	          <li><a href="javascript:;" data-value="4" >第4个</a></li>
	        </ul>
        </div>
    	<input type="hidden" class="js-input-hidden" value="">
    </div>

## 调用方法 	
	

    <script>
	$(".dsselect_menu").dsSelect({
		onChange:function(){
			console.log("选择的是:"+$(this).text());
		}
	});
	</script>
