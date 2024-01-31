import React, { useContext } from "react";
import { ConteinerButtonFinalizar, ConteinerCompra, ConteinerDatos, ConteinerDatosInfo, ConteinerInfo, ConteinerInfoCompra, ConteinerTotal, Titulo } from "./styles";
import { CarritoContext } from "../../../components/contexto/Carrito";
import { CheckoutCard } from "../Checkout_card/checkout_card";
import * as Yup from 'yup'
import { useFormik } from "formik";
import { Modal } from "../../../components/Modales/Modal";
import { ButtonModal, ConteinerTitulo } from "../../products/product_card/styles";
import { NavLink } from "react-router-dom";
import { useModal } from "../../../components/Modales/Modalhooks";
type TypeInitialValues={
    nombre:string
    apellido:string
    telefono:string
    dni:string
    direccion:string
}
const initialValues:TypeInitialValues={
    nombre:'',
    apellido:'',
    telefono:'',
    direccion:'',
    dni:'',
}
const validationSchema= Yup.object({
    dni: Yup.string().max(8,'Maximo 8 digitos').required('Campo obligatorio'),
    nombre: Yup.string().max(20,'Maximo 20 caracteres').required('Campo obligatorio'),
    apellido: Yup.string().max(20,'Maximo 20 caracteres').required('Campo obligatorio'),
    direccion: Yup.string().required('Campo obligatorio'),
    telefono: Yup.string().min(10,'Deben ser 10 digitos').max(10, 'Deben ser 10 digitos').required('Campo obligatorio'),
})
export const Checkout=()=>{
    const {compras}= useContext(CarritoContext);
    const[isOpenModal,openModal,CloseModal]=useModal(false);
    const {borrarTodo}= useContext(CarritoContext);
    const {precioTotal}= useContext(CarritoContext);
    const total= precioTotal();
    const onSubmit= () =>{
       openModal();
       borrarTodo();
    }
    const {handleChange,errors,handleSubmit}= useFormik({
            initialValues,
            onSubmit,  
            validationSchema
    })
    return(
            <ConteinerCompra>
                <h1>Resumen de compra</h1>
                    <ConteinerInfoCompra>
                            <h2>Tus Productos</h2>
                            {
                            compras.map((item)=> <CheckoutCard  key={item.id} {...item}  />)
                            }          
                            <ConteinerTotal>
                                <p>Total: ${total}</p>
                            </ConteinerTotal>
                    </ConteinerInfoCompra>
                    <ConteinerDatos onSubmit={handleSubmit}>
                        
                        <Titulo>
                            <h2>Datos de la compra</h2>
                        </Titulo>
                            <ConteinerDatosInfo>
                                <label >Nombres</label>
                                <input
                                type='text'
                                placeholder='Nombre'
                                id='name'
                                name='nombre'
                                onChange={handleChange}
                                />
                                <small>{errors.nombre} </small>
                                <label >Apellido</label>
                                <input
                                type='text'
                                placeholder='Apellido'
                                id='apellido'
                                name='apellido'
                                onChange={handleChange}
                                />
                                <small>{errors.apellido} </small>
                               
                                <label >DNI</label>
                                <input
                                type='number'
                                placeholder='DNI'
                                id='dni'
                                name='dni'
                                onChange={handleChange}
                                 />
                                <small>{errors.dni} </small>
                                <label >Direccion</label>
                                <input
                                type='text'
                                placeholder='Direccion'
                                id='direccion'
                                name='direccion'
                                onChange={handleChange}
                                />
                                <small>{errors.direccion} </small>
                                <label >Teléfono</label>
                                <input
                                type='number'
                                placeholder='Telefono'
                                id='telefono'
                                name='telefono'
                                onChange={handleChange}
                                />
                                <small>{errors.telefono} </small>
                            </ConteinerDatosInfo>
                            <ConteinerButtonFinalizar>
                                <button type="submit" >Finalizar Compra</button>
                            </ConteinerButtonFinalizar> 
                            <Modal isOpen={isOpenModal} closeModal={CloseModal}>
                                <ConteinerTitulo>
                                <h3>¡¡Gracias por su compra!!</h3>
                                </ConteinerTitulo>
                                <ButtonModal>
                                < NavLink className="botonmodal" to='/'> Aceptar</NavLink>
                                </ButtonModal>
                            </Modal>
                            
                    </ConteinerDatos>
              
            </ConteinerCompra>
        
    )
}