import React from "react";

const Apidata = (props)=>{
    return(
        <>
        <div className="containerdata">
        <img className='image' src={props.apis.image}/>
        <h3>title: {props.apis.title}</h3>
        <h3>price: {props.apis.price}</h3>
        </div>

        </>
        

    );
}
export default Apidata;