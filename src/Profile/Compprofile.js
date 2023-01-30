import React from 'react'
import PropTypes from 'prop-types'; 
// <button onClick={handleName}>alert me</button> 
const Compprofile = (props,handleName) => {
  return (
    <div style={props.style} >

        <h2 style={{ color: "#408080" }}>{props.fullName}</h2>
        <h3 style={{ color: "bisque" }}>{props.bio}</h3>
        <h3 style={{color:'bisque'}}>{props.profession}</h3>
        <button onClick={props.handleName}>alert me</button>
        <h1></h1>
    </div>
  )
}
Compprofile.propTypes={fullName:PropTypes.string}
Compprofile.propTypes={fullName:PropTypes.string}
Compprofile.defaultProps={
    fullName:"nada",
    bio:"à savoir",
    profession:"aucune idée"}
export default Compprofile