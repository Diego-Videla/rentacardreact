import { useState } from "react";

export const useModal=(initianValue=false)=>{
    const[isOpen,setIsOpen]= useState(initianValue)
    
    const openModal=()=> setIsOpen(true);
    const closeModal=()=> setIsOpen(false);
    
    return[isOpen,openModal,closeModal];
}