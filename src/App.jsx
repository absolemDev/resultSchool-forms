import React from "react";
import { Route, Switch } from "react-router-dom";
import EditPage from "./pages/editPage";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <div className="container mt-4">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/edit" component={EditPage} />
      </Switch>
    </div>
  );
}

export default App;
