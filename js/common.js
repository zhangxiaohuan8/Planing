function Box(){
    var $box=$(
                '<div class="slider" id="slider">'+
                '<div class="slide"><img src="img/b5.png" alt=""></div>'+
                '<div class="slide"><img src="img/b1.png" alt=""></div>'+
                '<div class="slide"><img src="img/b2.png" alt=""></div>'+
                '<div class="slide"><img src="img/b3.png" alt=""></div>'+
                '<div class="slide"><img src="img/b4.png" alt=""></div>'+
                '<div class="slide"><img src="img/b5.png" alt=""></div>'+
                '<div class="slide"><img src="img/b1.png" alt=""></div>'+
            '</div>'+
            '<span id="left"><</span>'+
            '<span id="right">></span>'+
            '<ul class="nav" id="navs">'+
                '<li id="li0">1</li>'+
                '<li id="li1">2</li>'+
                '<li id="li2">3</li>'+
                '<li id="li3">4</li>'+
                '<li id="li4">5</li>'+
            '</ul>'),
        cfg = {
                container:'.box',
                left:-1200,
                new:0
        },
        timer,
        num,
        right1,
        left1;
    function left(){
        if((cfg.left/(-1200))==1){
            $('#li4').attr('class',"active");
        }
        if(cfg.left==0){
            $('#li3').attr('class',"active");
            $('#li4').removeAttr('class');
        }
        $('#li'+(cfg.left/(-1200)-2)).attr('class',"active");
        $('#li'+(cfg.left/(-1200)-1)).removeAttr('class');
        left1=setInterval(function(){
            cfg.left=cfg.left+25;
            cfg.new+=25;
            $('#slider').css({
                left:cfg.left+'px'
            })
            if(cfg.left==0){
                cfg.left=-6000;
            }
            if(cfg.new!=1200&&cfg.new!=25){
                $('#left').off('click');
            }
            if(cfg.new==1200){
                clearInterval(left1);
                cfg.new=0;
                $('#left').on('click',left)
                return ;
            }
        },10);
    }
    function right(){
        if((cfg.left/(-1200))==5){
            $('#li0').attr('class',"active");
        }
        if((cfg.left/(-1200))==6){
            $('#li1').attr('class',"active");
            $('#li0').removeAttr('class');
        }
        $('#li'+(cfg.left/(-1200))).attr('class',"active");
        $('#li'+(cfg.left/(-1200)-1)).removeAttr('class');
        right1=setInterval(function(){
            cfg.left=cfg.left-25;
            cfg.new+=25;
            $('#slider').css({
                left:cfg.left+'px'
            })
            if(cfg.left==-7200){
                cfg.left=-1200;
            }
            if(cfg.new!=1200&&cfg.new!=25){
                $('#right').off('click');
            }
            if(cfg.new==1200){
                clearInterval(right1);
                cfg.new=0;
                $('#right').on('click',right)
                return ;
            }
        },10);
    }
    function hover(){
        $('#left').attr('style','opacity:0.5')
        $('#right').attr('style','opacity:0.5')
        clear()
    }
    function time(){
        timer=setInterval(function(){
            if((cfg.left/(-1200))==5){
                $('#li0').attr('class',"active");
            }
            $('#li'+(cfg.left/(-1200))).attr('class',"active");
            $('#li'+(cfg.left/(-1200)-1)).removeAttr('class');
            $('#slider').css({
                left:cfg.left+'px'
            })
            clearInterval(num);
            num=setInterval(function(){
                cfg.left-=25;
                $('#slider').css({
                    left:cfg.left+'px'
                })
                if(-cfg.left%1200==0){
                    clearInterval(num);
                }
                if(cfg.left==-7200){
                    cfg.left=-1200;
                }
            },10);
        },3000)
    }
    function clear(){
        clearInterval(timer);
    }
    function out(){
        $('#left').removeAttr('style')
        $('#right').removeAttr('style');
        time();
    }
    function li(){
        var li=$('li');
        for(var i=0; i<li.length; i++){
            (function(j){
                $('#li'+j).mouseover(function(){
                    $('#li'+(cfg.left/(-1200)-1)).removeAttr('class');
                    cfg.left=-1200*(j+1)
                    $('#li'+j).attr('class',"active");
                    $('#slider').css({
                        left:cfg.left+'px'
                    })
                })
            })(i)
        }
        for(var i=0; i<li.length; i++){
            (function(j){
                $('#li'+j).mouseout(function(){
                    $('#li'+j).removeAttr('class');
                    $('#li'+(cfg.left/(-1200)-1)).attr('class',"active");
                })
            })(i)
        }
    }
    this.show=function(conf){
        $.extend(cfg,conf);
        $(cfg.container).append($box);
        $('#li0').attr('class',"active");
        time()
        $('#box').mouseover(hover);
        $('#box').mouseout(out);
        $('#right').click(right);
        $('#left').click(left);
        li()
    }
}
