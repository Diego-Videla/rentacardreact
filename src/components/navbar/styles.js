import styled from "styled-components";
import React from "react";

export const NavbarContainer=styled.div`
height: 60px;
background-color: aqua;
display:  flex;
justify-content:space-between;
align-items: center;
padding: 1rem 4rem;
max-width:1680px;
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
    @media (max-width: 550px) {
    img {
    height: 40px;
    width: 40px;
    }
}
}
.burguer{
    @media (min-width: 768px) {
        display: none;
    }
}
.links{
    position: absolute;
    top:-700px;
    left: -2000px;
    right:0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
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
width: 70%;
display: block;
position: absolute;
margin:auto;
top: 20%;
left: 0;
right: 0;
text-align: center;
z-index: 1;
 a{
    font-size: 24px;
    margin-top: 10px;
 }
}

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
export const BgDiv= styled.div`
background-color: #03045e;
position:absolute;
top:-700px;
left:-1000px;
width:100%;
height:100%;

transition: all .6s ease;
&.active{
    border-radius: 0 0 80% 0;
    top:0;
    left:0;
    width:90%;
    height:100%   
}
`

