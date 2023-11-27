import React, {createContext, useState} from "react";

export const MenuContext= createContext();


export const ContextMenu=({children})=>{

    const [menu,setMenu]=useState(false)
    
    const handleClick=()=>{
       setMenu(!menu)
    }
    return (
       <MenuContext.Provider value={{menu,handleClick}}>
          {children}
        </MenuContext.Provider>
    )
    
}