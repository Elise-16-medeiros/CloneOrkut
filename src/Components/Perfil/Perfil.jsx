import React from 'react';
import './Perfil.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import Navbar from '../Nav/Navbar';

export default function Perfil() {
    return (
        <>
            <Navbar />
            <div className="perfil d-flex justify-content-center">


                <MDBCard className='w-75' alignment='center'>
                    <MDBCardHeader>Meu Perfil</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>Elise</MDBCardTitle>
                        <img
                            src='http://pm1.narvii.com/7418/33ea84f92fcddb00ff29d219f2d6fb837336e62br1-623-618v2_00.jpg'
                            className='img-fluid hover-shadow'
                            alt=''
                            style={{ maxWidth: '18rem' }}
                        />
                        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                    <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter>
                </MDBCard>





            </div>
        </>
    );
}