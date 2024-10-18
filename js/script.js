let myTitle = document.getElementById("myTitle");
let myTitleTxt = myTitle.innerHTML;
let typeArr = myTitleTxt.split("");
myTitle.innerHTML = "";

let count = 0;

function typeJs(){
    if(count < myTitleTxt.length){
        myTitle.innerHTML += myTitleTxt.charAt(count);
        count++;
        typeArr = myTitleTxt.split("");
    }else{
        typeArr.pop();
        myTitle.innerHTML = typeArr.join("");
        if(typeArr.length == 0){
            count = 0;
        }
    }
}
setTimeout(()=>{
    setInterval(()=>{
        typeJs();
    }, 400)
}, 9000)


let cross = document.getElementById("cross")
let floatMessage = document.getElementById("floatmessage")
let liveChat = document.getElementById("message")
let userName = document.getElementById("userName")
let userMail = document.getElementById("userMail")
let sendBtn = document.getElementById("sendBtn")
let floatText = document.getElementById("floatText")
cross.addEventListener("click",()=>{
    if(floatMessage.style.display = "flex"){
        floatMessage.style.display = "none"
    }else{
        floatMessage.style.display = "none"
    }
})
liveChat.addEventListener("click",()=>{
    if(floatMessage.style.display == "flex"){
        floatMessage.style.display = "none"
    }else{
        floatMessage.style.display = "flex"
    }
})
sendBtn.addEventListener("click",()=>{
    if(userName.value == ""){
        userName.style.backgroundColor = "red"
    } else if(userMail.value == ""){
        userMail.style.backgroundColor = "red"
    }else if(floatText.value == ""){
        floatText.style.backgroundColor = "red"
    }else{
        alert("We are successfuly get your messages! Thank you.")
        floatMessage.style.display = "none"
        userName.value = ""
        userMail.value = ""
        floatText.value = ""

    }
})
userName.addEventListener("click",()=>{
    userName.style.backgroundColor = "white"
})
userMail.addEventListener("click",()=>{
    userMail.style.backgroundColor = "white"
})
floatText.addEventListener("click",()=>{
    floatText.style.backgroundColor = "white"
})



let flow = document.querySelector(".flow")
let countflow = 0;
setInterval(()=>{
    countflow   ++
    if(countflow == 9){
        flow.style.display = "none"
    }
}, 1000)
let viewCount = document.querySelector('#countFlowNumber')
let viewNumber = 1
setInterval(()=>{
    if(viewNumber < 10){
        viewNumber++
    }
    viewCount.innerHTML = viewNumber * 10 + "%"  
},800)








































































































































































































































































































































































































































































































let click = document.getElementById("aut")
click.addEventListener("click",()=>{
    alert("This is Paros Rangsha Document")
})