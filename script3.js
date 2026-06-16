let u_name=prompt("Enter your user name ")
let pass = prompt("Enter your password")

if(u_name=="hashim123"){
    if(pass==12345){
        console.log("Welcome User ",u_name);
    }
    else{
        console.log("Incorrect password");
    }
}

else
    console.log("Incorrect user name");