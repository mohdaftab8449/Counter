let value=0
document.querySelector(".incre").addEventListener("click",()=>{
    value++;
    if(value>=10)
     {
        value=10
    }
    document.querySelector("p").textContent=value
})
document.querySelector(".decre").addEventListener("click",()=>{
    value--;
    if(value<=0)
    {
        value=0
    }
    document.querySelector("p").textContent=value
})