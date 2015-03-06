$(document).ready(function(){   
    $(function(){

        $(".val").click(function(e){
            e.preventDefault();
            var a = $(this).attr("href");
            $(".screen").append(a);
            $(".outcome").val($(".outcome").val() + a);
        });

        $(".equal").click(function(){
            $(".outcome").val(eval($(".outcome").val()));
            $(".screen").html(eval($(".outcome").val()));
        });

        $(".clear").click(function(){
            $(".outcome").val("");
            $(".screen").html("");
        });

        

        $(document).keydown(function(e){
                            
            switch(e.keyCode){
                case 96:
                case 48:
                    var n = 0;
                    $(".screen").append(n);
                    $(".outcome").val($(".outcome").val() + n);
                    alert("HOooola");
                    break;
                case 97:
                case 49:
                    var n = 1;
                    $(".screen").append(n);
                    $(".outcome").val($(".outcome").val() + n);
                    break;
                case 98:
                case 49:
                    n = 2;
                    break;
                case 107:
                    n = "+";
                    $(".screen").append(n);
                    $(".outcome").val($(".outcome").val() + n);
                    break;
                case 13:
                    $(".outcome").val(eval($(".outcome").val()));
                    $(".screen").html(eval($(".outcome").val()));

            }
        });
    })
});