$( ".switch" ).on("click", function() {

	localStorage.setItem("mode", "dark");

    if( $( "body" ).hasClass( "dark" )) {

    	$( "body" ).removeClass( "dark" );
    	$( ".inner-switch" ).text( "OFF" );
    	$("h6").removeClass("darkIcon");
    	$("i").removeClass("darkIcon");
    	$(".text-teal").removeClass("darkIcon");

    } else {

    	$( "body" ).addClass( "dark" );
    	$( ".inner-switch" ).text( "ON" );
    	$("h6").addClass("darkIcon");
    	$("i").addClass("darkIcon");
    	$(".text-teal").addClass("darkIcon");
    }
});