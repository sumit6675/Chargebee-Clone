
    let imagelink = ["https://webstatic.chargebee.com/assets/web/508/images/home/coc/customers/jose-bolanos.webp",
    "https://webstatic.chargebee.com/assets/web/508/images/home/coc/customers/paul-kapsner.webp",
    "https://webstatic.chargebee.com/assets/web/508/images/home/coc/customers/rahul-gandhi.webp",
    "https://webstatic.chargebee.com/assets/web/508/images/home/coc/customers/antoine-louiset.webp",
    "https://webstatic.chargebee.com/assets/web/508/images/home/coc/customers/debbie-barrafato.webp"]

let name = ["José Bolaños<br>CTO - Slidebean",
    "Paul Kapsner <br> Director Finance",
    "Rahul Gandhi<br>CEO - MakeSpace",
    "Antoine Louiset<br>CTO - Yousign",
    "Debbie Barrafato <br>CFO - Rise Vision"]

let des = ["The subscription management platform that enabled Slidebean to slide into 30+ countries.",
    "The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.",
    "The revenue engine that powered MakeSpace to launch a B2B model overnight.",
    "The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR.",
    "The infrastructure that allows Rise Vision to ask What Does This Make Possible?"
]

let leftbtn = document.getElementById("leftarrow")
let rightbtn = document.getElementById("rightarrow")
let dis = document.getElementById("des")
let image = document.getElementById("img")
let staffname = document.getElementById("name")

let imgcount = 0
rightbtn.addEventListener("click", function () {
    imgcount++
    if (imgcount === imagelink.length) {
        imgcount = 0
    }
    image.src = imagelink[imgcount]
    dis.innerHTML = des[imgcount]
    staffname.innerHTML = name[imgcount]
})
leftbtn.addEventListener("click", function () {
    imgcount--
    if (imgcount < 0) {
        imgcount = imagelink.length - 1
    }
    image.src = imagelink[imgcount]
    dis.innerHTML = des[imgcount]
    staffname.innerHTML = name[imgcount]
})