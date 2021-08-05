import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage } from './components/LandingPage/';
import { Recipes } from './components/Recipes/';
import { RecipeDetails } from './components/RecipeDetails/';
import { MakeRecipe } from './components/MakeRecipe/';

//Si quiero que mi landing page no tenga NAV le pongo a todas las rutas /algo/
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipes/:id" component={RecipeDetails} />
        <Route exact path="/recipes/makeRecipe" component={MakeRecipe} />
      </div>
    </Router>
  );
}

export default App;
