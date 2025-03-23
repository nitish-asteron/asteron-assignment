let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    inp.value="";
    ul.appendChild(item);
    let del=document.createElement("i");
    // del.innerText="Delete";
    item.appendChild(del);
    del.classList.add("fa-solid");
    del.classList.add("fa-trash-can");
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "I"){
        let delItem=event.target.parentElement;
        delItem.remove();
    }
    // console.log(event.target.nodeName);
});
