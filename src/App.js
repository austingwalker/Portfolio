import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioContainer from "./pages/PortfolioContainer";
import Resume from "./components/Resume";

const App = () => (
<Router>
    <div>
      <Switch>
      <Route exact path="/" component={PortfolioContainer} /> 
      {/* <Route exact path="/resume" component={Resume} />  */}
      </Switch>
    </div>
</Router>
);

export default App;
