/* ===========================================================
 *  Created by:  https://github.com/dszls
 * =========================================================== */
;(function(factory) {
	//amd
	if (typeof define === 'function' && define.amd) {
		define(['$'], factory);
	} else if (typeof module === "object" && module && typeof module.exports === "object") {
		module.exports = factory();
	} else {
		factory(window.Zepto || window.jQuery || $);
	}
})(function ($) {
	$.fn.dsSelect=function(options){
		var defaluts={
			onChange:$.noop
		};
		var opts = $.extend({}, defaluts, options); //使用jQuery.extend 覆盖插件默认参数
		return this.each(function(){
			var $this = $(this);
			//根据参数来设置 dom的样式
            bindEvent($this);
		});
		
		//绑定事件
		function bindEvent(obj){
			if(!$(obj).hasClass("disabled")){
				$(obj).find(".dsselect_switch").on("click",function(e){
					e.stopPropagation();
					$(".dsselect_menu").removeClass("open");
					var that=$(this);
					$(obj).addClass("open");
					$("html").on("click.selectBlur", function(e) {
	                     blurSelect(obj);
	                });
				});
				$(obj).on("click",".dsselect_data_list li a",function(e){
					e.stopPropagation();
					var that=$(this);
					var _val=that.data("value");
					var _txt=that.text();
					//console.log(_val);
					$(obj).find(".dsselect_switch label").text(_txt);
					if($(obj).find(".js-input-hidden").length>0){
						$(obj).find(".js-input-hidden").val(_val);
					}
					blurSelect(obj);
					opts.onChange.apply(this);
				});
			}
		}
		
		//失去焦点
		function blurSelect(obj){
			$(obj).removeClass("open");
			$("html").off(".selectBlur");
		}
		
	}
});

