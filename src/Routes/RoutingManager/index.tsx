import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./config";

export function RoutingManager() {

  const renderRoutes = () => {
    return routes.map((route: any, index: number) => (
      <Route
        path={route.path}
        key={index}
        render={(props: object) => <route.component {...props} />}
      />
    ));
  };

  return (
    <div>
      <Router>
        <Switch>{renderRoutes()}</Switch>
      </Router>
    </div>
  );
}
