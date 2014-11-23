$(document).ready(function() {
	$('img.zdjecia').fadeIn();

	$('#poprzedni').click(function() {
		var current = $('img.zdjecia');
		if (current.prev('img').length == 1) {
			var prev = current.prev('img');
		} else {
			var prev = current.siblings('img').last();
		}

		current.hide().removeClass('zdjecia');
		prev.fadeIn().addClass('zdjecia');

	});

	$('#nastepny').click(function() {

		var current = $('img.zdjecia');

		if (current.next('img').length == 1) {
			var next = current.next('img');
		} else {
			var next = current.siblings('img').first();
		}

		current.hide().removeClass('zdjecia');

		next.fadeIn().addClass('zdjecia');

	});

	$("#przygoda").click(function() {
		$("#przygoda").load("przygoda.html");
	});

	$("#glowna").click(function() {
		$("#glowna").load("glowna.html");
	});
	$("#kontakt").click(function() {
		$("#kontakt").load("kontakt.html");
	});
	$("#hotele").click(function() {
		$("#hotele").load("hotele.html");
	});
	$("#galeria").click(function() {
		$("#galeria").load("galeria.html");
	});
	$("#dojazd").click(function() {
		$("#dojazd").load("dojazd.html");
	});
	$("#miejsca").click(function() {
		$("#miejsca").load("miejsca.html");
	});
	$("#wyslij").click(function() {
		$("#imie").css('background-color', '#FFFFFF');
		if ($("#imie").val().length == 0) {
			$("#imie").css('background-color', '#FF0000');

		}
	});
	$("#wyslij").click(function() {
		$("#nazwisko").css('background-color', '#FFFFFF');
		if ($("#nazwisko").val().length == 0) {
			$("#nazwisko").css('background-color', '#FF0000');

		}
	});
	$("#wyslij").click(function() {
		$("#e-mail").css('background-color', '#FFFFFF');
		if ($("#e-mail").val().length == 0) {
			$("#e-mail").css('background-color', '#FF0000');

		}
	});
	$("#wyslij").click(function() {
		$("#e-mail").css('background-color', '#FFFFFF');


		var mail = /\S+@\S+\.\S+/;
		if (!mail.test($("#e-mail").val())) {
			alert("Niepoprawny adres e-mail!");
			$("#e-mail").css('background-color', '#FF0000');

		}
	});
	$("#klik1").click(function(){
    $("#bd").fadeTo('slow', 0.3, function (){
    	$(this).css('background-image', 'url(zdjęcia/tlo3.jpg)');}).fadeTo('slow',1);
    });
   $("#klik2").click(function(){
    $("#bd").fadeTo('slow', 0.3, function (){
    	$(this).css('background-image', 'url(zdjęcia/tlo2.jpg)');}).fadeTo('slow',1);
    });
	
	
  	$("#tekst").hide();
	$("#wysun").click(function(){
  	$("#tekst").slideToggle();
	});
	$("#wysun").css("font-size", "20px");
	$("#wysun").css("font-weight", "bold");
	$("#tekst").css("font-size", "18px");
	
	$("#wysun").mouseover(function() {
			$(this).css("color", "red");
		});
	$("#wysun").mouseleave(function() {
			$(this).css("color", "black");
		});
	$("#wysun").mouseover(function() {
			$(this).css("font-size", "21px");
		});
	$("#wysun").mouseleave(function() {
			$(this).css("font-size", "20px");
		});
	$("ul a:link").mouseover(function() {
			$(this).css("color", "white");
		});
	$("ul a:link").mouseleave(function() {
			$(this).css("color", "black");
		});
	
$(document).ready(function() {
   animateDivers();	
});

function animateDivers() {
	$("#naglowek").animate({'margin-left':'89%'},10000).animate({'margin-left':'89%'},10000, animation2);
}
 
function animation2() {
	$("#naglowek").css("margin-left","0px");
animateDivers();
}
});