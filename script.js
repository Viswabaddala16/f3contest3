
const signupLink = document.getElementById("signup-link");
const profileLink = document.getElementById("profile-link");
const userName = document.getElementById("username");
const email = document.getElementById("email-id");
const password = document.getElementById("password");
const password2 = document.getElementById("password-2");
const signupBtn = document.getElementById("signup-btn");

const errorText = document.getElementById("error-text");
const sucessText = document.getElementById("success-text");

function generateToken(){
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*?";
  let ch = "";
  let length = characters.length;
  for(let i = 0;i<=16;i++){
    ch += characters.charAt(Math.floor(Math.random()*length));

  }
  return ch;
  
}
signupBtn.addEventListener("click",(event) => {
  event.preventDefault();
  if(userName.value === "" || email.value === "" || password.value === "" || password2.value === "" 
  ) {
    errorText.innerHTML = `All Fields Are Mandotory`;
    return;
  }
  if(password.value.length < 8){
    errorText.innerHTML = `Password must be 8 Characters`;
    password.focus();
    return;
  }
  if(password2.value !== password.value){
    errorText.innerHTML = `passwords are not match`;
    password2.focus();   
    return;
  }
  
  let user = {
    username : userName.value,
    email: email.value,
    token: generateToken(),
  }
  localStorage.setItem("user",JSON.stringify(user));
  sucessText.innerHTML = `Successfully Signed Up`;
  const link = document.createElement("a");
  link.href = "./profile.html";
  document.body.append(link);
  link.click();
  document.body.removeChild("link");
});
signupLink.addEventListener("click",()=>{
  
  if(!localStorage.getItem('user')){
    signupLink.href = "./index.html";
  } else {
    alert("ur already in signup go to profile page");
  }

});
profileLink.addEventListener("click",()=>{
  
  if(!localStorage.getItem('user')){
    alert("u don't have account signup first");
  } else{
    profileLink.href = "./profile.html";
  }
});