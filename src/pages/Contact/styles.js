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
    }

`
export const InfoContact= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 450px;
margin: 0 30px;
height: 500px;
background-color: #03045e;
border-radius: 10px;
color: #f1faee;
  @media (max-width: 768px) {
    margin: 0 0;
    width: 400px;
    height: 450px;
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
height: 500px;
width: 500px;
margin: 0 30px;
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
@media (max-width: 550px) {
    width: 270px;
    input{
        width: 260px;
    }
    textarea{
        width: 260px;
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

    img {
        width: 90px;
        height: 90px;
        border-radius: 15px;
    }
    h2{
        font-size: 23px;
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


