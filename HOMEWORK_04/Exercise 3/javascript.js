$(document).ready(function () {
    $("#vungchuatext").keypress(function () { 
        var x = $("#vungchuatext").val();
        $(".active").text(x);
              
    });
    $("#btn-change").click(function () { 
        var sValue = $("select").val();
        switch(parseInt(sValue)){
            case 1:
                $("p").removeClass();
                $("p").addClass("1");
                break;
            case 2:
                $("p").removeClass();
                $("p").addClass("2");
                break;
            case 3:
                $("p").removeClass();
                $("p").addClass("3");
                break;
            case 4:
                $("p").removeClass();
                $("p").addClass("4");
                break;
        }
    });

    $("#btn-new").click(function () { 
        $("p").removeClass("active");
        var $newp = $("<p/>")   
                 .addClass("active")  
                 .html("<p></p>");

        $("#story").append($newp);     
        $('#vungchuatext').val('').change()
        
        
    });
});