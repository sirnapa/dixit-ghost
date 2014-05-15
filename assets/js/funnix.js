/**
 * Detalles personalizados para Funnix
 */

$(document).ready(function(){
    crearGalerias();
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
        $('.galeria_'+i).first().after(
            $('<div>').attr('id','galeria_wrap_'+i)
                .addClass('camera_wrap camera_azure_skin')
        );

        $('.galeria_'+i).each(function(index,img){
            var divImg = $('<div>').attr('data-thumb',$(img).attr('src'))
                .attr('data-src',$(img).attr('src'))
                .appendTo('#galeria_wrap_'+i);

            $('<div>').addClass('camera_caption fadeFromBottom')
                .html($(img).attr('alt'))
                .appendTo(divImg);
            
            $(img).remove();
        });

        $('#galeria_wrap_'+i).camera({
            thumbnails: true
        });

    }
}