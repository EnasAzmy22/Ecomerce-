$(document).ready(function(){
$("div").slideDown(500);
$("div").animate({
	
   width:'600px',                               //animate({properties},speed,function)
   height:'600px'                                //functuion({})
},200),
$("div").animate({
	borderRadius:'20px',
}),
$("input").animate({
	borderRadius:'20px'
});
$("button").css("margin","30px");
$("button").css("borderRadius","40px");
$("input").click(function(){                
	$(this).css("border","3px solid #33CC33");
})
$("button").click(function(){
	$("div").slideUp(500);
})
});