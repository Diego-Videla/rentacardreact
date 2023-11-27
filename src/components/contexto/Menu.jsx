import React, {createContext, useState} from "react";

export const MenuContext= createContext();


export const ContextMenu=({children})=>{

    const [menu,setMenu]=useState(false)
    
    const handleClick=()=>{
       setMenu(!menu)
    }
    const closemenu=()=>{
      setMenu(false)
    }
    return (
       <MenuContext.Provider value={{menu,handleClick,closemenu}}>
          {children}
        </MenuContext.Provider>
    )
    
}