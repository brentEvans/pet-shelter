import React from 'react';
import './App.css';
import "react-router";
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PetForm from './components/PetForm';
import PetDetails from './components/PetDetails';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App container">
      <h1 className="mx-auto jumbotron text-center display-2">Pet Shelter</h1>
      <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
          <Route path="/pets/new" component={PetForm} />
          <Route exact path="/pets/:_id/show" component={PetDetails} />
          <Route path="/pets/:_id/edit" component={EditPet} />
        </BrowserRouter>
    </div>
  );
}

export default App;

