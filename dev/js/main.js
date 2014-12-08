/**
 * Main JS file for Dixit behaviours
 */

$(document).ready(function(){
    
	/* Off Canvas Navigation */
    $('.dixit-menu-btn, .dixit-sidebar').click(function() {
        $('main, .dixit-cover-photo, header, footer').toggleClass('dixit-content-open disable-scroll');
        $('.dixit-sidebar').toggleClass('dixit-sidebar-open');
    });

    $('#search').click(function(e){
        e.stopPropagation();
    });

	/* Get contents of .dixit-social-media and append to .dixit-sidebar */
	$(".dixit-sidebar").append( "<div class='dixit-social-media'></div>" );
	$('.dixit-social-media').html($('.dixit-social-media').html());

    /* Make Videos Responsive */
    $(".post").fitVids();

    /* Centrado de botón */
    $('.post .boton').parent().css('text-align','center');

    /* Imágenes y Galerías */
    crearGalerias();
    centrarImagenes();
    scrollToTop();
});