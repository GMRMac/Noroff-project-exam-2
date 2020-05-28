import React from "react";
import PropTypes from "prop-types";

export default function ImagePreview({additionalImageUrl, idNumber}){
    if(additionalImageUrl === ""){
        return(<></>)
    }
    const myStyle = {
        backgroundImage: "url(" + additionalImageUrl + ")", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    
    return (<div onClick={changeImage} className="image__container--preview"><div id={idNumber} style={myStyle} className={additionalImageUrl} ></div></div>)
}
            
ImagePreview.propTypes = {
    additionalImageUrl: PropTypes.string.isRequired,
    idNumber: PropTypes.number.isRequired,
}

function changeImage(data){
    var activeClass = document.getElementsByClassName("active")[1],
        previewImage = document.getElementsByClassName("image__container--preview")[Number(data.target.id)],
        showcaseImage = document.getElementById("showcase");
    activeClass.classList.remove("active")
    previewImage.classList.add("active")
    showcaseImage.style.backgroundImage = "url(" + data.target.classList[0] + ")";
}