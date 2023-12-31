import React from "react";
import styled from "styled-components";


export const ConteinerCarrito= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap: 15px;
@media (max-width: 550px) {
h1{
    font-size: 26px;
    font-weight: 900;
}
}

`
export const ConteinerCompra= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
margin-bottom: 60px;
` 
export const Conteinerbutton=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;

/*button{
    background-color:#00b4d8;
    width: 300px;
    height: 38px;
    color: #f1faee;
    font-weight: 600;
    font-size: 22px;
    padding: 0;
}*/
`
export const ButtonCarrito= styled.button`
    background-color:#00b4d8;
    width: 300px;
    height: 38px;
    color: #f1faee;
    font-weight: 600;
    font-size: 22px;
    padding: 0;
    @media (max-width: 550px) {
        width: 230px;
        height: 38px;
    }
`
export const ConteinerPrecio=styled.div`
display: flex;
p{
    font-size: 36px;
    font-weight: 700;
}
`
export const ButtonModal= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`
