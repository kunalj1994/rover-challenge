import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from '../layout/form'

const Routes = props => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={Form} />
			</Switch>
		</Fragment>
	)
}

export default Routes