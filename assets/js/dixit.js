/*
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>";r.appendChild(s.childNodes[1])}t&&e.extend(n,t);return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r=r.not("object object");r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)return;var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);
/**
 * Imágenes y Galerías
 */

function centrarImagenes(){
    $('.echo-post-content img').each(function(i,imagen){
        if(!$(imagen).parent().hasClass('galeria-wrap')){
            var contenedor = $('<p>').css('text-align','center');
            $(imagen).after(contenedor);
            $(imagen).appendTo(contenedor);
        }
    });
}

function crearGalerias(){
    $('body').data('galerias',0);

    $('.echo-post-content img').each(function(i,img){
        var galeriaId = $('body').data('galerias');
        if(!$(img).hasClass('galeria_'+galeriaId)){
            $('body').data('galerias',++galeriaId);
        }
        var sig = $(img).next();
        if(!sig.length){
            sig = $(img).parent().next().children().first();
        }
        if(sig.is('img')){
            $(img).addClass('galeria_'+galeriaId);
            $(sig).addClass('galeria_'+galeriaId);
        }
    });

    for(var i=0;i<=$('body').data('galerias');i++){
        var elementos = $('.galeria_'+i).length;
        if(!elementos){
            continue;
        }
        $('.galeria_'+i).first().after(
            $('<div>').attr('id','galeria-wrap_'+i)
                .addClass('galeria-wrap')
        );
        $('.galeria_'+i).each(function(index,img){
            var divImg = $('<a>').addClass('galeria-img')
                .attr('href',$(img).attr('src'))
                .css('width',(100/elementos)-2+'%')
                .css('height',(100/elementos)-2+'%')
                .appendTo('#galeria-wrap_'+i);                
            $(img).appendTo(divImg);
        });
    }
}
                        
/**
 * Main JS file for Echo behaviours
 */

$(document).ready(function(){
    
	/* Off Canvas Navigation */
    $('.echo-menu-btn, .echo-sidebar').click(function() {
        $('main, .echo-cover-photo, header, footer').toggleClass('echo-content-open disable-scroll');
        $('.echo-sidebar').toggleClass('echo-sidebar-open');
    });

	/* Get contents of .echo-social-media and append to .echo-sidebar */
	$(".echo-sidebar").append( "<div class='echo-social-media'></div>" );
	$('.echo-social-media').html($('.echo-social-media').html());

    /* Make Videos Responsive */
    $(".post").fitVids();

    /* Centrado de botón */
    $('.post .boton').parent().css('text-align','center');

    /* Imágenes y Galerías */
    crearGalerias();
    centrarImagenes();

});