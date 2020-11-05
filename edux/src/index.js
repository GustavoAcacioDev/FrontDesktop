import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/login';
import Home from './pages/home';
import Cadastrar from './pages/cadastrar';
import Configuracoes from './pages/configuracoes';
import Atividade from './pages/atividades';
import NaoEncontrada from './pages/naoencontrada';
import reportWebVitals from './reportWebVitals';
import Perfil from './pages/Perfil';
import Turma from './pages/turma';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";






const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/cadastrar' component={Cadastrar} />
      <Route exact path='/perfil' component={Perfil} />
      <Route exact path='/configuracoes' component={Configuracoes} />
      <Route exact path='/atividades' component={Atividade} />
      <Route exact path='/naoencontrada' component={NaoEncontrada} />
      <Route exact path='/turma' component={Turma} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
