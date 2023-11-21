import React from "react";
import { CardConteiner, CardDescription, CardInfo, CardPrecio } from "./styles";



export const ProductCard=({marca, Modelo,km,año,precio,imagen})=>{
    return(
        <CardConteiner>
            <img src={imagen} alt="" />
            <CardInfo>
                <p>Marca:{marca}</p>
                <p>Modelo:{Modelo}</p>
            </CardInfo>
            <CardDescription>
                <p>Km:{km}</p>
                <p>Año:{año}</p>
            </CardDescription>
            <CardPrecio>
                <p>${precio}</p>
                <button>Comprar</button>
            </CardPrecio>
            
        </CardConteiner>
    )
}