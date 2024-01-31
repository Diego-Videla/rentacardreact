import { NavLink } from "react-router-dom";
import React, {useContext, useState} from "react";
import { Conteiner, ConteinerContact, Correo, InfoContact, InfoContactoDatos, InfoContactoTitulo, InfoMensaje, Mensaje, Nombre, Telefono } from "./styles";
import icono from './icono-contacto.png';
import { useFormik } from "formik";
import * as Yup from 'yup'
import { ButtonModal, ConteinerTitulo } from "../products/product_card/styles";
import { Modal } from "../../components/Modales/Modal";
import { useModal } from "../../components/Modales/Modalhooks";

type TypeInitialValues={
    nombre:string
    telefono:string
    correo:string
    mensaje:string
}
const initialValues:TypeInitialValues={
    nombre:'',
    telefono:'',
    correo:'',
    mensaje:'',
}
const validationSchema= Yup.object({
    correo: Yup.string().email('Correo no valido').required('Campo obligarotio'),
    nombre: Yup.string().max(20,'Maximo 20 caracteres').required('Campo obligatorio'),
    telefono: Yup.string().min(10,'Deben ser 10 digitos').max(10, 'Deben ser 10 digitos').required('Campo obligatorio'),
    mensaje:Yup.string().max(400,'Máximo 400 caracteres').required('Campo obligatorio'),
})

export const Contact =() =>{
    const[isOpenModal,openModal,CloseModal]=useModal(false);
    const onSubmit= () =>{
        openModal();
    }
    const {handleChange,errors,handleSubmit}= useFormik({
            initialValues,
            onSubmit,  
            validationSchema
    })
       
    return(
        
        <Conteiner>
            <h2>Envia tu Mensaje</h2>
        <ConteinerContact>
            <InfoContact>
                <InfoContactoTitulo>
                    <img src={icono} alt="icono contacto" />
                    <h2>INFORMACIÓN DE CONTACTO </h2>
                </InfoContactoTitulo>

                <InfoContactoDatos>
                    <p>📧 info.contact@correo.com</p>
                    <p>💻Renta_Card</p>
                    <p>📱 2234896512</p>
                    <p>🏠 Rawson1524 </p>

                </InfoContactoDatos>
            </InfoContact>
            <form onSubmit={handleSubmit}>
            <InfoMensaje >
                
                <Nombre>
                    <label >Nombres</label>
                    <input
                    type='text'
                    placeholder='Name'
                    id='name'
                    name='nombre'
                    onChange={handleChange}
                    />
                    <small>{errors.nombre} </small>
                </Nombre>
                <Telefono>
                    <label >Teléfono</label>
                    <input
                    type='number'
                    placeholder='Teléfono'
                    name='telefono'
                    onChange={handleChange}
                    />
                    <small>{errors.telefono} </small>
                </Telefono>
                <Correo>
                    <label >Correo electrónico</label>
                    <input
                    type='email' 
                    placeholder='Email'
                    name='correo'
                    onChange={handleChange}
                    />
                    <small>{errors.correo} </small>

                </Correo>
                <Mensaje>
                <label >Mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="30" rows="10"  onChange={handleChange}></textarea>
                <small>{errors.mensaje} </small>
                </Mensaje>
                <button type="submit">Enviar</button>
                <Modal isOpen={isOpenModal} closeModal={CloseModal}>
                    <ConteinerTitulo>
                    <h3>Mensaje enviado</h3>
                    </ConteinerTitulo>
                    <ButtonModal>
                    < NavLink className="botonmodal" to='/'> Aceptar</NavLink>
                    </ButtonModal>
                </Modal>
            </InfoMensaje>
            </form>
        </ConteinerContact>
        </Conteiner>
    )
}