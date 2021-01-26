import React, { useContext } from "react";
import "./components/All.css";
import Header from "./components/Header";
import Register from "./components/Register";
import { Route, Switch } from "react-router-dom";
import Intro from "./components/Intro";
import Functions from "./components/Functions";
import Other from "./components/Other";
import Seek from "./components/Seek";
import How from "./components/How";
import { firebaseAuth } from "./provider/authProvider";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Vegetables from "./components/ingredients/Vegetables";
import SingleVege from "./components/ingredients/SingleVege";
import Pasta from "./components/ingredients/Pasta";
import SinglePasta from "./components/ingredients/SinglePasta";
import Various from "./components/ingredients/Various";
import SingleVarious from "./components/ingredients/SingleVarious";
import Recipes from "./components/ingredients/Recipes";
import SingleRecipe from "./components/ingredients/SingleRecipe";
import Groats from "./components/ingredients/Groats";
import SingleGroat from "./components/ingredients/SingleGroat";
import RecipesAll from "./components/ingredients/RecipesAll";
import NavBar from "./components/NavBar";

const App = () => {
  const { token } = useContext(firebaseAuth);

  return (
    <>
      <NavBar />
      <div className="header">
        {/*<div>*/}
        {/*    <Route path='/logowanie'  component={Login}/>*/}
        {/*    <Route path='/rejestracja'  component={Register}/>*/}
        {/*</div>*/}

        <Header />

        <div>
          <Switch>
            <PrivateRoute exact path="/" component={Intro} />
            <PrivateRoute exact path="/funkcje" component={Functions} />
            <PrivateRoute path="/inne" component={Other} />
            <PrivateRoute exact path="/funkcje/znajdz" component={Seek} />
            <PrivateRoute
              exact
              path="/funkcje/znajdz/przepisy"
              component={RecipesAll}
            />
            <PrivateRoute
              path="/funkcje/znajdz/przepisy/:slug/"
              component={SingleRecipe}
            />
            <PrivateRoute exact path="/funkcje/jak" component={How} />
            <PrivateRoute
              exact
              path="/funkcje/jak/warzywa"
              component={Vegetables}
            />
            <PrivateRoute
              path="/funkcje/jak/warzywa/:slug"
              component={SingleVege}
            />
            <PrivateRoute
              exact
              path="/funkcje/jak/makarony"
              component={Pasta}
            />
            <PrivateRoute
              path="/funkcje/jak/makarony/:slug"
              component={SinglePasta}
            />
            <PrivateRoute exact path="/funkcje/jak/inne" component={Various} />
            <PrivateRoute
              path="/funkcje/jak/inne/:slug"
              component={SingleVarious}
            />
            <PrivateRoute exact path="/funkcje/jak/kasze" component={Groats} />
            <PrivateRoute
              path="/funkcje/jak/kasze/:slug"
              component={SingleGroat}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default App;
