import styled from "styled-components"

export const ConteinerCard= styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 680px;
gap: 50px;
height: 180px;
background-color:#00b4d8;
border-radius: 10px;
border-style: solid;
p{
    color: #f1faee;
}
@media (max-width: 768px) {
    width: 480px;
    height: 140px;
    
}

@media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 300px;
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
    font-size: 22px;
    margin: 0;
    padding: 0;
    
}
@media (max-width: 768px) {
    p{
    font-size: 16px;
    padding: 0;
    margin: 0;
    }
}

@media (max-width: 550px) {
    gap: 5px;
    p{
        font-size: 18px;
    }
    
}
`