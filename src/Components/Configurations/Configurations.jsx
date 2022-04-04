import React from 'react';
import './Configurations.css';
import Navbar from '../Navbar/Navbar';
import { MDBTypography } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Configurations() {
    return (
        <>
            <Navbar />
            <Container className='formulario'>
                
                <Row>
             
                    <Col sm="auto" >
                        <MDBTypography variant='h4'>Redefinição de senha</MDBTypography>
                        <br />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Nova Senha</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Repetir senha</Form.Label>
                                <Form.Control type="password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                            <Button variant="primary" type="reset">
                                Excluir
                            </Button>
                        </Form>
                    </Col>
                   

                    <Col sm={4}>
                        <MDBTypography variant='h4'>Redefinição de Email</MDBTypography>
                        <br />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label> Novo Email</Form.Label>
                                <Form.Control type="email" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Repetir Email</Form.Label>
                                <Form.Control type="email" />

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                            <Button variant="primary" type="reset">
                                Excluir
                            </Button>
                        </Form>
                    </Col>

                    <Col sm="auto">
                        <MDBTypography variant='h4'>Mudar foto de perfil</MDBTypography>
                        <br />
                        <input type="file" className='form-control' id="customFile" />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm="auto">
                    <MDBTypography variant='h4'>Identidade de Gênero</MDBTypography>
                        <br />
                        <Form.Select aria-label="Default select example">
                            <option>Selecionar</option>
                            <option value="1">Cisgênero</option>
                            <option value="2">Transgênero</option>
                            <option value="3">Binário</option>
                            <option value="4">Não-binário</option>
                            <option value="5">Outros</option>
                        </Form.Select>
                    </Col>
                    <Col sm="auto">
                    <MDBTypography variant='h4'>Orientação Sexual</MDBTypography>
                        <br />
                        <Form.Select aria-label="Default select example">
                            <option>Selecionar</option>
                            <option value="1">Lésbica</option>
                            <option value="2">Gay</option>
                            <option value="3">Bissexual</option>
                            <option value="4">Pansexual</option>
                            <option value="5">Outros</option>
                        </Form.Select>


                    </Col>
                    <Col sm>coluna vazia</Col>
                </Row>
            </Container>
        </>
    );
}