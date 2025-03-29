let countel=document.getElementById("count-el")
let savel=document.getElementById("save-el")
let count=0
console.log(savel)

function increment(){
        count+=1
        countel.innerText=count
}
function decrement(){
    if(count!=0){
        count-=1
        countel.innerText=count
    }
}

function save(){
    let countstr=" "+count+"-"
    savel.innerText+=countstr
    console.log(count)
     countel.innerText=0
     count=0
    //nsole.log(countstr)
}

