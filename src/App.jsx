import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ListOfActiveAssessments } from './views/ListOfActiveAssessments';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Patterns } from './views/Patterns'
import { Score } from './views/Score'
export const App = () => {
    return (
        <StylesProvider injectFirst>
            <CssBaseline />

            <BrowserRouter>
                <Switch>
                    <Route path="/patterns">
                        <Patterns />
                    </Route>

                    <Route path="/active">
                        <ListOfActiveAssessments />
                    </Route>

                    <Route path="/score">
                        <Score />
                    </Route>

                    <Route path="/">
                        <div>Landing Page to come here</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    );
};
export default App;