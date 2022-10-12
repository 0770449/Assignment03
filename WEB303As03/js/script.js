

// Name: Kamaljeet Kaur
// Student Id:0770449
// Assignment:03


$(function(){
	// getJsonData();
    ajaxMethod();
   });
    
	function getJsonData()        //$.getJSON method
    {
    $.getJSON("team.json", (result)=>{
        $.each(result, (key, val)=>{
            $("#team").append(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`);
        });
    });
    };

function ajaxMethod(){                 //ajax method
    $.ajax({
        url: "team.json",
        beforeSend: function(){
            $("#team").html(`<p>Loading...</p>`);
        },
        
        error: function(){
            $("#team").html(`<p>The content could not be retrieved</p>`);
        },
        
        success: function(result){
            setTimeout(() => {
                $("#team").html("");
                $.each(result, (key,val )=>{
                    $("#team").append(`<h2>${val.name}</h2><h5>${val.position}</h5><p>${val.bio}</p>`);
                });
            }, 1500);
        }
    });
};

