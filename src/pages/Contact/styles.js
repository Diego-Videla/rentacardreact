import { color } from "framer-motion";
import React from "react";
import styled from "styled-components";

export const Conteiner= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
margin-bottom: 60px;
max-width:1680px;
.botonmodal{
    font-weight: 700;
    color: #03045e;
    background-color:#00b4d8;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
    
}
h2{
    font-size: 40px;
}
@media (max-width: 550px) {
    h2{
        font-size: 30px ;
    }
    }

`
export const  ConteinerContact= styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
max-width:1680px;
gap: 10px;
  @media (max-width: 1050px) {
        flex-direction: column;
        gap: 50px;
    }

`
export const InfoContact= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 450px;
margin: 0 30px;
height: 650px;
background-color: #03045e;
border-radius: 10px;
color: #f1faee;
gap: 10px;
  @media (max-width: 1050px) {
        height: 500px;
        gap: 0;
        padding: 0;
    }
  @media (max-width: 768px) {
    margin: 0 0;
    width: 400px;
}
  @media (max-width: 550px) {
    width: 270px;
}
`

export const InfoMensaje= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;
height: 650px;
width: 500px;
margin: 0 30px;
border-style: solid;
border-radius: 10px;
label{
    font-size: 17px;
    color:#03045e;
}
input {
    width: 400px;
    height: 25px;
}
textarea{
    width: 400px;
}
button{
    width: 120px;
    
}
@media (max-width: 1050px) {
       width: 450px;
       height: 620px;
    }
@media (max-width: 768px) {
    width: 400px;
    input {
        width: 300px;
    }
    textarea{
    width: 300px;
    }
    }
@media (max-width: 550px) {
    width: 270px;
    height: 610px;
    margin: 0;
    input{
        width: 220px;
    }
    textarea{
        width: 220px;
    }
    }
    button{
        width: 100px;
    }

`
export const Nombre= styled.div`
display: flex;
flex-direction: column;
gap: 5px;

`
export const Telefono= styled.div`
display: flex;
flex-direction: column;
gap: 5px;

`
export const Correo= styled.div`
display: flex;
flex-direction: column;
gap: 5px;

`
export const Mensaje= styled.div`
display: flex;
flex-direction: column;
gap: 5px;
`
export const InfoContactoTitulo= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 10px;
    padding-bottom: 20px;
    img {
        width: 90px;
        height: 90px;
        border-radius: 15px;
    }
    h2{
        font-size: 23px;
    }
    @media (max-width: 1050px) {
        padding: 0;
    }
    @media (max-width: 768px) {
    h2{
        font-size: 22px;
    }
    @media (max-width: 550px) {
     h2{
        font-size: 15px;
     }
    }
}
`
export const InfoContactoDatos= styled.div`
margin-top: 20px;
font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media (max-width: 550px) {
    p{
        font-size: 19px;
    }
   }
`


