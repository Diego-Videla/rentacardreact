import {React,useContext} from "react";
import styled from "styled-components";
import { CarritoContext } from "../../../components/contexto/Carrito";
import { CarritoCard } from "../carrito_card/carrito_card";
import { ButtonCarrito, ButtonModal, ConteinerCarrito, ConteinerCompra, ConteinerPrecio, Conteinerbutton } from "./styles";
import { Modal } from "../../../components/Modales/Modal";
import { useModal } from "../../../components/Modales/Modalhooks";
import { ConteinerTitulo } from "../../products/product_card/styles";



export const CarritoWidget=()=>{
    const {compras}= useContext(CarritoContext);
    const {borrarTodo}= useContext(CarritoContext);
    const {precioTotal}= useContext(CarritoContext);
    const[isOpenModal,openModal,CloseModal]=useModal(false);
    const[isOpenModal1,openModal1,CloseModal1]=useModal(false);
    const[isOpenModal2,openModal2,CloseModal2]=useModal(false);
    const total= precioTotal();
    return(
        <ConteinerCarrito>
            <h1>Resumen de Compra</h1>
            <ConteinerCompra>
            {
            compras.map((item)=> <CarritoCard  key={item.id} {...item}  />)
            }
            <ConteinerPrecio>
                <p>Total: ${total} </p>
            </ConteinerPrecio>
            <Conteinerbutton>
                <ButtonCarrito disabled={compras.length===0} onClick={openModal} >Borrar Todo</ButtonCarrito>
                <Modal isOpen={isOpenModal} CloseModal={CloseModal}>
                        <ConteinerTitulo>
                        <h3>¿Desea vaciar el carrito?</h3>
                        </ConteinerTitulo>
                        <ButtonModal>
                        <button  onClick={()=>
                        {
                        borrarTodo();
                        CloseModal();
                        }
                        } >Si</button>
                        <button onClick={()=>CloseModal()}>No</button>
                        </ButtonModal>
                </Modal>
                
                <ButtonCarrito disabled={compras.length===0} onClick={openModal1}>Comprar</ButtonCarrito>
                <Modal isOpen={isOpenModal1} CloseModal={CloseModal1}>
                        <ConteinerTitulo>
                        <h3>¿Desea finalizar la compra?</h3>
                        </ConteinerTitulo>
                        <ButtonModal>
                        <button  onClick={()=>
                        {
                        borrarTodo();
                        CloseModal1();
                        openModal2();
                        }
                        } >Si</button>
                        <button onClick={()=>CloseModal1()}>No</button>
                        </ButtonModal>
                </Modal>
                <Modal isOpen={isOpenModal2} CloseModal={CloseModal2}>
                        <ConteinerTitulo>
                        <h3>¡Muchas gracias por su compra!</h3>
                        </ConteinerTitulo>
                        <ButtonModal>
                        <button onClick={()=>CloseModal2()}>Aceptar</button>
                        </ButtonModal>
                </Modal>
            </Conteinerbutton>
            </ConteinerCompra>
        </ConteinerCarrito>
    )
}