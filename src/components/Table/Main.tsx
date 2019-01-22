import * as React from 'react';
import TableWrap from "./TableWrap";
import Hello from "../Hello";
import {
	// Router,
	Route, Switch,
} from 'react-router';

import { BrowserRouter } from 'react-router-dom'

class Main extends React.Component<any, object> {
	render() {

		return (

			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Hello} />
					<Route exact path='/table' component={TableWrap} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Main;