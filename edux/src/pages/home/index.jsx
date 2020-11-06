import React from 'react';
import'./index.css';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import imagem from '../../assets/img/alan.jpg'
import image from '../../assets/img/acod.jpg'
import img from '../../assets/img/ark.jpg'
import { Container , Form , Button } from 'react-bootstrap';

const Home = () => {
    return(

    <div>
        <Menu/>
        <Container >
        
            <Container className="cont">
            <div className="turmas">
            <div class="gerenciar">
            <h2>Grupos que você está incluído</h2>
            </div>
            <a href="/turma">
            <div class="ark">
                <h5 className="cursoTurma" >Senai Dev. - Tarde</h5>
            </div>
            </a>
            <a href="/turma">
            <div class="ark">
                <h5>Senai Dev. - Tarde</h5>
            </div>
            </a>
            <a href="/turma">
            <div class="ark">
                <h5>Senai Dev. - Tarde</h5>
            </div>
            </a>
            <a href="/turma">
            <div class="ark">
                <h5>Senai Dev. - Tarde</h5>
            </div>
            </a>
            <a href="/turma">
            <div class="ark">
                <h5>Senai Dev. - Tarde</h5>
            </div>
            </a>
        </div>
        
        <div class="divArtigo">
            <article class="artigo">
                <div class="pessoa">
                    <img src={image} alt="acod"/>
                    <h2>Guilherme Parra</h2>
                    <h3>SENAI de Informática</h3>
                </div>
            <div class="comentario">
                <p>
                    Boa tarde galera!
                    A atividade de hoje ja está disponível no grupo, a data de entrega está definida para o dia 10/10/2020. Tentem entregar o mais breve.
                    Tamo junto!
                </p>
            </div>
            
            <img class="Alan" src={imagem} alt="Alan"/>
                <a href="#curtida" title="Dar uma curtida">
                <div class="curtida">
                
                <a href="#curtida">Curtir</a>
            </div>
            </a>
        </article>
            <article class="artigo">
                <div class="pessoa">
                    <img src={image} alt="acod"/>
                    <h2>Guilherme Parra</h2>
                    <h3>SENAI de Informática</h3>
                </div>
            <div class="comentario">
                <p>
                    Bom dia, boa tarde e boa noite!
                    Nova atividade disponivel agora no grupo.
                </p>
            </div>
            
            <img class="Alan" src={imagem} alt="Alan"/>
                <a href="#curtida" title="Dar uma curtida">
                <div class="curtida">
                
                <a href="#curtida">Curtir</a>
            </div>
            </a>
        </article>
        </div>
        </Container>
        </Container>
    
        <Rodape/>
    </div>

    )
    

}
export default Home