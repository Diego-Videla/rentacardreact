import styled from "styled-components";
import React from "react";

export const CardConteiner=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
background-color:#00b4d8;
height: 550px;
width: 400px;
border-radius: 10px;
p{
    color: #f1faee;
}
img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
}
@media (max-width: 768px) {
    width: 350px;
    height: 520px;
    p{
        height: 10px;
    }
    img {
    height: 170px;
    width: 300px;
    border-radius: 10px;
    }
}
@media (max-width: 550px) {
    width: 290px;
    img {
    height: 150px;
    width: 280px;

    }
}
`
export const CardInfo =styled.div`
display: flex;
width: 70%;
align-items: center;
justify-content:space-between;
gap: 10px;
p {
    font-size: 22px;
    font-weight: 500;
}
@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap:5px;
    p {
    font-size: 20px;
    }
    @media (max-width: 768px) {
        gap: 0;
    }
}
`
export const CardDescription= styled.div`
display: flex;
width: 70%;
align-items: center;
justify-content:space-between;
gap: 10px;
p {
    font-size: 22px;
    font-weight: 500;
}
@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap:5px;
    p {
    font-size: 20px;
    }
}
@media (max-width: 768px) {
        gap: 0;
}
`
export const CardPrecio= styled.div`
display: flex;
width: 70%;
align-items: center;
justify-content:space-between;
gap: 10px;
@media (max-width: 768px) {
    button{
    margin-top: 28px;
}
margin-bottom: 5px;
}

p {
    font-size: 32px;
    font-weight: 700;
    color: #03045e;
}

`
export const ButtonModal= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`
export const ConteinerTitulo= styled.div`
display: flex;
align-items: center;
justify-content: center;
`