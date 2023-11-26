import styled from "styled-components";
import React from "react";

export const NavbarContainer=styled.div`
height: 60px;
background-color: aqua;
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
    height: 50px;
    width: 50px;
    }
}
.burguer{
    @media (min-width: 768px) {
        display: none;
    }
}
/*.links{
    position: absolute;
    top:-700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
        display: block;
    }
     @media (min-width: 768px) {
        position: initial;
        margin: 0;
        a{
            
            font-size: 1rem;
            display: inline;
        }
    }
}
.links.active{
width: 100%;
display: block;
position: absolute;
margin:auto;
top: 30%;
left: 0;
right: 0;
text-align: center;

}*/

`

export const LinksContainer= styled.ul`
display: flex;
width: 70%;
justify-content: right;
gap:40px;
color: white;

`
export const ButtonConteiner= styled.div`
display: flex;
width: 60%;
justify-content: right;
`