import './Entrada.css';
import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';
import ModalEntrada from '../Entrada/ModalEntrada';

export default function Entrada() {
    return (
        <>
            <div className='texto'>
                <MDBTypography tag='div' className='display-2 pb-3 mb-3'>
                    ABAR
                </MDBTypography>
                <MDBTypography blockquote className='lead mb-0' >
                    Rede social exclusiva para o público LGBTQIA+.
                    Sendo a primeira plataforma voltada unicamente para se fazer amizades.
                    Aqui você fica a vontade sendo quem você é, em um ambiente super acolhedor.
                </MDBTypography>
            </div>
            <div className='botao'>
                <ModalEntrada />
            </div>
        </>
    );
}