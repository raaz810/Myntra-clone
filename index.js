alert("Welcome to our Clone !")
prompt("Which mode you want to preferred! '1' for  Black '0' for White");

if(prompt==1){
    document.querySelector("body").body.style.backgroundColor="black";
    //body.style.color="white";
}else{
    document.querySelector("body").body.style.backgroundColor="white";
    //body.style.color="black";
}


let btn=document.createElement("button");
btn.innerText="Mode";
btn.style.background="red"; 
btn.style.color="white";
document.querySelector("body").prepend(btn);



