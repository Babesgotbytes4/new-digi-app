import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { ListOfActiveAssessments } from './views/ListOfActiveAssessments';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Patterns } from './views/Patterns';
import { Assessment }  from './views/Assessment'
import { Score } from './views/Score';
import { createGlobalStyle } from 'styled-components';
import { tokens } from './data/tokens'


const Global = createGlobalStyle`
  body{
      overflow-x: hidden;
      overflow-y: scroll;
  }

`

export const App = () => {
    return (
        <StylesProvider injectFirst>
            <CssBaseline />
            <Global/>

            <BrowserRouter>
                <Switch>
                    <Route path="/patterns">
                        <Patterns />
                    </Route>

                    <Route path="/active">
                        <ListOfActiveAssessments />
                    </Route>

                    <Route path="/assessment/:assessmentId">
                        <Assessment />
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