"use strict";var nextItem,curIndex,index;jQuery.fn.rbtSlider=function(a){return this.each(function(){var n=$(this);if(a.height&&n.css("height",a.height),n.find(".slItem").first().addClass("active"),a.dots){var e=n.find(".slItem").length;n.append($("<div/>",{class:"slDots",html:$("<div/>",{class:"slDotsSingle active"})}));for(var t=1;t<e;t++)n.find(".slDotsSingle.active").clone().removeClass("active").appendTo($(this).find(".slDots"));n.find(".slDotsSingle").on("click",function(){curIndex=$(this).parents(".slDots").find(".active").removeClass("active").index()+1,(index=$(this).addClass("active").index()+1)!=curIndex&&i(curIndex<index?"next":"prev",index)})}if(a.arrows&&n.append($("<div/>",{class:"ctrlPrev",html:"&lsaquo;"}).on("click",function(){i("prev")})).append($("<div/>",{class:"ctrlNext",html:"&rsaquo;"}).on("click",function(){i("next")})),a.auto){var s=setInterval(function(){i("next")},1e3*a.auto);n.on("mouseover",function(){clearInterval(s)}).on("mouseleave",function(){s=setInterval(function(){i("next")},1e3*a.auto)})}function i(e,t){t?nextItem=n.find(".slItem").eq(t-1):(nextItem="prev"==e?n.find(".slItem.active").prev().length?n.find(".slItem.active").prev():n.find(".slItem").last():n.find(".slItem.active").next().length?n.find(".slItem.active").next():n.find(".slItem").first(),n.find(".slDots > .active").removeClass("active").parent().find(".slDotsSingle").eq(nextItem.index()).addClass("active")),nextItem.addClass(e+"Item").delay(50).queue(function(){n.find(".slItems > .active").addClass(e).delay(700).queue(function(){$(this).removeClass(e+" active").dequeue()}),$(this).addClass(e).delay(700).queue(function(){$(this).removeClass(e+" "+e+"Item").addClass("active").clearQueue()}),$(this).dequeue()})}})};