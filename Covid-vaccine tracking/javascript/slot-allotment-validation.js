// slot allotment validation
var formSlot = document.getElementById("slot-allotment");
var  username=document.getElementById("username");
var aadhar    =  document.getElementById("aadhar-number");
var dob    =  document.getElementById("dob");
var locations    =  document.getElementById("location");
var timeSlot= document.getElementById("time-slot");


formSlot.addEventListener("submit",  slotValidation=>{
    var success=0;
    slotValidation.preventDefault();

    checkInputSlot();

    function checkInputSlot(){

        if(username.value === '') {
            setErrorFor(username, 'Username cannot be blank');
        }
         else {
            setSuccessFor(username);
            success++;
        }

        // mobile start
        if(aadhar.value==null){
            setErrorFor(aadhar,'Please Enter the aadhar number');
        }
        else
        if(aadhar.value.length !==12){
            setErrorFor(aadhar,'Please enter the number 12 digit');
        }else
         if(aadhar.value.length === 12){
            setSuccessFor(aadhar);
            success++;
        }
        // mobile ends

        // date of birth 

        console.log(dob.value);
        var dobValue=dob.value;
        var strdobValue=dobValue.split("-");
        console.log(strdobValue+"length is"+strdobValue.length);
        console.log("value"+strdobValue[0]);
        if(strdobValue ==null){
            setErrorFor(dob,"Please Enter the  date");
            
        }else if(strdobValue !==null  && strdobValue[0]<2010){
            setErrorFor(dob,"Please Enter date  ");
        }else{
            console.log("Date contains");
            setSuccessFor(dob);
            success++;
        }
        // date of birth
        // location start 
        if(locations.value.length==0){
            setErrorFor(locations,'Dont leave the location box empty')
        }else
        if(locations.value.length>10){
            setErrorFor(locations,'Please enter the character less than 20')
        }else{
            setSuccessFor(locations);
            success++;
        }

        // location ends
        //time slot starts
            var strTimeSlot=timeSlot.options[timeSlot.selectedIndex];
            console.log("time slots"+strTimeSlot.value);
            if(strTimeSlot.value == ""){
                setErrorFor(timeSlot,"Please Allot the time slot");
            }else{
                setSuccessFor(timeSlot);
                success++;
            }
        // time slot ends



    }// check input end


});



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
    
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
