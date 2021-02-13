import './css/App.css';

//import Navbar from './views/navbar'
//import Footer from "./views/footer.js";
//import CRUD from './views/crud.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {lazy, Suspense} from 'react';

const Navbar = lazy(() => import('./views/navbar'));
const Footer = lazy(() => import('./views/footer'));
const Main = lazy(() => import('./views/main'));
const Lojas = lazy(() => import('./views/lojas'));
const Produtos = lazy(() => import('./views/produtos'));
const Contato = lazy(() => import('./views/contato'));

function App() {
  return (
    <Router>
      <Suspense fallback= {<p>Carregando...</p>}>
        <div className="App">
              <Suspense fallback= {<p>Carregando...</p>}>
              	<Navbar />
              </Suspense>
              <Route exact path="/" component={Main} />
              <Route exact path='/produtos' component={Produtos} />
              <Route exact path="/lojas" component={Lojas} />
              <Route exact path="/contato" component={Contato} />
			  <Suspense fallback= {<p>Carregando...</p>}>
              	<Footer />
			  </Suspense>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
