import { BrowserRouter, Route} from 'react-router-dom'

import Procedures from './components/Procedures';
import Home from './components/Home';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Procedures" component={Procedures} />
      </div>
    </BrowserRouter>
  );
}

export default App;