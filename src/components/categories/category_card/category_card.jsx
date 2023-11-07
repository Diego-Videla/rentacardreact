import React from "react";
import { CardMarca } from "./styles";

export const CategoryCard=({img, nombre})=>{
    return(
        <CardMarca>
            <img src={img} alt="" />
            <h3> {nombre} </h3>
        </CardMarca>
    )
}