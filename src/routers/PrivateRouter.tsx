import { Redirect, Route } from 'react-router'
import { RouterInterface } from '../interfaces/interface';



export const PrivateRoute = ({
    isAutenticated,
    component:Component,
    ...rest
}: RouterInterface) => {

    return (
        <Route  {...rest}
            component={ (props: any) => (
                (isAutenticated) ? <Component  {...props} /> : <Redirect to="/login"  />
            )}
        />
    )
}

