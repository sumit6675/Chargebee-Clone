let signupls=JSON.parse(localStorage.getItem("signup"))||[]
let form=document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    let loginobj={
       email:form.email.value,
       pass:form.pass.value
    }
 signupls.forEach(function(e){
    if(e.email===loginobj.email && loginobj.pass==="1257"){
        alert("Sign in success!)
        window.location.href="homepage.html"
    }else{
        alert("Wrong Details! or please Signup first!")
    }
    
 })   
})