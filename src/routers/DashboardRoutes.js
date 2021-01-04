import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { MarvelScreen } from "../components/Marvel/MarvelScreen";
import { Navbar } from "../components/UI/NavBar";
import { HeroeScreen } from "../components/Heroes/HeroeScreen";
import { DCScreen } from "../components/DC/DCScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroeScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
