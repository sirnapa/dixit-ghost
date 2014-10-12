/**
 * Main JS file for Echo behaviours
 */

$(document).ready(function(){
    
	/* Off Canvas Navigation */
    $('.echo-menu-btn, .echo-sidebar').click(function() {
        $('main, .echo-cover-photo, header, footer').toggleClass('echo-content-open disable-scroll');
        $('.echo-sidebar').toggleClass('echo-sidebar-open');
    });

    $('#search').click(function(e){
        e.stopPropagation();
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
    scrollToTop();

});