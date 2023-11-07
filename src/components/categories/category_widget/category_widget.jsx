import React from "react";
import { marcas } from "../../../data/marcas";
import { CategoryCard } from "../category_card/category_card";
import { ConteinerCardMarca, ConteinerMarca } from "./styles";
export const CategoryWidget=()=>{
    return(
        <ConteinerCardMarca>
            <h2>Marcas</h2>
            <ConteinerMarca>
                {
                    marcas.map((marca)=> <CategoryCard key={marca.id} {...marca} />)
                }
            </ConteinerMarca>
        </ConteinerCardMarca>
    )
}