/**
 * Detalles personalizados para Funnix
 */

$(document).ready(function(){
    //crearGalerias();
});

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
            $('<div>').attr('id','galeria_wrap_'+i)
                .addClass('galeria_wrap')
        );
        $('.galeria_'+i).each(function(index,img){
            var divImg = $('<a>').addClass('galeria_img')
                .attr('href',$(img).attr('src'))
                .css('width',(100/elementos)+'%')
                .css('height',(100/elementos)+'%')
                .appendTo('#galeria_wrap_'+i);                
            $(img).appendTo(divImg);
        });
    }
}