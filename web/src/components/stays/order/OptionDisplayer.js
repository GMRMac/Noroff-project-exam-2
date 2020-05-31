import React from "react";
import PropTypes from "prop-types";

export default function OptionDisplayer({maxGuests}){
    let option = [];
    
    for(let i = 1; (i-1) < maxGuests; i++){
        let randomKey = Math.random();
        option.push(<option value={i} key={randomKey}>{i}</option>)
    }
    
    return(
        <>
            {option}
        </>
    )
}
    
OptionDisplayer.propTypes = {
   maxGuests: PropTypes.number.isRequired,
};