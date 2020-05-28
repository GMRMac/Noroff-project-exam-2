import React from "react";
import PropTypes from "prop-types";
import ImagePreview from "./ImagePreview";

export default function ImageShowcase({imageUrl, additionalImageUrl}){
    if(additionalImageUrl === undefined){
        var splitAdditionalImageUrl = [""]
    } else {
        var splitAdditionalImageUrl = additionalImageUrl.split(",;,");
    }
    var idNumber = 0;
    
    const myStyle = {
        backgroundImage: "url(" + imageUrl + ")", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    
    return(
        <div className="image__container">
            <div className="image__container--showcase" id={"showcase"} style={myStyle}>
            </div>
            <div className="image__container--preview-container">
                <div onClick={changeImage} className="image__container--preview active"><div id={"0"} style={myStyle} className={imageUrl} href={imageUrl}></div></div>
                {splitAdditionalImageUrl.map(imgUrl => {
                    idNumber++;
                    return <ImagePreview additionalImageUrl={imgUrl} idNumber={idNumber}/>
                })}
            </div>
        </div>
    )
}

function changeImage(data){
    var activeClass = document.getElementsByClassName("active")[1],
        previewImage = document.getElementsByClassName("image__container--preview")[Number(data.target.id)],
        showcaseImage = document.getElementById("showcase");
    activeClass.classList.remove("active")
    previewImage.classList.add("active")
    showcaseImage.style.backgroundImage = "url(" + data.target.classList[0] + ")";
}
ImageShowcase.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    additionalImageUrl: PropTypes.string.isRequired,
}

//return 
