import React, { useContext }  from "react";
import { ButtonModal, CardConteiner, CardDescription, CardInfo, CardPrecio, ConteinerTitulo } from "./styles";
import { CarritoContext } from "../../../components/contexto/Carrito";
import { Modal } from "../../../components/Modales/Modal";
import { useModal } from "../../../components/Modales/Modalhooks";


export const ProductCard=({marca, Modelo,km,año,precio,imagen,id})=>{
    const {agregarCompra}= useContext(CarritoContext);
    const[isOpenModal,openModal,CloseModal]=useModal(false);
    return(
        <CardConteiner>
            <img src={imagen} alt="" />
            <CardInfo>
                <p >Marca:{marca}</p>
                <p>Modelo:{Modelo}</p>
            </CardInfo>
            <CardDescription>
                <p>Km:{km}</p>
                <p>Año:{año}</p>
            </CardDescription>
            <CardPrecio>
                <p>${precio}</p>
                <button onClick={openModal}>Comprar</button>
                <Modal isOpen={isOpenModal} CloseModal={CloseModal}>
                    <ConteinerTitulo>
                    <h3>¿Desea agregar el producto al carrito?</h3>
                    </ConteinerTitulo>
                    <ButtonModal>
                    <button key={id} onClick={()=>
                        {
                        agregarCompra( {marca,Modelo,precio,imagen,id});
                        CloseModal();
                        }
                        } >Si</button>
                    <button onClick={CloseModal}>No</button>
                    </ButtonModal>
                </Modal>
            </CardPrecio>
            
        </CardConteiner>
    )
}