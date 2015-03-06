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
                    break;
                case 97:
                case 49:
                    var n = 1;
                    break;
                case 98:
                case 50:
                    var n = 2;
                    break;
                case 99:
                case 51:
                   var n =3;
                    break;
                case 100:
                case 52:
                    var n = 4;
                    break;
                case 101:
                case 53:
                    var n = 5;
                    break;
                case 102:
                case 54:
                    var n = 6;
                    break;
                case 103:
                case 55:
                    var n = 7;
                    break;
                case 104:
                case 56:
                    var n = 8;
                    break;
                case 105:
                case 57:
                    var n = 9;
                    break;
                case 106:
                     var n = "*";
                    break;

                case 107:
                    var n = "+";
                    break;
                case 109:
                    var n = "-";
                    break;
                case 110:
                    var n = ".";
                    break;
                case 111:
                    var n = "/";
                    break;
                case 46:
                    $(".outcome").val("");
                    $(".screen").html("");
                    break;
                case 13:
                    $(".outcome").val(eval($(".outcome").val()));
                    $(".screen").html(eval($(".outcome").val()));
                    break;
            }
            

            if(!(e.keyCode == 46) && !(e.keyCode == 13)){
                $(".screen").append(n);
                $(".outcome").val($(".outcome").val() + n);
            }
        });
    })
});