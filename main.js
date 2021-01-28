function getParagraph1(){
    var paragraph="";
    var input=[];
    
    for(i=1;i<=6;i++){
        var text= document.getElementById("paral_input_box_"+i).value;
        input.push(text);
    } 

   paragraph=input.join(". ");
   document.getElementById("paragraph_1").innerHTML=paragraph;
}

function getParagraph2(){
    var paragraph="";
    var input=[];
    
    for(i=7;i<=12;i++){
        var text= document.getElementById("paral_input_box_"+i).value;
        input.push(text);
    } 

   paragraph=input.join(". ");
   document.getElementById("paragraph_2").innerHTML=paragraph;
}