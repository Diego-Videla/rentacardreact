import styled from "styled-components";
import React from "react";

export const CardConteiner=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
background-color:gray;
height: 550px;
width: 400px;
border-radius: 10px;
img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
}
@media (max-width: 768px) {
    width: 350px;
    height: 650px;
    img {
    height: 170px;
    width: 300px;
    border-radius: 10px;
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
    gap:5px;
    p {
    font-size: 20px;
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
    gap: 5px;
    gap:5px;
    p {
    font-size: 20px;
}
}
`
export const CardPrecio= styled.div`
display: flex;
width: 70%;
align-items: center;
justify-content:space-between;
gap: 10px;
p {
    font-size: 32px;
    font-weight: 700;
    color: #3772ff;
}

`