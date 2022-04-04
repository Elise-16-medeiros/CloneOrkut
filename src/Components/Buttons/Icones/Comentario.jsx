import React, { useState } from 'react';
import '../Post/Post.css';
import { MDBCollapse, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

export default function Comentario() {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

    return (
        <>

            <MDBBtn id='botao-comentario' outline color='light' size='sm' onClick={toggleShow}><MapsUgcIcon /></MDBBtn>
            <MDBCollapse show={showShow}>
                <div id="text-area">
                    <MDBInput label='Post' id='text-comentario' textarea rows={5} />
                </div>
            </MDBCollapse>
        </>
    );
}
