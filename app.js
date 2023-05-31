const fullName  = document.getElementById("username");
const emailID = document.getElementById("email-id");
const logOutBtn = document.getElementById("logout-btn");


const signupLink = document.getElementById("signup-link");
const profileLink = document.getElementById("profile-link");

if(localStorage.getItem('user')){
    const user = JSON.parse(localStorage.getItem("user"));
    fullName.innerHTML = user.username ;
    emailID.innerHTML = user.email ;
}

logOutBtn.addEventListener("click",()=>{
    localStorage.clear();
    const link = document.createElement("a");
    link.href = "./index.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
})

profileLink.addEventListener("click",()=>{
    if(localStorage.getItem("user")){
        alert("sorry ur already in profile page");
    } else{
        profileLink.href = './index.html';
    }
});
signupLink.addEventListener("click",()=>{
    if(localStorage.getItem("user")){
        alert("u r already in sign in ");
    }else{
        signupLink.href = "./index.html";
    }
});