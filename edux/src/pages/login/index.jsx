import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container , Form , Button } from 'react-bootstrap';
import './index.css';




const Login = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        fetch('https://localhost:5001/api/Login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {

            if(response.ok){
                return response.json();
            }

            alert('Dados Invalidos');
        })
        
    }

    return (
      <div className="completo">
      <Menu />
      <Container className="flex">
         <Container className='form-height'>
                <Container className= "Texto">
                    <h1>EduX</h1>
                    <h2>Faça Parte Voce também!</h2>
                    <h4>Entre agora para usufluir todos os beneficios disponiveis</h4>
                </Container>  

                <Container className='form-height'>
                 <Form className='form-signin' onSubmit={ event => logar(event) }>
                    <div className='text-center'>
                       <img src="" alt=""/>
                    </div>
                    <br/>
                    <small>Informe os dados abaixo</small>
                    <hr/>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={ event => setEmail(event.target.value)} placeholder="Informe o email" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={senha} onChange={ event => setSenha(event.target.value)} placeholder="Senha" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                    <br/><br/>
                    <a href="/cadastrar" style={{ marginTop : '30px' }}>Não tenho conta!</a>
                 </Form>
             </Container>
          </Container>

            
        </Container>         
      <Rodape />
      </div>
  )

}


export default Login