var inputs=[];
function getParagraph1(){
for(var i=1; i<=6; i++){
 inputs.push(document.getElementById("para1_input_box_"+i).value);
 inputs.join(".");
document.getElementById("showParagraph1").innerHTML=inputs.join(".");
}
}

var inputs1=[];
function getParagraph2(){
for(var j=1; j<=6; j++){
 inputs1.push(document.getElementById("para2_input_box_"+j).value);
 inputs1.join(".");
document.getElementById("showParagraph2").innerHTML=inputs1.join(".");
}
}