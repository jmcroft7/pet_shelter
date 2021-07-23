import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Link, Router} from '@reach/router';
import Create from './components/Create';
import AllPets from './components/AllPets'
import Edit from './components/Edit'
import PetDetail from './components/PetInfo'

function App() {
  return (
    <div className="App m-4">

      <div className="bg-light border p-3">
        <Link to="/pets/create" className="btn btn-success float-end">add a pet to the shelter</Link>
        <Link to="/" className="btn btn-primary float-end mx-5">Home</Link>
        <h1 className='text-info'>Pet Shelter</h1>
      </div>

      <Router>
        <Create path="/pets/create" />
        <AllPets path='/' />
        <Edit path="/pets/edit/:id" />
        <PetDetail path='/pets/info/:id' />
      </Router>
    </div>
  );
}

export default App;
