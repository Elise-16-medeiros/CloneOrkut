import React from 'react';
import './Solicitacao.css';
import Navbar from '../Nav/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Solicitacao() {
    return (
<>
<Navbar />
        <Container className='cards'>
            <Row xs={2}>
                <Col sm>
                    <Card style={{width: '18rem'}}>
                    <Card.Img className ='fotos' variant="top" src="https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=80" />
                    <Card.Body>
                        <Card.Title>Alex Mendonça</Card.Title>
                        <Button variant="primary" type="submit">Adicionar</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm>
                <Card style={{ width: '18rem' }}>
                    <Card.Img className ='fotos' variant="top" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    <Card.Body>
                        <Card.Title>Cintia Luzia</Card.Title>
                        <Button variant="primary" type="submit">Adicionar</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm>

                <Card style={{ width: '18rem'}}>
                    <Card.Img className ='fotos' variant="top" src="https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    <Card.Body>
                        <Card.Title>Miguel Lorenço</Card.Title>
                        <Button variant="primary" type="submit">Adicionar</Button>
                    </Card.Body>
                </Card>
                    </Col>
            </Row>
            <br />
            <Row xs={2}>
                <Col sm><Card style={{ width: '18rem'}}>
                    <Card.Img className ='fotos' variant="top" src="https://images.unsplash.com/photo-1489667897015-bf7a9e45c284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80" />
                    <Card.Body>
                        <Card.Title>Tamires Santos</Card.Title>                
                        <Button variant="primary" type="submit">Adicionar</Button>
                    </Card.Body>
                </Card>
                </Col>
             
                
                <Col sm>
                <Card style={{ width: '18rem'}}>
                    <Card.Img className ='fotos' variant="top" src="https://images.unsplash.com/photo-1530031092055-18d4a16ff6e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    <Card.Body>
                        <Card.Title>Morgana Brandão</Card.Title>
                        <Button variant="primary" type="submit">Adicionar</Button>
                    </Card.Body>
                </Card>
                    </Col>
                
                <Col sm>
                <Card style={{ width: '18rem'}}>
                    <Card.Img className ='fotos' variant="top" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
                    <Card.Body>
                        <Card.Title>Maria Clara</Card.Title>
                        <Card.Text>
                        </Card.Text>
                        <Button variant="primary" type="submit">Adicionar</Button>
                    </Card.Body>
                </Card>
                    </Col>
            </Row>
        </Container>
        </>

    );

}    