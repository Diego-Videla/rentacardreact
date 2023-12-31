import React from "react";
import styled from "styled-components";

export const ConteinerFooter= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 15px;
max-width:1680px;
`

export const FooterInfo= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 45px;
max-width:1680px;
a {
    font-size: 25px;
    color: #03045e;
}
@media (max-width: 1050px) {
    a {
    font-size: 30px;
    }
}
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    a {
    font-size: 20px;
    }
}
`

export const FooterImg= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 60px;
padding: 60px 0;
max-width:1680px;
img {
    height: 60px;
    width: 60px;
    border-radius: 20px;
}

@media (max-width: 768px) {
    gap: 30px;
}
@media (max-width: 550px) {
    img{
        height: 45px;
        width: 45px;    
    }
    
}
`