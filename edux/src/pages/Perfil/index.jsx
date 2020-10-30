import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Img from '../../assets/img/perfil.png'
import './index.css'

const Perfil = () => {
    return(
        <div>
            <Menu/>
            <Container>
                <Container className="Perfil">
                    <Row className="Row">
                        <Col xs={6} md={4}>                       
                            <Image className="imgPerfil" src={Img} roundedCircle />
                            <p>Nome Perfil</p>
                        </Col>                
                    </Row>
                </Container>
            </Container>
            <Rodape/>
        </div>
    )
}

export default Perfil;