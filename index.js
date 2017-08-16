import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'
import About from './modules/About'
import Kosan from './modules/Kosan'
import Kos from './modules/Kos'
import Edit from './modules/Edit'
import Delete from './modules/Delete'

import Tambah_kosan from './modules/Tambah_kosan'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/edit/:id_kosan" component={Edit}/>
    <Route path="/delete/:id_kosan" component={Delete}/>
  </Router>
), document.getElementById('app'))
