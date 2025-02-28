
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Checkout from './components/Checkout';
import './App.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/books/:id" component={BookDetails}/>
      <Route exact path="/books" component={BookList}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/not-found" component={NotFound}/>
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
