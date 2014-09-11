/**
 * Detalles personalizados para Funnix
 */

$(document).ready(function(){
    $('.post .boton').parent().css('text-align','center');
    crearGalerias();
    centrarImagenes();
});

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
                        