import { useState } from 'react'
import Product from './components/Product'
import ProductLista from './components/ProductLista'
import SimpleList from './components/SimpleList'
import './App.css'


function App() {

	return (
		<div className="app">
      <ProductLista />
      <SimpleList />
		</div>
	)
}


export default App