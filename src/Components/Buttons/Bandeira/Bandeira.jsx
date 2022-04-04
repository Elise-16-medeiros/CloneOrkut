import * as React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { MDBTypography } from 'mdb-react-ui-kit';



function Bandeira() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="botaoModal" variant="primary" onClick={handleShow}>
        Bandeiras
      </Button>

      <Modal className="registro" size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <Modal.Title>
            <MDBTypography variant='h2'>Bandeiras</MDBTypography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST2-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA LÉSBICA</MDBCardTitle>
            <MDBCardText>
              A bandeira lésbica mais atual foi criada por Emily Gwen em 2018, para uma campanha de rede socias.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST4-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA TRANS</MDBCardTitle>
            <MDBCardText>A bandeira do Orgulho Transgênero foi criada em 1999 por Monica Helms, uma mulher trans estadunidense.</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/NAO-BINARIO.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA GÊNERO NÃO BINÁRIO</MDBCardTitle>
            <MDBCardText>
            Pessoas não binárias têm sua própria bandeira do orgulho. Foi criada em 2014 por Kye Rowan. 
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST5-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA GÊNERO QUEER</MDBCardTitle>
            <MDBCardText>
            A bandeira genderqueer (ou gênero queer, em português) foi criada em 2011 por Marilyn Roxie. (Marilyn foi a primeira estagiária do [SSEX BBOX] de São Francisco em 2010). 
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST14-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA GÊNERO FLUIDO</MDBCardTitle>
            <MDBCardText>
            Pessoas de gênero fluido ou genderfluid são considerados um subgrupo de pessoas não binárias, distintivos o suficiente para ter uma bandeira própria. 
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://orgulhotrans.com.br/wp-content/uploads/2021/05/17-300x300.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA AGÊNERO </MDBCardTitle>
            <MDBCardText>
            A neutralidade de gênero é um movimento que busca acabar completamente com a discriminação de gênero na sociedade.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST6-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA INTERSEXO</MDBCardTitle>
            <MDBCardText>
            A bandeira intersexo foi criada em julho de 2013 pela Intersex Human Rights Austrália.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST8-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA PANSEXUAL</MDBCardTitle>
            <MDBCardText>
            A bandeira do orgulho pansexual foi encontrada em vários sites desde meados de 2010. 
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST3-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA BISSEXUAL</MDBCardTitle>
            <MDBCardText>
            A bandeira do orgulho bissexual foi desenhada por Michael Page em 1998 para dar à comunidade o seu próprio símbolo comparável com a bandeira do arco-íris. 
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST12-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA POLISSEXUAL</MDBCardTitle>
            <MDBCardText>
            Polissexuais incluem a possibilidade de atração por três ou mais gêneros.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST7-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA ASSEXUAL</MDBCardTitle>
            <MDBCardText>
            Criada por um usuário do Assexual Visibility and Education Network (AVEN) chamado standup em 2010 como parte de um concurso.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST11-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA DEMISEXUAL</MDBCardTitle>
            <MDBCardText>
            A bandeira do orgulho demisexual foi projetada usando as cores da bandeira assexual, mas organizando-as para se distinguirem.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST16-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA DE ARROMANTICIDADE</MDBCardTitle>
            <MDBCardText>
            Essa bandeira de Arromanticidade é mais conhecida e validada para o conceito de Afetividade,  que pode ser intrínseca para as orientações Assexuais e as orientações Alossexuais.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/POST15-300x300-1.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA POLIAMOR</MDBCardTitle>
            <MDBCardText>
            A bandeira do orgulho do poliamor (Polyamory) , desenhada por Jim Evans em 1995.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://diversitybbox.com/wp-content/uploads/2020/01/NOVA.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>BANDEIRA DO ORGULHO LGBTQIAP+ </MDBCardTitle>
            <MDBCardText>
            Essa bandeira é a que devemos usar quando formos falar de orgulho LGBTQIAP+ porque ela representa todos os aspectos dessa comunidade.
            Criada em 2018, pelo designer Daniel Quasar, de Portland, nos Estados Unidos, que uma pessoa é não binária.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



    </MDBRow>





        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bandeira;

