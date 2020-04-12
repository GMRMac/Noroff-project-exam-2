import React from "react";

export default function Admin(){
    const username = localStorage.getItem("userNmn");
    const password = localStorage.getItem("userPwd");
    const adminUsername = localStorage.getItem("user");
    const adminPassword = localStorage.getItem("password");
    console.log(username + ", " + adminUsername)
    
    if( username == adminUsername && password == adminPassword){
        return(
            <p>Logged in</p>
        )
    }
    return(
        <p>Not logged in
        </p>
    )
}