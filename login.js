// step-1: add  click event  handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function(){
    console.log("Submit Button clicked")
    // step-2: get the email address  inside the email input filed
//    alwyas rimember to use. value get to text form and input field
    const emailFeild =document.getElementById("user-email")
    const email =emailFeild.value
//    step-3:get pasword
// 3.a:set id on the html element
// 3.b:get the element
// 3.c:get the value form the value
 const paswordField =document.getElementById("user-pasword");
 const pasword =paswordField.value;

//  DANGER:DO NOT VERIFY email pasword on the clinte side
// step-4 verify emaail and pasword and check wether valis user not

if(email === 'saiful@email.com' && pasword === 'mohona'){
    window.location.href="bank.html"
}
else{
    alert("Tui potarna korcha..! Tui Mar dol theke bad Riat")
}
})
    
