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
        },
        timer;
    function left(){
        if((cfg.left/(-1200))==1){
            $('#li4').attr('class',"active");
        }
        $('#li'+(cfg.left/(-1200)-2)).attr('class',"active");
        $('#li'+(cfg.left/(-1200)-1)).removeAttr('class');
        if(cfg.left==-1200){
            cfg.left=-7200;
        }
        cfg.left=cfg.left+1200;
        $('#slider').css({
            left:cfg.left+'px'
        })
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
        if(cfg.left==-1200){
            cfg.left=-1200
        }
        if(cfg.left==-7200){
            cfg.left=-1200
        }
        cfg.left=cfg.left-1200;
        $('#slider').css({
            left:cfg.left+'px'
        })
    }
    function hover(){
        $('#left').attr('style','opacity:0.5')
        $('#right').attr('style','opacity:0.5')
        clearInterval(timer);
    }
    function out(){
        $('#left').removeAttr('style')
        $('#right').removeAttr('style')
        timer=setInterval(function(){
            if((cfg.left/(-1200))==5){
                $('#li0').attr('class',"active");
            }
            $('#li'+(cfg.left/(-1200))).attr('class',"active");
            $('#li'+(cfg.left/(-1200)-1)).removeAttr('class');
            cfg.left=cfg.left-1200;
            $('#slider').css({
                left:cfg.left+'px'
            })
            if(cfg.left==-7200){
                cfg.left=-1200
            }
        },3000)
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
        timer=setInterval(function(){
            if((cfg.left/(-1200))==5){
                $('#li0').attr('class',"active");
            }
            $('#li'+(cfg.left/(-1200))).attr('class',"active");
            $('#li'+(cfg.left/(-1200)-1)).removeAttr('class');
            cfg.left=cfg.left-1200;
            $('#slider').css({
                left:cfg.left+'px'
            })
            if(cfg.left==-7200){
                cfg.left=-1200
            }
        },3000)
        $('#box').mouseover(hover);
        $('#box').mouseout(out);
        $('#left').click(left);
        $('#right').click(right);
        li();
    }
}
