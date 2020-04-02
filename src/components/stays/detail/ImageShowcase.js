import React from "react";
import PropTypes from "prop-types";

export default function ImageShowcase({imageUrl}){
    console.log(imageUrl)
    
    const myStyle = {
        backgroundImage: "url(" + imageUrl + ")", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    
    return(
        <div className="image__container">
            <div className="image__container--showcase" style={myStyle}>
            </div>
            <div className="image__container--preview-container">
                <div className="image__container--preview active"><div style={myStyle}></div></div>
                <div className="image__container--preview"><div style={myStyle}></div></div>
                <div className="image__container--preview"><div style={myStyle}></div></div>
                <div className="image__container--preview"><div style={myStyle}></div></div>
                <div className="image__container--preview"><div style={myStyle}></div></div>
            </div>
        </div>
    )
}

ImageShowcase.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}