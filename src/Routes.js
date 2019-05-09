import React from 'react'
//tools
import { Route, Switch } from 'react-router-dom'
//pages
import Main from './components/pages/Main'
import { Other } from './components/pages/Other'
export const Routes = ({dataStore}) => {
    return (
        <Switch>
            <Route path='/' render={(routeProps) => (<Main {...routeProps} dataStore={dataStore}/> )} exact/>
            <Route path='/other' component={Other} />
        </Switch>
    )
}