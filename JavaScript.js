const blur0=document.getElementById("Rock")
const blur1=document.getElementById("Paper")
const blur2=document.getElementById("Scissor")
let win=document.getElementById("win")
let btn=document.querySelector("Button")
let result=0;
let Picked=11;
let uscore=0;
let cscore=0;
let Uscore=document.getElementById("Uscore")
let Cscore=document.getElementById("Cscore")
blur0.addEventListener("mouseover",()=>{
    blur1.style.filter='blur(2px)'
    blur2.style.filter='blur(2px)'
    blur0.style.filter='blur(0)'
})
blur1.addEventListener("mouseover",()=>{
    blur0.style.filter='blur(2px)'
    blur2.style.filter='blur(2px)'
    blur1.style.filter='blur(0)'
    
})
blur2.addEventListener("mouseover",()=>{
    blur1.style.filter='blur(2px)'
    blur0.style.filter='blur(2px)'
    blur2.style.filter='blur(0)' 
})

const Choices=document.getElementsByClassName("conti")
Choices[0].addEventListener("click",()=>{
    Picked=0
    console.log("Theek hai")
    blur1.style.opacity="50%"
    blur2.style.opacity="50%"
})
Choices[1]
.addEventListener("click",()=>{
    Picked=1
    console.log("Theek hai")
    blur0.style.opacity="50%"
    blur2.style.opacity="50%"

})
Choices[2]
.addEventListener("click",()=>{
    Picked=2
    console.log("Theek hai")
    blur0.style.opacity="50%"
    blur1.style.opacity="50%"
})
btn.addEventListener("click",()=>{
    if(Picked!=11){
        console.log(Picked)
        result=Math.floor(Math.random()*3);
        console.log(result)
        if (result===Picked){
            console.log("Game Draw ")
            btn.innerText="Game Draw "
            btn.style.backgroundColor="White"

            
        }
        else{
            let GAMEWINNER=true;
            if ( Picked==0){
                GAMEWINNER=result==1?false:true;
                
            }
            else if(Picked=1){
                GAMEWINNER=result==2?false:true;
            }
            else{
                GAMEWINNER=result==0?false:true;
            }
            if (GAMEWINNER==true){
                console.log("Won!!!")
                
                btn.innerText="Won!!!!!"
                btn.style.backgroundColor="Lime"
                uscore++
                Uscore.innerText=uscore
                
            }
            else{                
                console.log("Lost!!!!")
                btn.innerText="Lost!!!!"
                btn.style.backgroundColor="red"
                cscore++
                Cscore.innerText=cscore
               
            }              

            }
            blur0.style.filter='blur(0)'
            blur0.style.opacity="100%"
            blur2.style.opacity="100%"
            blur1.style.opacity="100%"
            blur1.style.filter='blur(0)'
            blur2.style.filter='blur(0)'
        }
})



