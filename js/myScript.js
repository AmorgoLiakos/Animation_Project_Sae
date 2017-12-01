$(document).ready(function()
{	
	 $.getJSON("js/units.json", function(result){
        $.each(result, function(key, value){
			$("#" + key).html(value.firstname)
			
			console.dir(value.firstname);
        });
    });

	
});