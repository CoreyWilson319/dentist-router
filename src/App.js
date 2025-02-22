import { BrowserRouter, Route} from 'react-router-dom'

import Procedures from './components/Procedures';
import ProcedureDetails from './components/ProcedureDetails';
import Home from './components/Home';
import Contact from './components/Contact';
import Nav from './components/Nav';

import './App.css';

function App() {
  const proceduresList = [
    {
      name: 'Root Canal',
      id: 1,
      description: 'Very painful'
    },
    {
      name: 'Crown',
      id: 2,
      description: 'Absolutely awful'
    },
    {
      name: 'Cleaning',
      id: 3,
      description: 'Routine torture'
    },
  ]


  return (
    <BrowserRouter>
      <div className="App">
        <Nav />


        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route 
        exact
        path="/procedures" 
        render={() => {return <Procedures proceduresList={proceduresList}/>}} />
        <Route 
        path="/procedures/:procedureId" 
        render={(routeProps) => { 
          const id = routeProps.match.params.procedureId
          const targetProcedure = proceduresList.find((p) => p.id === parseInt(id))
          return <ProcedureDetails procedure={targetProcedure} />
        }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;