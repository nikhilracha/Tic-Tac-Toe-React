import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from '../pages/Home';
// import Room from '../pages/Room';

const Home = lazy(() => import('../pages/Home'))
const Room = lazy(() => import('../pages/Room'))

const Routes = () => (
    <Switch>
        <Suspense fallback={<h4>Loading...</h4>}>
            <Route path="/room/:id" component={Room} />
            <Route exact path="/" component={Home} />
        </Suspense>
    </Switch>
)

export default Routes;