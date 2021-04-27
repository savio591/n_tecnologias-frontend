import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardDetails from "./pages/DashboardDetails";

import Login from "./pages/login";

const Routes = () => {
  const basepath = () => {
    // Condition for my site
    let basepath = "/";
    if (document.location.hostname === "savilexperiments.com.br")
      return "/n_tecnologias-frontend";
    return basepath;
  };

  return (
    <BrowserRouter forceRefresh={false} basename={basepath()}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/:id" component={DashboardDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
