var mal = document.getElementById("mal");
let currvalue=0;
let malcount=0;
let counter = document.getElementById("counter");

mal.addEventListener("click",()=>{ 
    for(let i=0;i>=0;i++)
    {
    if(currvalue<108){
   counter.textContent=currvalue;
   console.log("sss");
   }currvalue++;
}
})
