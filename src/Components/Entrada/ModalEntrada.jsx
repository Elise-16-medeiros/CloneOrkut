import React, { useState } from 'react';
import './Entrada.css';
import { MDBCollapse, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function App() {
    const [showFirstElement, setShowFirstElement] = useState(false);
    const [showSecondElement, setShowSecondElement] = useState(false);

    const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
    const toggleSecondElement = () => setShowSecondElement(!showSecondElement);


    return (
        <>
            <MDBBtn onClick={toggleFirstElement}> Login</MDBBtn>
            <MDBBtn onClick={toggleSecondElement}>Registrar-se</MDBBtn>


            <MDBRow>
                <MDBCol>
                    <MDBCollapse show={showFirstElement} className='mb-3'>
                        <Form className='formu-1'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Manter conectado" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Logar
                            </Button>
                        </Form>
                    </MDBCollapse>
                </MDBCol>
                <MDBCol>
                    <MDBCollapse show={showSecondElement} className='mb-3'>

                        <Form className='formu-2'>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Senha" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Repita seu Email</Form.Label>
                                    <Form.Control type="email" placeholder="Repetir Email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Repita sua senha</Form.Label>
                                    <Form.Control type="password" placeholder="Repetir senha" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Nome(Nome Social)</Form.Label>
                                <Form.Control placeholder="Nos conte seu nome ou nome social" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Sobrenome</Form.Label>
                                <Form.Control placeholder="Seu sobrenome" />
                            </Form.Group>

                            <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridIdentity">
                                    <Form.Label>Identidade de gênero</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Identidade de Gênero</option>
                                        <option value="1">Cisgênero</option>
                                        <option value="2">Transgênero</option>
                                        <option value="3">Binário</option>
                                        <option value="4">Não-binário</option>
                                        <option value="5">Outros</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridOrientation">
                                    <Form.Label>Orientação Sexual</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Orientação Sexual</option>
                                        <option value="1">Lésbica</option>
                                        <option value="2">Gay</option>
                                        <option value="3">Bissexual</option>
                                        <option value="4">Pansexual</option>
                                        <option value="5">Outros</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Manter conectado" />
                            </Form.Group>

                            <Button variant="primary" type="submit" value="Submit">
                                Registrar conta
                            </Button>
                            <Button variant="primary" type="reset" value="Reset">
                                Apagar
                            </Button>
                        </Form>

                    </MDBCollapse>
                </MDBCol>
            </MDBRow>
        </>
    );
}