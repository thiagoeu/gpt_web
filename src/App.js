// rafc : React Funcional Component

import { Brand, Cta, NavBar} from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import './App.css'

import React from 'react'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
        
    </div>
  )
}

export default App