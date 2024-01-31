import styled from "styled-components";

export const ConteinerCompra= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
h2{
    font-size: 30px;
    font-weight: 700;
}
@media (max-width: 550px) {
    h1{
        font-size: 28px;
    }
    h2{
        font-size: 26px;
    }
    
}
`
export const ConteinerInfo= styled.div`
display: flex;

align-items: center;
justify-content: center;
width: 100%;
gap: 10px;

`
export const ConteinerInfoCompra= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
border-style: solid;
padding: 15px;
border-radius: 10px;
margin-bottom: 10px;
`
export const ConteinerDatos= styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 722px;
height: 680px;
gap: 10px;

.botonmodal{
    font-weight: 700;
    color: #03045e;
    background-color:#00b4d8;
    padding: 10px;
    border-radius: 10px;
    text-decoration: none;
}
@media (max-width: 768px) {
    width: 522px;
}
@media (max-width: 550px) {
    width: 300px;
}
`

export const ConteinerDatosInfo= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
margin-left: 10px;

label{
    font-size: 20px;
    font-weight: 700;
}

input{
    width: 350px;
    height: 25px;
}
@media (max-width: 550px) {
    label{
        font-size: 18px;
        padding: 0;
    }

    input{
        width: 220px;
        height: 25px;
    }
}
`
export const Datos= styled.div`
display: flex;
flex-direction: column;
gap: 5px;

`
export const Titulo= styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const ConteinerTotal=styled.div`
display: flex;
justify-content: end;
width: 90%;
p{
    font-size: 24px;
    font-weight: 800; 
     
}
`
export const ConteinerButtonFinalizar=styled.div`
display: flex;
justify-content: center;
width:100%;
margin: 15px 0;
button{
    background-color:#00b4d8;
    color: #f1faee;
    font-size: 18px;
    padding: 10px;
}
`