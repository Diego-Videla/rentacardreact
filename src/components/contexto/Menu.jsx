import React, {createContext} from "react";

const initState= {
    estado: 'false',
    handleClick:()=>{},

};
export const Menu= createContext(initState);

const handleClick=()=>{
    Menu.Provider.estado=!Menu.Provider.estado;
}