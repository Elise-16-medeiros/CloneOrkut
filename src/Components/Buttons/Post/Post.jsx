
import React, { useState } from 'react';
import './Post.css';
import { MDBCollapse, MDBBtn, MDBInput, } from 'mdb-react-ui-kit';

export default function Post() {
  const [showShow, setShowShow] = React.useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBBtn onClick={toggleShow}>Postar</MDBBtn>
      <MDBCollapse show={showShow}>
        <form className='postagem'>
        <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Post' />
        <MDBBtn type='submit' className='mx-2'>
        Postar
        </MDBBtn>
        </form>
      
      </MDBCollapse>
    </>
  );
}