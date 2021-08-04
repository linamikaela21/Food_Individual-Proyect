import './App.css';
import React from "react";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { LandingPage } from './components/LadingPage';
import { Home } from './components/Home';
import { RecipeDetails } from './components/RecipeDetails';
import { MakeRecipe } from './components/MakeRecipe';
import { Recipes } from './components/Recipes';

function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" component={Nav} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipesDetails" component={RecipeDetails} />
      <Route path="/makeRecipe" component={MakeRecipe} />
    </div>
    </Router>
  );
}

export default App;
