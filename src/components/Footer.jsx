import React from "react"

function Footer (){

    const currentyear = new Date().getFullYear();
    return <footer>
    <p>
    CopyRight @ {currentyear}   
    </p>

    </footer>
    

}



export default Footer; 