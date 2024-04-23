function calculate(){
    var weight=parseFloat(document.getElementById("first").value)
    parseFloat(document.getElementById("first").value ="")

    var height=parseFloat(document.getElementById("second").value)
    parseFloat(document.getElementById("second").value="")

var a=weight/(height*height);
var bmi=a.toFixed(2)
console.log(bmi);


if(bmi<18.5){
    console.log("under weight");
    var result=document.getElementById("result").innerHTML="under weigt"

}

else if(bmi>=18.5 && bmi<24.9){
    console.log(("normal"));
    var result=document.getElementById("result").innerHTML="no rmal"
}

else if(bmi>=25 && bmi<29.9){
    console.log(("overweight"));
    var result=document.getElementById("result").innerHTML="overweight"
}

else{
    console.log(("obsity"));
    var result=document.getElementById("result").innerHTML="obesity"
}
bmi=result
var a= document.getElementById("result").innerHTML=`<b>${bmi}</b>`
}


