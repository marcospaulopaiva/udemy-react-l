import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'

const tag =  <strong>Olá Mundo 3</strong>
ReactDOM.render(
    <div>
      <Primeiro/>
    </div>,  
    document.getElementById('root')
);