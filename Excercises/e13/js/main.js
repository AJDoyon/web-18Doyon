$(document).ready(function() {
    // run function on initial page load
    demoFunction();
    // vPosH1();
    console.log('click');
    // run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});

function demoFunction() {
	$('.jqClick').click(function() {
		$('.header').toggleClass('bigger');
        console.log('click');
	});

     $('.jqHover').hover(function() {
        $('.boing').toggleClass('boinged');
        $("#boing")[0].play();
    });

    $('.jqDClick').dblclick(function() {
        $('.jumpscare').toggleClass('jumpscared');
        $("#booga")[0].play();

    });
}