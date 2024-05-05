document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   
    console.log("Username: " + username + ", Password: " + password);

   
    window.location.href = "https://66372a162e909593609f9513--papaya-tapioca-7c88d4.netlify.app/";
});
