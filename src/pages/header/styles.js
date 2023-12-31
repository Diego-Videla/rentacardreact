import styled from "styled-components";
import React from "react";

export const Home= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 150px;
max-width:1680px;
h1 {
    font-size: 40px;
    padding: 0 30px;
    color: #03045e;
    max-width: 600px;
}
@media (max-width: 768px) {
    margin-bottom: 80px;
}

`
export const HeaderContainer=styled.div`
height: 420px;
display: flex;
align-items: center;
justify-content: center;
padding: 0 10px;
margin-top: 10px;
max-width:1680px;
@media (max-width: 1050px) {
    height: 300px;
}

@media (max-width: 768px) {
    height: auto;
    gap: 10px;
}
@media (max-width: 550px) {
    width: 300px;
    padding: 0;
}

`
export const InfoContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
width: 50%;

h2 
{
    font-size: 22px;
    padding: 0 30px;
}
@media (max-width: 1050px) {
    width: 100%;
    
}
h2 
{
    font-size: 26px;
    
}
@media (max-width: 768px) {

h2 
{
    font-size: 22px;
}
    
}
`
export const ImgContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;

img {
    height: 350px;
    width: 450px;
    max-width: 90%;
    max-height: 90%;
}
@media (max-width: 1050px) {
    display: none;
}
`
export const ConteinerRecommended= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 20px;
h2 {
    font-size: 36px;
    
}
`