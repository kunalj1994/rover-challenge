import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../layout/home'

const Routes = props => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Fragment>
	)
}

export default Routes