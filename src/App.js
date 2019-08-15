import React from 'react'
import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'
import EditarGenero from './EditarGenero'
import Series from './Series'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

  function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/generos' exact component={Generos} />
        <Route path='/series' exact component={Series} />
        <Route path='/generos/novo' exact component={NovoGenero} />
        <Route path='/series/novo' exact component={NovaSerie} />
        <Route path='/series/:id' exact component={InfoSerie} />
        <Route path='/generos/:id' exact component={EditarGenero} />
      </Switch>
    </Router>
  )
}
export default App
