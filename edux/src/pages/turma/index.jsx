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
            <button  href="/"  type="button" class="btn btn-outline-success">Feed</button>
                
            </div>
            <div>
            <button href="/turma"  type="button" class="btn btn-outline-success">Atividades</button>
            </div>
            <div>
            <button href="/integrantes"  type="button" class="btn btn-outline-success">Integrantes</button>
                
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

export default Turma;