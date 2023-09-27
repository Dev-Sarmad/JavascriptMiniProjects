const endDate = "30 Sep 2023 12:00 AM"; //initialinzing the end  date for timer.
document.getElementById("end-date").innerHTML = `we will come back in ${endDate}`;
const inputs =  document.querySelectorAll("input"); // selecting all the inputs .
function clock(){
    let end = new Date(endDate); //creating the variable for end date by date  function object.
    let start = new Date(); // actual date for timer from to start.
    let diff =( end- start)/1000; // convert to seconds from milliseconds
    inputs[0].value = (Math.floor(diff/86400)) //conversion form seconds to days
    inputs[1].value = (Math.floor(diff/3600)%24) //conversion from seconds to hours
    inputs[2].value = (Math.floor(diff/60)%60) //conversion from seconds to minutes
    inputs[3].value = (Math.floor(diff)%60) 
}
clock();

setInterval(()=>{
    clock();
},1000)