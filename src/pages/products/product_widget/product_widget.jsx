import React from "react";
import { productos } from "../../../data/productos";
import { ProductCard } from "../product_card/product_card";
import { Conteiner, ConteinerProduct } from "./styles";

export const ProductWidget=()=>{
    return(
        <Conteiner>
            <h2>Vehiculos</h2>
            <ConteinerProduct>
                {
                    productos.map((item)=> <ProductCard key={item.id} {...item} />)
                }
            </ConteinerProduct>
        </Conteiner>
    )
}
