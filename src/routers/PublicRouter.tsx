import { Redirect, Route } from "react-router";
import { RouterInterface } from "../interfaces/interface";
// import { IRouter } from '../interfaces/router.interface'

export const PublicRouter = ({
  isAutenticated,
  component: Component,
  ...rest
}: RouterInterface) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        !isAutenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
