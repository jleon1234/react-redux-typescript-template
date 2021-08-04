import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRouter';

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <PrivateRoute isAutenticated={true} path={'/'} component={DashboardRouter} />
                </Switch>
            </Router>
        </>
    )
}