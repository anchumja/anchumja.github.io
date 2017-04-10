
function screenshotSwitch() {
        var $active = $('div#screenshot IMG.active');
        var $next = $active.next();  


        if (!$next.attr("src")){
        	$next=$('div#screenshot IMG.first-screenshot');
        }

        $next.fadeIn(200);
        $active.fadeOut(200);
        $next.addClass('active');
        $active.removeClass('active');
    }

$( document ).ready(function() {

	$(".menubutton").click(function(){
		$(".menubtns").toggleClass("mobilemenu");
	});
   
   setInterval( "screenshotSwitch()", 5000 );

   $(".game-screenshot-slide").click(function(){screenshotSwitch();});


});