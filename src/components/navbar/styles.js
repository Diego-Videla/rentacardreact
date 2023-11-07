import styled from "styled-components";
import React from "react";

export const NavbarContainer=styled.div`
height: 60px;
background-color: gray;
display:  flex;
justify-content:space-between;
align-items: center;
padding: 1rem 4rem;
img {
    height: 60px;
    width: 60px;
    border-radius: 10px;
}
@media (max-width: 768px) {
    padding: 1rem 2rem ;
    img {
    height: 40px;
    width: 40px;
    }
}
`
export const LinksContainer= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:30px;
a {
    color: white;
    font-size: 28px;
    font-weight: 600;
}
@media (max-width: 768px) {
    a{
        font-size: 20px;
    }
}
`