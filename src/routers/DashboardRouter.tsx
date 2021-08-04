import { Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProjectScreen from "../screens/ProjectScreen";

export const DashboardRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ProjectScreen} />
      </Switch>
    </>
  );
};
