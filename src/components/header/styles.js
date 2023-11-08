import styled from "styled-components";
import React from "react";

export const HeaderContainer=styled.div`
height: 520px;
display: flex;
align-items: center;
justify-content: center;
padding: 0 40px;

@media (max-width: 768px) {
    height: auto;
    gap: 10px;
}

`
export const InfoContainer= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
width: 50%;
h1 {
    font-size: 40px;
    padding: 10px 30px;
    color: #3772ff;
}
h2 
{
    font-size: 22px;
    padding: 10px 30px;
}
@media (max-width: 1050px) {
    width: 100%;
    
    h1 {
    font-size: 46px;
    width: 100%;
    
}
h2 
{
    font-size: 26px;
    
}
}
`
export const ImgContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;

img {
    height: 350px;
    width: 450px;
    max-width: 80%;
    max-height: 80%;
}
@media (max-width: 1050px) {
    display: none;
}
`