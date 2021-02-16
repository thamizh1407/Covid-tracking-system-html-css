var formHealth = document.getElementById("healthForm");

var locationHealth = document.getElementById("healthLocation");
var healthDate  = document.getElementById("healthDate");
var timeSlotHealth   =document.getElementById("healthTime");


formHealth.addEventListener("submit" ,healthCare=>{

    healthCare.preventDefault();
    checkInputHealth();
    function checkInputHealth(){
        //  location start and end
        if(locationHealth.value === '') {
            setErrorFor(locationHealth, 'Username cannot be blank');
        }
         else {
            setSuccessFor(locationHealth);
            success++;
        }

        // location ends

        // date start
        var dobValue=healthDate.value;
        var strdobValue=dobValue.split("-");
        console.log(strdobValue+"length is"+strdobValue.length);
        console.log("value"+strdobValue[0]);
        if(strdobValue ==null){
            setErrorFor(healthDate,"Please Enter the  date");
            
        }else if(strdobValue !==null  && strdobValue[0]<2010){
            setErrorFor(healthDate,"Please Enter date  ");
        }else{
            console.log("Date contains");
            setSuccessFor(healthDate);
            success++;
        }
        // date ends

        // tiemslot is
        var strTimeSlothealth=timeSlotHealth.options[timeSlotHealth.selectedIndex];
        console.log("time slots"+strTimeSlothealth.value);
        if(strTimeSlothealth.value == ""){
            setErrorFor(timeSlotHealth,"Please Allot the time slot");
        }else{
            setSuccessFor(timeSlotHealth);
            success++;
        }
        // timesot ends




    }

});
