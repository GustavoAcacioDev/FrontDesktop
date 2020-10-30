import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import Img from '../../assets/img/perfil.png'
import './index.css'

const Perfil = () => {
    return(
        <div className="body">
            <Menu/>
            <Container>
                <Container className="perfil">
                    <Row className="Row">
                        <Col xs={6} md={4}>                       
                            <Image className="imgPerfil" src={Img} roundedCircle />
                            <p>(Nome Usuario)</p>
                        </Col>                
                    </Row>
                    <Container className="container2">
                        <p>Estuda em (Instituição)</p>
                        <p>Nasceu em (DataNasc)</p>
                        <p>Mora em (Endereço)</p>
                    </Container>
                </Container>
                <Container className="tabela">
                    <p>Turmas que você participa</p>
                    <a href="/atividades" className="p2">Atividades</a>
                </Container>
            </Container>
            <Rodape/>
        </div>
    )
}

export default Perfil;