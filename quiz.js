let COUNT=0; 
$(function(){
    getJSON();
    result();
    let mark=0; 
    sessionStorage.setItem("mark",mark);
  })
 function result()
 {
    let marksession=sessionStorage.getItem("mark");
    let mark1=parseInt(marksession, 10);
    console.log(mark1)
    $("#result").text(mark1);
 }
 function getJSON(){

        $.getJSON("ques-db.json",function(json){   
             array=json;
            console.log(array);
            showData();
       // const keys = Object.values(json);
    });
    
}
function showData()
{
    console.log(array);
    const keys = Object.values(array);
    let randIndex = Math.floor(Math.round(Math.random()*7));
    let value = keys[randIndex];
    $("#queno").text(COUNT);
    //console.log(COUNT);
    console.log(keys[randIndex].question);
    sessionStorage.setItem("que",keys[randIndex].question);
    sessionStorage.setItem("ans",keys[randIndex].answer);
    $("#que").text(keys[randIndex].question);
    $("#value1").text(value["options"][0]);
    $("#value2").text(value["options"][1]);
    $("#value3").text(value["options"][2]);
    $("#value4").text(value["options"][3]);
}

function process()
{
    let selectedValue=document.getElementById("value1").textContent;
    //console.log(indexOf(selectedValue));
   // console.log(selectedValue);
    let ans = sessionStorage.getItem("ans");
    if(ans==selectedValue)
    {
        console.log("Right answer");
        let mark=sessionStorage.getItem("mark");
        let mark1=parseInt(mark, 10);
        mark1++;
        //console.log(mark1);
        sessionStorage.setItem("mark",mark1);   
    }
    else
    {
        console.log("wrong answer");
        
    }
    showData();
    
}
