import React, { useEffect } from 'react';
import {Router, Route, Switch, useHistory} from 'react-router-dom'
import AboutPage from './pages/about';
import HomePage from './pages/home';
const App = ({cb}) => {
    const history = useHistory();
    useEffect(() => {
        history.listen(({pathname}) => {
            // console.log('listen route', data)
            cb(pathname)
        })
    },[])
    return (
        // <Router>
        <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/about'} component={AboutPage} />
         </Switch>
    )
}
export default App;
