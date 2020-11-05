import React from 'react'
import'./index.css';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container } from 'react-bootstrap';

const Turma = () =>{
    return(
        <div>
    <Menu/>
    <Container className="con">
        <div className="classe">
            <h4 className="curso">Senai Dev. - Tarde</h4>
        </div>

        <div className="separacoes">
            <div>
                <a href="/">Feed</a>
            </div>
            <div>
                <a href="/turma">Atividades</a>
            </div>
            <div>
                <a href="/integrantes">Integrantes</a>
            </div>
        </div>

        <article className="activity">
            <h5>
                Atividade:
            </h5>
            <h5>
                Categoria: Formativa
            </h5>
            <h5>
                Objetivo: Executar com maestria o exemplo dado em aula
            </h5>
        </article>
        </Container>
    <Rodape/>
    </div>
    )
}

export default Turma