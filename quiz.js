
  let count=0;
  
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
    
     if(count<10)
     {
    $.getJSON("ques-db.json",function(json){
    
   const keys = Object.values(json);
     let randIndex = Math.floor(Math.round(Math.random()*7));

    let value = keys[randIndex];
    $("#queno").text(count);
    //console.log(count);
    
  
     sessionStorage.setItem("que",keys[randIndex].question);
     sessionStorage.setItem("ans",keys[randIndex].answer);
    // localStorage.setItem("question",JSON.stringify(value));
    $("#que").text(keys[randIndex].question);
    $("#value1").text(value["options"][0]);
    $("#value2").text(value["options"][1]);
    $("#value3").text(value["options"][2]);
    $("#value4").text(value["options"][3]);
   
   });
}

count++;
}

function process()
{
    let selectedValue=document.getElementById("value1").textContent;
    console.log(selectedValue);

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
    getJSON();
    
}
function process1()
{
    let selectedValue=document.getElementById("value2").textContent;
    console.log(selectedValue);

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
    getJSON();
    
}
function process2()
{
    let selectedValue=document.getElementById("value3").textContent;
    console.log(selectedValue);

    let ans = sessionStorage.getItem("ans");

    if(ans==selectedValue)
    {
        //console.log("Right answer");
        
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
    getJSON();
    
}
function process3()
{
    let selectedValue=document.getElementById("value4").textContent;
    console.log(selectedValue);

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
    getJSON();
    
}

  




    

