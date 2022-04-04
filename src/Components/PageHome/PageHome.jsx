import * as React from 'react';
import './PageHome.css';
import { MDBTypography } from 'mdb-react-ui-kit';
import Bandeira from '../Buttons/Bandeira/Bandeira';
import Post from '../Buttons/Post/Post';
import Noticia from '../Buttons/Noticia/Noticia';
import Video from '../Buttons/Video/Video';


export default function PageHome() {
  return (
    <div className='area'>
       <MDBTypography tag='div' className='display-5'>
        Bem vindo, Elise!
      </MDBTypography>
      
      <MDBTypography className='titulo' variant='h5'>O que deseja fazer:</MDBTypography>
      <div className='botoes'>
       <Bandeira />
       <Noticia />
       <Video />
       <Post />
       </div>
    </div>
  );
}
