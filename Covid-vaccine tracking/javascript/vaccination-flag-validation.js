var formFlag = document.getElementById("flag-vaccination");

var usernameFlag=document.getElementById("usernameFlag");
var aadharFlag=document.getElementById("aadhar-number-flag");
var dobFlag=document.getElementById("dobFlag");
var ifVaccinated=document.getElementsByName("vaccinated");




formFlag.addEventListener("submit" ,formflagging=>{
    var success=0;
    formflagging.preventDefault();

    checkInputFlag();

    function checkInputFlag(){
      //  alert("d"+usernameFlag.value);
        if(usernameFlag.value === '') {
            setErrorFor(usernameFlag, 'Username cannot be blank');
        }
         else {
            setSuccessFor(usernameFlag);
            success++;
        }

        //-------------
        if(aadharFlag.value==null){
            setErrorFor(aadharFlag,'Please Enter the aadhar number');
        }
        else
        if(aadharFlag.value.length !==12){
            setErrorFor(aadharFlag,'Please enter the number 12 digit');
        }else
         if(aadharFlag.value.length === 12){
            setSuccessFor(aadharFlag);
            success++;
        }
        //---------------aadharends--------------
        //--------------flag start-----------------
        var dobValue=dobFlag.value;
        var strdobValue=dobValue.split("-");
        console.log(strdobValue+"length is"+strdobValue.length);
        console.log("value"+strdobValue[0]);
        if(strdobValue ==null){
            setErrorFor(dobFlag,"Please Enter the  date");
            
        }else if(strdobValue !==null  && strdobValue[0]<2010){
            setErrorFor(dobFlag,"Please Enter date  ");
        }else{
            console.log("Date contains");
            setSuccessFor(dobFlag);
            success++;
        }
        //--------------flag ends------------------

        // check  box
        
        if(ifVaccinated[0].checked == false && ifVaccinated[1].checked == false){
            document.getElementById('check-vaccine').style.visibility='visible';
           // alert("false");
            console.log('gender value'+ifVaccinated);
        }else
        {
            document.getElementById('check-vaccine').style.visibility='hidden';
            success++;
          //  alert("true");
        }   
        // check box











    }
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
