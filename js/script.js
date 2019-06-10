$(document).ready(function() {
 //On mouseenter remove the red class and add the border class.
 $("#button1").mouseenter(function(){
        $("#button1").removeClass( "makeRed").addClass("makeBorder"); 
    });
    // On mouseleave reverse the above.
     $("#button1").mouseleave(function(){
        $("#button1").removeClass( "makeBorder").addClass("makeRed"); 
	});
    // 	When the button is clicked, make the paragraph slide up. When clicked again, make it slide down.
    $( "#button1" ).click(function() {
		$( "#para1" ).slideToggle(1000);
	});
    $( "#button1" ).click(function() {
		$( "#para1" ).hide(1000).show(1000);
	});
	$( "#button1" ).click(function() {
		$( "#para1" ).fadeIn(2000).fadeOut(2000);
	});
});
// Go to eir.ie Using Developer tools to change all the links (hrefs) so they point to codeinstitute.net.
// $('a').attr('href', 'https://codeinstitute.net');