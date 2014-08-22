$(document).ready(function(){
	
	var arr_image = ["../MidtermExam/images/a.jpg", "../MidtermExam/images/b.jpg", "../MidtermExam/images/d.jpg"];
	var arr_index =0;
	
	
	/*stores all images in an array, then pictures changes(using the fadein fadeout method
	) when you click the picture
	*/
	$("#picture").click(function(){
		$("#picture").fadeOut(300, function(){
			$("#picture").attr("src",arr_image[arr_index]);
			arr_index++;
			if(arr_index > 2){
				arr_index = 0;
			}
			$("#picture").fadeIn(500);
		});
	});
	
	/*Show more function
		onload of the site hideshow paragraphs is hidden
		checks if content of text
	*/
		$("#hideshow").hide();
		$("#clickme").click(function(){
			$("#hideshow").slideToggle(400);
			$(this).text($(this).text() == 'Show more...' ? 'Show less...': 'Show more...');
		});
			
	
	
	/*Tooltip function*/
	/*get all the link, check if its empty if its not it creates a span element*/
	var Tooltip = {
		init: function(){
			var thelinks = document.getElementsByTagName("img");
			
			if(thelinks){
				for(var i=0; i < thelinks.length; i++){
					if(thelinks[i].alt.length){
						thelinks[i].addEventListener("mouseover", Tooltip.showTips);
						thelinks[i].addEventListener("mouseout", Tooltip.hideTips);
					}
				}
			}
		},
		showTips: function(event){
		
			var spanelem = document.createElement("span");
			spanelem.className ="tooltip";
			spanelem.innerHTML = event.target.alt;
			
		
			event.target.alt= "";
			event.target.appendChild(spanelem);
			event.target._spanRef = spanelem;
		},
		hideTips: function(event){
			event.target.alt = event.target._spanRef.innerHTML;
			event.target.removeChild(event.target._spanRef);
		}
	};
	window.addEventListener("load",Tooltip.init);
	
	/*code of Submenu*/
	$(".subMenu").hide();

  $('#nav li > .subMenu').parent().hover(function(){
    $(this).children('.subMenu').stop().slideToggle(300);
	
  });  
	
	
});
