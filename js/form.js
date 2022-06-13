// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }
function validateForm()
{
let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let Address1= document.getElementById("Address1");
let Address2= document.getElementById("Address2");
let city= document.getElementById("city");
let state= document.getElementById("state");
let Postal = document.getElementById("Postal");
let phonenumber = document.getElementById("phonenumber");
let email = document.getElementById("email");
let Feedback = document.getElementById("Feedback");
let suggesions = document.getElementById("suggesions");
let vehicle1 = document.getElementById("vehicle1");
let gender = document.getElementById("gender");

    // var email = document.contactForm.email.value;
    // var mobile = document.contactForm.mobile.value;
if(fname.value==""){
  let text;
  text= 'please enter first name'
  document.getElementById("OP1").innerHTML = text;
}
if(lname.value==""){
  let text;
  text= 'please enter last name'
  document.getElementById("OP2").innerHTML = text;
}
if(Address1.value==""){
  let text;
  text= 'enter address1'
  document.getElementById("OP3").innerHTML = text;
}
if(Address2.value==""){
  let text;
  text= 'enter address2'
  document.getElementById("OP4").innerHTML = text;
}
if(city.value==""){
  let text;
  text= 'enter city'
  document.getElementById("OP5").innerHTML = text;
}
if(state.value==""){
  let text;
  text= 'enter state'
  document.getElementById("OP6").innerHTML = text;
}

if(Postal.value==""){
  let text;
  text= 'enter  pincode'
  document.getElementById("OP7").innerHTML = text;
}
if(email.value==""){
  let text;
  text= 'enter email id'
  document.getElementById("OP8").innerHTML = text;
}
if(Feedback.value==""){
  let text;
  text= 'enter feed back'
  document.getElementById("OP9").innerHTML = text;
}
if(suggesions.value==""){
  let text;
  text= 'enter suggesions'
  document.getElementById("OP10").innerHTML = text;
}
if(vehicle1.value==""){
  let text;
  text= 'select '
  document.getElementById("OP11").innerHTML = text;
}
if(gender.value==""){
  let text;
  text= 'choose option'
  document.getElementById("OP12").innerHTML = text;
}

function printerror(elementid ,hintmsg){
  document.getElementById(elementid).innerHTML= hintmsg;
}
let pattern= "\(([0-9]{3})\)?[-, ]?([0-9]{4})[-, ]?([0-9]{3})$"
if(!phonenumber.value.match(pattern)){
  let text;
  text= 'enter  phone number'
  document.getElementById("OP13").innerHTML = text;
}


}
