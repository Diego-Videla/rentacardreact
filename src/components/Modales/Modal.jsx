import React from "react";
import "./styles.css"

export const Modal=({children, isOpen,closeModal} )=>{
    return(
    <div className= {`modal ${isOpen && `is-open`}`} >
        <div className="modal-container">
            {children}
        </div>
    </div>
    )
}