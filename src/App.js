import { BrowserRouter, Route} from 'react-router-dom'

import Procedures from './components/Procedures';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';

import './App.css';

function App() {
  const proceduresList = ['root canal', 'crown', 'cleaning']
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />


        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route 
        path="/procedures" 
        render={() => {return <Procedures proceduresList={proceduresList}/>}} />
      </div>
    </BrowserRouter>
  );
}

export default App;