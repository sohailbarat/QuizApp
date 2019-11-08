let COUNT=1;
$(function(){
    getJSON();
    result();
    let mark=0; 
    sessionStorage.setItem("mark",mark);
    startTimer();
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
         getFunction();
    });
}
function getFunction(){

    if(COUNT<=9)
    {
        const keys = Object.values(array);
        console.log(array);
        let randIndex = Math.floor(Math.round(Math.random()*10));
        console.log(randIndex);
        if(randIndex == null)
        {
            randIndex=1;
        }
        console.log(randIndex);
        let value = keys[randIndex];
        $("#queno").text(COUNT);
        $("#que").text(keys[randIndex].question);
        $("#value1").text(value["options"][0]);
        $("#value2").text(value["options"][1]);
        $("#value3").text(value["options"][2]);
        $("#value4").text(value["options"][3]);
        sessionStorage.setItem("que",keys[randIndex].question);
        sessionStorage.setItem("ans",keys[randIndex].answer);
    }
    else
    {
        $("#value1").attr("disabled", true);
        $("#value2").attr("disabled", true);
        $("#value3").attr("disabled", true);
        $("#value4").attr("disabled", true);

    }
    COUNT++;
}



function process(value)
{
   selectedValue=value.innerText;
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
    getFunction();
    
}

function startTimer() {
    var time_in_minutes = 5;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    function time_remaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
    }
    function run_clock(id,endtime){
        var clock = document.getElementById('timer');
        function update_clock(){
            var t = time_remaining(endtime);
            document.getElementById("timer").innerHTML=t.minutes+':'+t.seconds;
            if(t.total<=0){
                clearInterval(timeinterval);
                location.replace("index2.html");
             }
        }
        update_clock();
        var timeinterval = setInterval(update_clock,1000);
    }
        run_clock('timer',deadline);
}
  




    

