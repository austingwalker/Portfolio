import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioContainer from "./pages/PortfolioContainer";


const App = () => (
<Router>
    <div>
      <Switch>
      <Route exact path="/" component={PortfolioContainer} /> 
      </Switch>
    </div>
</Router>
);

export default App;
