
var user=document.getElementById('username');
var pass=document.getElementById("password");
var check=document.getElementById("check-box");
var submit=document.getElementById('login-btn');
var count=0;
var match=0;

var form1=document.getElementById("form");
form1.addEventListener(("submit"),funct=>{
    funct.preventDefault();
    
    validateUser();
    validatePass();
    checkhardcode();
    validateUser();
    validatePass();

   console.log("match value "+match);
    if( match === 2){
        console.log("match value "+match);
      window.location.href="../html/main.html";

    }
    match =0;

});
function checkhardcode(){
    var Huser="thamizh";
    var Hpass="123Pass!";
    console.log("user"+user.value+" "+"Huser"+Huser);
    if(pass.value == "123Pass!"){
        match++;

    }
    if(pass.value ==""){
        setErrorFor(pass,'you cant leave empty!');

    }
    else{
        setErrorFor(pass,'Enter the correct password!');
    }

    if(user.value == Huser){
        match++;
    }
    else
    {
        setErrorFor(user,'Enter the correct username!');
    }
    
    if(user.value == ""){
        setErrorFor(user,'please dont leave empty!');

    }
}

function validateUser(){
    if(user.value==''){
        setErrorForlogin(user, 'Username cannot be blank');  // calling function by parameter

    }else if(user.value.length >20){
        setErrorForlogin(user, 'Username must not be greater than 20 char');  // calling function by parameter
    }   
    else     if(user.value.length<5){
        setErrorForlogin(user,"Username must not be lesser than 5 char");
    } else{
        setErrorForlogin(user,"");
        setSuccessForlogin(user); 
        count++;
       // return true;
    }
}   
function validatePass(){
    const passValue=pass.value;
  //  console.log(passValue);
    if(passValue==''){
        setErrorForlogin(pass,'Password cannot be empty');
    }
    else if(!passValue.match(/[a-z]/g)){
        setErrorForlogin(pass,'Enter atleast 1 small letter');
    }else if(!passValue.match(/[A-Z]/g)){
        setErrorForlogin(pass,'Enter atleast 1 capital letter');
    }
    else if(!passValue.match(/[0-9]/g)){
        setErrorForlogin(pass,'Enter atleast 1 Number ');
    }
     else if(!passValue.match(/[#?!@$%^&*-]/g)){
         setErrorForlogin(pass,'Enter atleast 1 Special character');
     }
    else if(!passValue.length>=8){
        setErrorFor(pass,'password should be greater than 8 character');
    }
     else{
        setSuccessForlogin(pass,"");
        count++;
        return true;
    }
    console.log(count);
}
function setErrorForlogin(input,message){                         // input=firstname, message=username canntt be black
    const formControl = input.parentElement;                 // targetting div  element
  //  console.log(input.value+input.parentElement.nodeName);
    formControl.className='form- errorMsg error ';

    const small = formControl.querySelector('small');
    small.innerText=message;
}
function setSuccessForlogin(input){
    const formControl = input.parentElement;
   // console.log(input.parentElement);
    formControl.className='form- success';
}
//--------------------------------------login validation eends ---------------------------------------------------
//******/
// ------------------------------------ user registeration form validation ---------------------------------------------------

var form        =   document.getElementById('form-second');
var username    =   document.getElementById('fname');
var gender      =   document.getElementsByName('gender');
var address     =   document.getElementById('address');
var phone       =   document.getElementById('phone');
var aadhar      =   document.getElementById('aadhar');
var dob         =   document.getElementById('date-of-reg');
var dateOfBirth =   document.getElementById('date-of-birth');
var existing    =   document.getElementById('existing-disease');
var willing     =   document.getElementById('willing');


// const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    var success=0;      // outer function    variable  declared
   
    e.preventDefault();
    
	

    checkInputs();
    function checkInputs() {                  // inner function access closure scope of outer function
        // trim to remove the whitespaces
        const usernameValue = username.value.trim();
        console.dir(success);
        var addressValue = address.value.trim();
        if(gender[0].checked == false && gender[1].checked == false){
            document.getElementById('check-gender').style.visibility='visible';
           // alert("false");
            console.log('gender value'+gender);
        }else
        {
            document.getElementById('check-gender').style.visibility='hidden';
            success++;
          //  alert("true");
        }   
        
        
        if(usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
        }
         else {
            setSuccessFor(username);
            success++;
        }
    
        
    
        if(addressValue === ''){
            setErrorFor(address, 'Country cannot be blank');  // calling function by parameter
        }else
        if(addressValue.length>20){
            setErrorFor(address,"lastname must not be greater than 20 char");
        }
        else if(addressValue.length){
            setSuccessFor(address); 
            success++;
        }
    
                   // moble validation start
                   if(phone.value==null){
                    setErrorFor(phone,'dont leave the box empty');
                }
                else
                if(phone.value.length !==10){
                    setErrorFor(phone,'Please enter the number 10 digit');
                }else
                 if(phone.value.length === 10){
                    setSuccessFor(phone);
                    success++;
                }
                   // moble validation ends
                   // aadhar validation sstar
                   if(aadhar.value==null){
                    setErrorFor(aadhar,'dont leave the box empty');
                }
                else
                if(aadhar.value.length !==12){
                    setErrorFor(aadhar,'Please enter the 11 digit');
                }else
                 if(aadhar.value.length === 12){
                    setSuccessFor(aadhar);
                    success++;
                }
    
                  // aadhar validation ends
                  //dob validation ends
                  var strdobValue=dob.value.split("-");
                  console.log(strdobValue+"length is"+strdobValue.length);
                  console.log("value"+strdobValue[0]);
                  if(strdobValue ==""){
                      setErrorFor(dob,"Please Enter the  date");
                      
                  }else if(strdobValue !==null  && strdobValue[0]<2010){
                      setErrorFor(dob,"Please Enter date . ");
                  }else 
                  {
                      console.log("Date contains");
                      setSuccessFor(dob);
                      success++;
                  }
                  // dob validation
    
                  var dobReg=dateOfBirth.value.split("-");
                  console.log(dobReg+"length is"+dobReg.length);
                  console.log("value"+dobReg[0]);
                  if(dobReg ==""){
                      setErrorFor(dateOfBirth,"Please Enter the  date");
                      
                  }else if(dobReg !==null  && dobReg[0]<2010){
                      setErrorFor(dateOfBirth,"Please Enter date . ");
                  }else 
                  {
                      console.log("Date contains");
                      setSuccessFor(dateOfBirth);
                      success++;
                  }
    
                  // existing disease 
                  if(existing.value=== ''){
                    setErrorFor(existing, 'Country cannot be blank');  // calling function by parameter
                }else
                if(existing.value.length>20){
                    setErrorFor(existing,"disease must not be greater than 20 char");
                }else if(existing.value.length<4){
                    setErrorFor(existing,"disease must not be lesser than 3 char");
    
                }
                else if(existing.value.length){
                    setSuccessFor(existing); 
                    success++;
                }
                  // existing disease ends
                  //willing vlidation 
    
                  var willingValue=willing.getElementsByTagName('INPUT');
                  console.log(willing.value);
                    if(willing.checked == false){
                        document.getElementById('check-hobbie').style.visibility='visible';
                    } else if(willing.checked) {
                        console.log("success willing");
                        document.getElementById('check-hobbie').style.visibility='hidden';
                        success++;
                       
                    }
                    console.log("willin : "+willingValue);
 
                  // willing validation ends
  

    }
    checkAllValidated();
    function checkAllValidated(){

        console.log("success value"+success);
        console.dir(checkAllValidated); // closure scope

        if(success == 9){
            alert("your data is submitted successfully");
        }

        success=0;
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


	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }
