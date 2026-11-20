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
    let add=(sl+1000)
    let ovr=hour*200
    
    
    document.getElementById("display").innerHTML =("Employe Name :")+name
    document.getElementById("displaya").innerHTML =("Employe ID :")+eid
    document.getElementById("displaye").innerHTML =("Employe Department :")+de
    document.getElementById("displayd").innerHTML =("Basic Monthly salary :")+sl
    document.getElementById("su").innerHTML =("working Days :")+wday
    document.getElementById("sul").innerHTML =("present Days :")+pday
    document.getElementById("sui").innerHTML =("Overtime Hours :")+hour
    document.getElementById("abs").innerHTML =("Absent Days :")+abse
    document.getElementById("at").innerHTML =("Attendance Percentage :"+atte+"%")
    document.getElementById("ovr").innerHTML =("over time pyment :"+ovr)
    let netSalary = sl-ded;

    function check(att){

document.getElementById("ifa").innerHTML = "";
document.getElementById("ifaa").innerHTML = "";

        if(att==100){
            document.getElementById("bn").innerHTML =("Bonus :"+sl+"+₹1000 ="+add)
        }

        if(att >= 95){ 
            document.getElementById("ar").innerHTML =("Excellent")
        }else if(att >= 85 && att <= 94){
            document.getElementById("ar").innerHTML =("Good")
        }else if(att >= 75 && att <= 84){
            document.getElementById("ar").innerHTML =("Average")
        }else {
            document.getElementById("ar").innerHTML =("Poor")
            console.log("workigm")
            document.getElementById("ifa").innerHTML =("Attentens 75% below deduct an additional 5% of basic salary")
            document.getElementById("ifaa").innerHTML =("Basic Monthly salary :")+sl+"-5% ="+netSalary     
        }
        
    }

    check(atte)

    document.getElementById("perd").innerHTML =("Per-day salary :")+perday
    document.getElementById("ats").innerHTML =("Attendance salary :")+perday*pday

    let top=30-abse

    var table = document.getElementById("table");
    var row=table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
  
    let Total=

    cell1.innerHTML = (table.rows.length )
    cell2.innerHTML = name;
    cell3.innerHTML = eid;
    cell4.innerHTML = de;
    cell5.innerHTML = sl;
    cell6.innerHTML = wday;
    cell7.innerHTML = pday;
    cell8.innerHTML = hour;
    cell9.innerHTML = top;
    cell10.innerHTML = abse;
    cell11.innerHTML = ;

    

    document.getElementById("tli").innerHTML =("Total Employees :"+table.rows.length )
    
    
    

})

