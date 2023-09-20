const body = document.querySelector("body");
const pre = document.querySelector("#pre");
const next = document.querySelector("#next");
const leftClr_code = document.querySelector(".leftClr_code");
const rightClr_code = document.querySelector(".rightClr_code");
const rightClr = document.querySelector(".rightClr");
const leftClr = document.querySelector(".leftClr");
const characters = "0123456789ABCDEF";
const colorCode = document.querySelector("#colorCode");

let color;
const randomColor =()=>{
    color = "#";
    for(let i=0; i<6; i++){
        color += characters[Math.floor(Math.random()*characters.length)]
    }
    console.log(color);
    return color;
}
randomColor();


let color1;
const randomColor1 =()=>{
    color1 = "#";
    for(let i=0; i<6; i++){
        color1 += characters[Math.floor(Math.random()*characters.length)]
        
    }
    console.log(color1);
    return color1;
}
randomColor1();
body.style.background=`linear-gradient(to right, ${color},${color1})`
leftClr_code.innerHTML=color
rightClr_code.innerHTML=color1
leftClr.style.backgroundColor=color
rightClr.style.backgroundColor=color1
colorCode.innerHTML=`background: linear-gradient(to right, ${color},${color1}); ` 


next.addEventListener("click",()=>{
    randomColor();
    randomColor1();
    body.style.background=`linear-gradient(to right, ${color},${color1})`
    leftClr_code.innerHTML=color
    rightClr_code.innerHTML=color1
    leftClr.style.backgroundColor=color
    rightClr.style.backgroundColor=color1
    colorCode.innerHTML=`background: linear-gradient(to right, ${color},${color1}); ` 
    
})
pre.addEventListener("click",()=>{
    randomColor();
    randomColor1();
    body.style.background=`linear-gradient(to right, ${color},${color1})`
    leftClr_code.innerHTML=color
    rightClr_code.innerHTML=color1
    leftClr.style.backgroundColor=color
    rightClr.style.backgroundColor=color1
    colorCode.innerHTML=`background: linear-gradient(to right, ${color},${color1}); ` 

})

