'use strict';
$(document).ready(function(){
    let status=$("#status").text();
    let notTouchWall=true;
    let startCLicked=false;
    $( "div#maze div.boundary" ).mouseover(function() {
        if(startCLicked){
            if(notTouchWall) {
                $("div.boundary:not(example)").addClass("youlose");
                $("#status").text('You just moved your mouse over the #someId element!');
                notTouchWall=false;
            }
        }
           });
    $("div#end").click(function(){
        if(startCLicked){
            if(notTouchWall){
                $("#status").text("You win");
            }
            else
            {
                $("#status").text("You lose");
            }
        }
        startCLicked=false;
    });
    $("div#start").click(function () {
        notTouchWall=true;
        startCLicked=true;
        $("div.boundary:not(example)").removeClass("youlose");
        $("#status").text(status);
    });

    $("body > *:not(#maze)").mouseover(function () {
       if(startCLicked){
           $("div.boundary:not(example)").addClass("youlose");
           $("#status").text("You lose");
       }
    });
});