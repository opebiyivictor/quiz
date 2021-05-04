$(document).ready(function(){
$(".btn").click(function(){
$(".showcase").hide();
$(".question1").show();
});


$("#ans1").change(function(){
    $(".question1").hide();
    $(".question2").show();
    });

    $("#ans2").change(function(){
        $(".question2").hide();
        $(".question3").show();
         });


$("#ans3").change(function(){
$(".question3").hide();
 $(".question4").show();
     });


     $("#ans4").change(function(){
        $(".question4").hide();
        $(".question5").show();
         });


         $("#ans5").change(function(){
            $(".question5").hide();
            $(".question6").show();
             });


             $("#ans6").change(function(){
                $(".question6").hide();
                $(".question7").show();
                 });



                 $("#ans7").change(function(){
                    $(".question7").hide();
                    $(".question8").show();
                     });

$("#ans8").change(function(){
 $(".question8").hide();
 $(".container").show();
  });
    
$("#form").submit(function(event){
const question1=$("input[name='first']:checked").val();
const question2=$("input[name='second']:checked").val();
const question3=$("input[name='third']:checked").val();
const question4=$("input[name='fourth']:checked").val();
const question5=$("input[name='fifth']:checked").val();
const question6=$("input[name='sixth']:checked").val();
const question7=$("input[name='seventh']:checked").val();

   if (question1){
      $("#thor").show();
 $("#form").hide();
   }
  if (question2){
      $("#ironman").show();
 $("#form").hide();
   }
   if (question3){
      $("#hulk").show();
 $("#form").hide();
   }
   if (question4){
      $("#spider").show();
 $("#form").hide();
   }
   if (question5){
      $("#atn").show();
 $("#form").hide();
   }
   if (question6){
      $("#panther").show();
 $("#form").hide();
   }
   if (question7){
      $("#widow").show();
 $("#form").hide();
   }


event.preventDefault();
});

}
);