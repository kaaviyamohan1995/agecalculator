function calc(){
    var chbv=document.getElementById("tic")
    if(chbv.checked){
        var date_ent_end=new Date()
         }
    else{
        var date_ent_end=new Date(document.getElementById("end").value)
    }
    var end_year=date_ent_end.getFullYear()
    var end_month=date_ent_end.getMonth()+1
    var end_day=date_ent_end.getDate()

    
    //day assign
    var date_ent_born=new Date(document.getElementById("born").value)
    var born_year=date_ent_born.getFullYear()
    var born_month=date_ent_born.getMonth()+1
    var born_day=date_ent_born.getDate()
    
    
    var year=0
    var month=0
    var day=0
    if( date_ent_born >  date_ent_end)
    {
        document.getElementById("result").innerHTML=""
alert("invalid")
    }else{
    if(born_month<=end_month && born_day<=end_day)
    {
        year=end_year-born_year
        month=end_month-born_month
        day=end_day-born_day
    }
    else if(born_month>end_month && born_day<=end_day)
    { 
        year=(end_year-born_year)-1
        month=(end_month+12)-born_month
        day=end_day-born_day
      
    }
    else if(born_month<=end_month && born_day>end_day)
    {
        if(born_month==end_month)
        {
            year=end_year-born_year-1
            month=11    
        }
        else{
        year=end_year-born_year
        month=end_month-born_month-1
        }
        day=(end_day+daysinborn(born_month,born_year))-born_day
    }
    else if(born_month>=end_month && born_day>end_day)
    {
        year=end_year-born_year-1
        month=end_month-born_month+11
        day=(end_day+daysinborn(born_month,born_year))-born_day
    }
document.getElementById("result").innerHTML=year+" years "+month+" Months "+day+" Days old"
}
}

function daysinborn(b_m,b_y){
    bornmonth=b_m
    bornyear=b_y
        if(bornmonth==2){
            if(bornyear%4==0){
                if(bornyear%100==0){
                    if(bornyear%400==0){
                        return 29
                    }
                    else{
                        return 28
                    }
                    
                }
                else{
                    return 29
                }
            }
            else{
                return 28
            }
        }
        else if(bornmonth==1 || bornmonth==3 || bornmonth==5  || bornmonth==7 || bornmonth==8 || bornmonth==10 ||bornmonth==12)
        {
            return 31
        }
        else{
            return 30
        }
    }


    function tick(){
        var chb=document.getElementById("tic")
        var hid=document.getElementById("end")
        if(chb.checked){
            hid.style.display="none"
        }
        else{
            hid.style.display="block"
        }
           
        }
    function clr(){
        document.getElementById("result").innerHTML=""
    }