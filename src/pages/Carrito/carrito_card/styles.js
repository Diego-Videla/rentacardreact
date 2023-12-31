import React from "react";
import styled from "styled-components";

export const ConteinerCard= styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 720px;
gap: 50px;
height: 180px;
background-color:#00b4d8;
border-radius: 10px;
p{
    color: #f1faee;
}
@media (max-width: 768px) {
    width: 522px;
    height: 140px;
    
}

@media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    gap: 15px;
}

`
export const Conteinerimg= styled.div`
display: flex;
align-items: center;
justify-content: center;
img {
    width: 240px;
    height: 140px;
    border-radius: 10px;
}
@media (max-width: 768px) {
    img {
    width: 180px;
    height: 95px;
    
}
}

@media (max-width: 550px) {
    img{
    width: 210px;
    height: 110px;
    }
   
}
`
export const ConteinerInfo= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
p{
    
    font-size: 24px;
    margin: 0;
    padding: 0;
    
}
@media (max-width: 768px) {
    p{
    font-size: 18px;
    padding: 0;
    margin: 0;
    }
}

@media (max-width: 550px) {
    gap: 5px;
}
`
export const ConteinerButton= styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 5px 0;
gap: 10px;
p{
    font-size: 19px;
    font-weight: 700;
    padding: 0;
    margin: 0;
}
`
export const ButtonItems= styled.button`
    color: #00b4d8;
    font-weight: 800;
    background-color:white;
    @media (max-width: 768px) {
        padding: 0;
        margin: 0;
        height:32px ;
        width: 32px;
    }

    @media (max-width: 550px) {

    }
`
export const Conteiner= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
`
export const ConteinerImgBorrar= styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    width: 50px;
    height: 50px;
    cursor: pointer;
}
@media (max-width: 768px) {
    img
    {
    width: 45px;
    height: 45px;
    padding: 0;
    }
}

@media (max-width: 550px) {

}
`
