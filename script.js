var showPassword=document.getElementById("password");
document.getElementById("openPassword").addEventListener("click",()=>{
    if(showPassword.type==="password"){
var valu=showPassword.value;
showPassword.type="text";
}else{
   showPassword.type="password";
}
})
