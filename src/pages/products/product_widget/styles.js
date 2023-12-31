import React from "react";
import styled from "styled-components";

export const Conteiner= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
width: 100%;
margin-bottom: 70px;
max-width:1680px;
h2 {
    font-size: 36px;
    margin:5px
    
}
`
export const ConteinerProduct= styled.div`
display: flex;
flex-wrap: wrap;
align-items:center;
justify-content: center;
gap: 20px;

`
export const ConteinerFilter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
width: 420px;
background-color:#00b4d8;
height: 200px;
border-radius: 10px;
margin-bottom: 20px;
label{
    color: #f1faee;
}
@media (max-width: 550px) {
  width: 275px;
  
}
`
export const FilterMarca= styled.div`
display: flex;
align-items: center;
margin-right: 75px;
@media (max-width: 550px) {
  padding: 0;
  margin: 0;
  input{
    width: 182px;
  }
}
`
export const FilterAño= styled.div`
display: flex;
align-items: center;
justify-content: space-around;
gap: 15px;
input {
    width: 80px;
}
@media (max-width: 550px) {
  input{
    width: 55px;
    padding: 0;
    margin: 0;
  }
}
`
export const Filterkm= styled.div`
display: flex;
align-items: center;
justify-content: space-around;
gap: 15px;
input {
    width: 80px;
}
@media (max-width: 550px) {
  input{
    width: 55px;
    padding: 0;
    margin: 0;
  }
}
`
export const ButtonConteiner= styled.div`
display: flex;
align-items: center;
justify-content: center;

button{
    width: 90px;
    height: 35px;
    font-size: 14px;
}

@media (max-width: 550px) {
    width: 80px;
    height: 30px;
}
`