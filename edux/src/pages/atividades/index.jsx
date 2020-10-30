import React, { Component } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container , Form , Button } from 'react-bootstrap';
import './index.css';




const Atividade = () => {
    
    
        
        return(
            
            <div class="PrimeiraDiv">
                <Menu/>
               <Container class="main">
                
                <div class="BordaText">
                  <h1 class="h1">Atividades</h1>
                </div>



                <div class='Postagem'>
                <Container >
                
                <div class="form-group">
                <label for="comment"></label>
                <textarea class="form-control" rows="5" id="comment" placeholder="Publique sua atividade aqui"></textarea>
                </div>
                                    
                <button type="button" class="btn btn-primary btn-block">Postar</button>
                <button type="button" class="btn btn-primary btn-block">Cancelar</button>
                </Container>
                </div>


                <div class="Borda">
                <h2 class="Text">Postagens:</h2>
                </div>
                

                <div class='Postagens'>
                <Container class="textoo"> 
                <div class="media">
                    <div class="media-body">
                        <h4 class="media-heading">Teacher</h4>
                        <p>Lorem ipsum...</p>
                    </div>
        
                </div>
                <div class="media">
                    <div class="media-body">
                        <h4 class="media-heading">Teacher</h4>
                        <p>Lorem ipsum...</p>
                    </div>
        
                </div>
                <div class="media">
                    <div class="media-body">
                        <h4 class="media-heading">Teacher</h4>
                        <p>Lorem ipsum...</p>
                    </div>
        
                </div>
                <div class="media">
                    <div class="media-body">
                        <h4 class="media-heading">Teacher</h4>
                        <p>Lorem ipsum...</p>
                    </div>
        
                </div>
                <div class="media">
                    <div class="media-body">
                        <h4 class="media-heading">Teacher</h4>
                        <p>Lorem ipsum...</p>
                    </div>
        
                </div>
                </Container>
                    
                </div>

                <div>
               <ul class="pagination">
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                </ul>

                </div>


               </Container>
                <Rodape/>
                
            </div>

            
        )
}

export default Atividade;