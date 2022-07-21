const curr1 = document.querySelector('#curr1');
const curr2 = document.querySelector('#curr2');
const curr3 = document.querySelector('#curr3');
const price1 = document.querySelector('#price1');
const rev1 = document.querySelector('#rev1');
const price2 = document.querySelector('#price2');
const rev2 = document.querySelector('#rev2');
const price3 = document.querySelector('#price3');
const rev3 = document.querySelector('#rev3');

let usd = document.querySelector('#usd')
usd.addEventListener("click",function(e){
    e.preventDefault()
    curr1.innerHTML="USD"
    curr2.innerHTML="USD"
    curr3.innerHTML="USD"
    price2.innerHTML="249"
    price3.innerHTML="549"
    rev1.innerHTML="USD 100k"
    rev2.innerHTML="USD 600K"
    rev3.innerHTML="USD 1.2M"
    
     
})

let EUR = document.querySelector('#EUR')
EUR.addEventListener("click",function(e){
    e.preventDefault()
    curr1.innerHTML="EUR"
    curr2.innerHTML="EUR"
    curr3.innerHTML="EUR"
    price2.innerHTML="249"
    price3.innerHTML="549"
    rev1.innerHTML="EUR 100k"
    rev2.innerHTML="EUR 600K"
    rev3.innerHTML="EUR 1.2M"

     
})

let GBP = document.querySelector('#GBP')
GBP.addEventListener("click",function(e){
    e.preventDefault()
    curr1.innerHTML="GBP"
    curr2.innerHTML="GBP"
    curr3.innerHTML="GBP"
    price2.innerHTML="199"
    price3.innerHTML="379"
    rev1.innerHTML="GBP 80k "
    rev2.innerHTML="GBP 480K"
    rev3.innerHTML="GBP 960K"

     
})

let AUD = document.querySelector('#AUD')
AUD.addEventListener("click",function(e){
    e.preventDefault()
    curr1.innerHTML="AUD"
    curr2.innerHTML="AUD"
    curr3.innerHTML="AUD"
    price2.innerHTML="359"
    price3.innerHTML="729"
    rev1.innerHTML="AUD 140k  "
    rev2.innerHTML="AUD 840K"
    rev3.innerHTML="AUD 1.56M"
 
})

let CAD = document.querySelector('#CAD')
CAD.addEventListener("click",function(e){
    e.preventDefault()
    curr1.innerHTML="CAD"
    curr2.innerHTML="CAD"
    curr3.innerHTML="CAD"
    price2.innerHTML="329"
    price3.innerHTML="599"
    rev1.innerHTML="CAD 130k   "
    rev2.innerHTML="CAD 720K"
    rev3.innerHTML="CAD 1.56M"
 
})

let INR = document.querySelector('#INR')
INR.addEventListener("click",function(e){
    e.preventDefault()
    curr1.innerHTML="INR"
    curr2.innerHTML="INR"
    curr3.innerHTML="INR"
    price2.innerHTML="19,915"
    price3.innerHTML="43,915"
    rev1.innerHTML="INR 80L   "
    rev2.innerHTML="INR 4.8 Crores"
    rev3.innerHTML="INR 9.6 Crores"
 
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

