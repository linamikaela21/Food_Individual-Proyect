import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Nav } from './components/Nav';
import { LandingPage } from './components/LadingPage';
import { Home } from './components/Home';
import { RecipeDetails } from './components/RecipeDetails';
import { MakeRecipe } from './components/MakeRecipe';
import { Recipes } from './components/Recipes';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={SearchBar} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
        <Route exact path="/recipeDetails" component={RecipeDetails} />
        <Route exact path="/makeRecipe" component={MakeRecipe} />
      </div>
    </Router>
  );
}

export default App;
