$(document).ready(main);
var contador = 1;

function main(){
	$('.menu_bar').click(function(){
       $('nav').toggle();
       if (contador == 1) {
       	$('nav').animate({
       		left: '0'
       	});
       	contador = 0 ;
       } else {
       	contador = 1
       	$('nav').animate({
       		left: '-100%'
       	});
       }
	});
};
<script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="menu.js"></script>