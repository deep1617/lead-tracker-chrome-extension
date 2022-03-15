let inputbtn=document.getElementById("save-btn")
console.log("hello world")


let myleads = []




const inputEL= document.getElementById("input-el")
const savebtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")

let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))

const deleteBtn = document.getElementById("delete-btn")

const tabbtn =  document.getElementById("tab-btn")

// console.log(leadsfromlocalstorage)
// localStorage.clear()

if(leadsfromlocalstorage){
    myleads = leadsfromlocalstorage;
    render()
}

tabbtn.addEventListener("click", function(){    
    console.log("hello")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        // JSON.parse("myleads")
        render()
    })
})
inputbtn.addEventListener("click",function(){
    console.log(2+2)
    console.log("the button was clicked from event listener")
    // let lead = " www.awsomelead.com"
    
    if(inputEL.value===""){

    }
    else {
        myleads.push(inputEL.value)
    }
    
    inputEL.value="" 
    localStorage.setItem("myleads",JSON.stringify(myleads))



   render()
    console.log(localStorage.getItem("myleads"))
})

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    myleads=[]
    render()
})
function render(){
    listitems = ""
    for(let i=0;i<myleads.length;i+=1){
        // listitems+= "<li><a target='_blank' href='" + myleads[i]+ "'>"+  myleads[i] + "</a></li>"

        // one more way of doing above line
        listitems+= `<li>
            <a target='_blank' href='${myleads[i]}'>${myleads[i]}
            </a>
            </li>`
        
    }
    ulEl.innerHTML=listitems
}



