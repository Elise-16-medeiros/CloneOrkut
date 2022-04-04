import React, { useState } from 'react';
import '../Post/Post.css';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import Stack from 'react-bootstrap/Stack';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Compartilhar() {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);

    return (
        <>

            <MDBBtn id='compartilhar' type='submit' outline color='light' size='sm' onClick={toggleShow}><ShareIcon /></MDBBtn>
            <MDBCollapse show={showShow}>
                <Stack className='icones-compartilhar'direction="horizontal" gap={1}>
                    <div>
                        <MDBBtn className='m-1'style={{ backgroundColor: '#3b5998' }}href='https://pt-br.facebook.com/' target="_blank">
                            <FacebookIcon/>
                        </MDBBtn>
                    </div>
                    
                    <div>
                        <MDBBtn className='m-1'style={{ backgroundColor: '#55acee' }}href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D' target="_blank">
                            <TwitterIcon/>
                        </MDBBtn>
                    </div>
                    
                    <div> 
                        <MDBBtn className='m-1'style={{ backgroundColor: '#ac2bac' }}href='https://www.instagram.com/' target="_blank">
                            <InstagramIcon/>
                        </MDBBtn>
                    </div>
                </Stack>
            </MDBCollapse>
        </>
    );
}
