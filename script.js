document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()
    let name=document.getElementById("name").value
    let eid=document.getElementById("eid").value
    let de=document.getElementById("dpart").value
    let sl=Number(document.getElementById("salary").value) 
    let wday=Number(document.getElementById("wday").value) 
    let pday=Number(document.getElementById("pday").value) 
    let hour=document.getElementById("hours").value

    let abse=wday-pday
    let atte=(pday/wday)*100
    let perday=(sl/wday)
    let ded=(5/100)*sl
    
    
    document.getElementById("display").innerHTML =("Employe Name :")+name
    document.getElementById("displaya").innerHTML =("Employe ID :")+eid
    document.getElementById("displaye").innerHTML =("Employe Department :")+de
    document.getElementById("displayd").innerHTML =("Basic Monthly salary :")+sl
    document.getElementById("su").innerHTML =("working Days :")+wday
    document.getElementById("sul").innerHTML =("present Days :")+pday
    document.getElementById("sui").innerHTML =("Overtime Hours :")+hour
    document.getElementById("abs").innerHTML =("Absent Days :")+abse
    document.getElementById("at").innerHTML =("Attendance Percentage :"+atte+"%")
    let netSalary = sl-ded;
    function check(att){
        if(att>=95){ 
            document.getElementById("ar").innerHTML =("Excellent")
        }else if(att>=85&&att<=94){
            document.getElementById("ar").innerHTML =("Good")
        }else if(att>=75&&att<=84){
            document.getElementById("ar").innerHTML =("Average")
        }else{
            document.getElementById("ar").innerHTML =("Poor")
        }
        
    }
    check(atte)

    document.getElementById("perd").innerHTML =perday
    document.getElementById("ats").innerHTML =perday*pday
    
    if(atte<75){
    document.getElementById("ifa").innerHTML =("Attentens 75% below deduct an additional 5% of basic salary")
    document.getElementById("displayd").innerHTML =("Basic Monthly salary :")+sl+"-5% ="+netSalary       
    }


})