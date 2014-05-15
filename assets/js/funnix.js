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
        if(sig.is('img')){
            $(img).addClass('galeria_'+galeriaId);
            $(sig).addClass('galeria_'+galeriaId);
        }
    });
}