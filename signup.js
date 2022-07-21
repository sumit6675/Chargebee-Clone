let rightbtn=document.getElementById("rightbtn")
let leftbtn=document.getElementById("leftbtn")

let imglink=["https://webstatic.chargebee.com/assets/web/509/images/signup/customers/justin-garcia-inspirecio.png",
"https://webstatic.chargebee.com/assets/web/509/images/signup/customers/dailius-wilson-getaccept.png",
"https://webstatic.chargebee.com/assets/web/509/images/signup/customers/gilles-bertaux-livestorm.png"]
let pername=["Justin Garcia","Dailius Wilson","Gilles Bertaux"]
let position=["Dir. of Technology","VP Sales & Growth","Co-founder & CEO"]
let dess=["Our org went live with Chargebee a week ago and man, I cannot say enough good things about their system and their support. Well worth the price.",
"Chargebee is a fantastic solution that really meets the needs of any SaaS business. Our revenue grew 4x in 12 months, using Chargebee.",
"Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not any situations that'll come up in the future."]
let logoimgs=["https://webstatic.chargebee.com/assets/web/509/images/signup/customers/inspirecio-logo.svg",
"https://webstatic.chargebee.com/assets/web/509/images/signup/customers/livestorm-logo.svg","https://webstatic.chargebee.com/assets/web/509/images/signup/customers/livestorm-logo.svg"]
let sentences=["CUSTOMER-CENTRIC APPROACH","BUILT FOR HYPER-GROWTH ","ONE-STEP SOLUTION"]

let personimage=document.getElementById("leftimg1")
let personname=document.getElementById("personname")
let personposition=document.getElementById("personposition")
let des=document.getElementById("des")
let logoimg=document.getElementById("logoimg")
let sentence=document.getElementById("sentence")
let count=0

rightbtn.addEventListener("click",function(){
  count++
  if(count===dess.length){
      count=0;
  }
  personimage.src=imglink[count]
  personname.innerText=pername[count]
  personposition.innerText=position[count]
  des.innerText=dess[count]
  logoimg.src=logoimgs[count]
  sentence.innerText=sentences[count]
})
leftbtn.addEventListener("click",function(){
  count--
  if(count<0){
      count=dess.length-1;
  }
  personimage.src=imglink[count]
  personname.innerText=pername[count]
  personposition.innerText=position[count]
  des.innerText=dess[count]
  logoimg.src=logoimgs[count]
  sentence.innerText=sentences[count]
})
document.getElementById("logo").addEventListener("click",function(){
  window.location.href="homepage.html"
})

let signupls=JSON.parse(localStorage.getItem("signup"))||[]
let form=document.querySelector("form")
form.addEventListener("submit",function(e){
e.preventDefault()
let signupObj={
  email:form.email.value,
  phone:form.number.value,
}
// console.log(signupObj)
signupls.push(signupObj)
localStorage.setItem("signup",JSON.stringify(signupls))
})