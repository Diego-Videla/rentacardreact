import React, { useContext }  from "react";
import styled from "styled-components";
import {  ButtonItems, Conteiner, ConteinerButton, ConteinerCard, ConteinerImgBorrar, ConteinerInfo,  Conteinerimg } from "./styles";
import { CarritoContext } from "../../../components/contexto/Carrito";
import imgborrar from "./img-borrar.png"
import { Modal } from "../../../components/Modales/Modal";
import { useModal } from "../../../components/Modales/Modalhooks";
import {ButtonModal, ConteinerTitulo } from "../../products/product_card/styles";


export const CarritoCard=({marca, Modelo,precio,imagen,id,cantidad})=>{
    const {agregarCompra,borrarCompra,borrarItem}= useContext(CarritoContext);
    const[isOpenModal,openModal,CloseModal]=useModal(false);
    const[isOpenModal1,openModal1,CloseModal1]=useModal(false);
    const[isOpenModal2,openModal2,CloseModal2]=useModal(false);
    return(
        <ConteinerCard>
            <Conteinerimg>
                <img src={imagen} alt="" />
            </Conteinerimg>
            <ConteinerInfo>
                <p>Marca:{marca} </p>
                <p>Modelo:{Modelo}</p>
                <p>{precio * cantidad}</p>
            </ConteinerInfo>
            <Conteiner>
                <ConteinerButton>
                    <ButtonItems onClick={openModal1}>-</ButtonItems>
                    <Modal isOpen={isOpenModal1} CloseModal={CloseModal1}>
                        <ConteinerTitulo>
                        <h3>¿Desea restar un items?</h3>
                        </ConteinerTitulo>
                        <ButtonModal>
                        <button  onClick={()=>
                        {
                        borrarCompra({id});
                        CloseModal1();
                        }
                        } >Si</button>
                        <button onClick={()=>CloseModal1()}>No</button>
                        </ButtonModal>
                    </Modal>
                    <p>{cantidad} </p>
                    <ButtonItems onClick={openModal2}>+</ButtonItems>
                    <Modal isOpen={isOpenModal2} CloseModal={CloseModal2}>
                        <ConteinerTitulo>
                        <h3>¿Desea sumar un items?</h3>
                        </ConteinerTitulo>
                        <ButtonModal>
                        <button  onClick={()=>
                        {
                        agregarCompra({marca,Modelo,precio,imagen,id});
                        CloseModal2();
                        }
                        } >Si</button>
                        <button onClick={()=>CloseModal2()}>No</button>
                        </ButtonModal>
                    </Modal>
                </ConteinerButton>
                <ConteinerImgBorrar>
                    <img onClick={openModal} src={imgborrar} alt="" />
                    <Modal isOpen={isOpenModal} CloseModal={CloseModal}>
                        <ConteinerTitulo>
                        <h3>¿Desea borrar este producto?</h3>
                        </ConteinerTitulo>
                        <ButtonModal>
                        <button  onClick={()=>
                        {
                        borrarItem({id});
                        CloseModal();
                        }
                        } >Si</button>
                        <button onClick={()=>CloseModal()}>No</button>
                        </ButtonModal>
                </Modal>
                </ConteinerImgBorrar>
            </Conteiner>
        </ConteinerCard>
    )
}